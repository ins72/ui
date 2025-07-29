#!/usr/bin/env node

/**
 * Setup Git Hooks and Automated Checks for MEWAYZ Frontend
 * Based on Frontend Development Rules & Style Consistency Guidelines
 * 
 * This script sets up:
 * - Husky git hooks
 * - Pre-commit style consistency checks
 * - Pre-push validation
 * - Commit message linting
 * - Branch name validation
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

class HooksSetup {
  constructor() {
    this.frontendDir = path.join(__dirname, '..');
    this.huskyDir = path.join(this.frontendDir, '.husky');
    this.projectRoot = path.resolve(this.frontendDir, '..');
  }

  async setup() {
    console.log(chalk.blue.bold('\n🚀 Setting up MEWAYZ Frontend Git Hooks\n'));

    try {
      // Check if we're in a git repository
      this.checkGitRepository();
      
      // Install dependencies if needed
      await this.installDependencies();
      
      // Initialize Husky
      await this.initializeHusky();
      
      // Create hook files
      await this.createHookFiles();
      
      // Create configuration files
      await this.createConfigFiles();
      
      // Create package.json scripts
      await this.updatePackageJson();
      
      console.log(chalk.green.bold('\n✅ Git hooks setup completed successfully!\n'));
      this.printUsageInstructions();
      
    } catch (error) {
      console.error(chalk.red('\n❌ Setup failed:'), error.message);
      process.exit(1);
    }
  }

  checkGitRepository() {
    try {
      execSync('git rev-parse --git-dir', { 
        cwd: this.projectRoot,
        stdio: 'ignore' 
      });
      console.log(chalk.green('✓ Git repository detected'));
    } catch (error) {
      throw new Error('Not in a git repository. Please run git init first.');
    }
  }

  async installDependencies() {
    console.log(chalk.blue('📦 Checking dependencies...'));
    
    const requiredDeps = [
      'husky',
      'prettier',
      'eslint',
      '@commitlint/cli',
      '@commitlint/config-conventional',
      'validate-branch-name',
      'lint-staged',
      'chalk',
      'glob'
    ];

    const packageJsonPath = path.join(this.frontendDir, 'package.json');
    let packageJson = {};
    
    if (fs.existsSync(packageJsonPath)) {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    }

    const missingDeps = requiredDeps.filter(dep => {
      return !packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep];
    });

    if (missingDeps.length > 0) {
      console.log(chalk.yellow(`Installing missing dependencies: ${missingDeps.join(', ')}`));
      
      try {
        // Try npm first, then yarn, then pnpm
        const packageManager = this.detectPackageManager();
        const installCmd = `${packageManager} add -D ${missingDeps.join(' ')}`;
        
        execSync(installCmd, { 
          cwd: this.frontendDir,
          stdio: 'inherit' 
        });
        
        console.log(chalk.green('✓ Dependencies installed'));
      } catch (error) {
        console.log(chalk.yellow('⚠️  Could not auto-install dependencies. Please install manually:'));
        console.log(chalk.cyan(`npm install -D ${missingDeps.join(' ')}`));
      }
    } else {
      console.log(chalk.green('✓ All dependencies are installed'));
    }
  }

  detectPackageManager() {
    if (fs.existsSync(path.join(this.frontendDir, 'package-lock.json'))) return 'npm';
    if (fs.existsSync(path.join(this.frontendDir, 'yarn.lock'))) return 'yarn';
    if (fs.existsSync(path.join(this.frontendDir, 'pnpm-lock.yaml'))) return 'pnpm';
    if (fs.existsSync(path.join(this.frontendDir, 'bun.lockb'))) return 'bun';
    return 'npm'; // default
  }

  async initializeHusky() {
    console.log(chalk.blue('🐕 Initializing Husky...'));
    
    try {
      // Create .husky directory if it doesn't exist
      if (!fs.existsSync(this.huskyDir)) {
        fs.mkdirSync(this.huskyDir, { recursive: true });
      }

      // Initialize husky
      execSync('npx husky init', { 
        cwd: this.frontendDir,
        stdio: 'inherit' 
      });
      
      console.log(chalk.green('✓ Husky initialized'));
    } catch (error) {
      throw new Error(`Failed to initialize Husky: ${error.message}`);
    }
  }

  async createHookFiles() {
    console.log(chalk.blue('📝 Creating git hook files...'));

    const hooks = {
      'pre-commit': this.getPreCommitHook(),
      'pre-push': this.getPrePushHook(),
      'commit-msg': this.getCommitMsgHook()
    };

    for (const [hookName, hookContent] of Object.entries(hooks)) {
      const hookPath = path.join(this.huskyDir, hookName);
      fs.writeFileSync(hookPath, hookContent);
      
      // Make executable on Unix systems
      if (process.platform !== 'win32') {
        execSync(`chmod +x "${hookPath}"`);
      }
      
      console.log(chalk.green(`✓ Created ${hookName} hook`));
    }
  }

  getPreCommitHook() {
    return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Running pre-commit checks..."

# Run lint-staged for staged files
npx lint-staged

# Run style consistency check
node scripts/style-consistency-check.js

echo "✅ Pre-commit checks passed!"
`;
  }

  getPrePushHook() {
    return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Running pre-push validation..."

# Validate branch name
npx validate-branch-name

# Run full style consistency check
node scripts/style-consistency-check.js --verbose

# Check for console.log statements in production files
if git diff --cached --name-only | grep -E "\\.(tsx?|jsx?)$" | xargs grep -l "console\\.log" 2>/dev/null; then
  echo "❌ Found console.log statements in staged files. Please remove them before pushing."
  exit 1
fi

echo "✅ Pre-push validation passed!"
`;
  }

  getCommitMsgHook() {
    return `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Validate commit message format
npx --no -- commitlint --edit $1
`;
  }

  async createConfigFiles() {
    console.log(chalk.blue('⚙️  Creating configuration files...'));

    // CommitLint configuration
    await this.createCommitLintConfig();
    
    // Branch name validation
    await this.createBranchNameConfig();
    
    // Lint-staged configuration
    await this.createLintStagedConfig();
    
    // Prettier configuration
    await this.createPrettierConfig();
  }

  async createCommitLintConfig() {
    const configPath = path.join(this.frontendDir, 'commitlint.config.js');
    
    if (!fs.existsSync(configPath)) {
      const config = `module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",     // New feature
        "fix",      // Bug fix
        "docs",     // Documentation changes
        "style",    // Code style changes (formatting, etc.)
        "refactor", // Code refactoring
        "perf",     // Performance improvements
        "test",     // Adding or modifying tests
        "build",    // Build system changes
        "ci",       // CI configuration changes
        "chore",    // General maintenance
        "revert",   // Reverting previous changes
      ],
    ],
    "type-case": [2, "always", "lowerCase"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lowerCase"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 100],
  },
};`;
      
      fs.writeFileSync(configPath, config);
      console.log(chalk.green('✓ Created commitlint.config.js'));
    }
  }

  async createBranchNameConfig() {
    const configPath = path.join(this.frontendDir, '.validate-branch-namerc.json');
    
    if (!fs.existsSync(configPath)) {
      const config = {
        pattern: "^(main|master|dev|uat|ppt|(feature|release|bugfix|hotfix|test|chore)/(:\\d+-)?[a-zA-Z0-9\\-]+)$",
        errorMsg: "Branch name must follow the pattern: (main|master|dev|uat|ppt|(feature|release|bugfix|hotfix|test|chore)/(:<TASK-NO>-)?<SHORT-DESCRIPTION>). Task number is optional and can reference Jira/GitHub issues/project management tools. Use 'git branch -m <newname>' to rename your branch."
      };
      
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      console.log(chalk.green('✓ Created branch name validation config'));
    }
  }

  async createLintStagedConfig() {
    const configPath = path.join(this.frontendDir, '.lintstagedrc.js');
    
    if (!fs.existsSync(configPath)) {
      const config = `module.exports = {
  // TypeScript and JavaScript files
  "*.{ts,tsx,js,jsx}": [
    "eslint --config .eslintrc.style-consistency.js --fix",
    "prettier --write",
  ],
  
  // CSS files
  "*.{css,scss,sass}": [
    "prettier --write",
  ],
  
  // JSON files
  "*.json": [
    "prettier --write",
  ],
  
  // Markdown files
  "*.md": [
    "prettier --write",
  ],
  
  // Check style consistency for all staged files
  "*": [
    () => "node scripts/style-consistency-check.js",
  ],
};`;
      
      fs.writeFileSync(configPath, config);
      console.log(chalk.green('✓ Created lint-staged configuration'));
    }
  }

  async createPrettierConfig() {
    const configPath = path.join(this.frontendDir, '.prettierrc.js');
    
    if (!fs.existsSync(configPath)) {
      const config = `module.exports = {
  // Basic formatting
  semi: true,
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  
  // JSX specific
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  
  // Other options
  arrowParens: "avoid",
  endOfLine: "lf",
  
  // Plugins for Tailwind CSS (if used)
  plugins: ["prettier-plugin-tailwindcss"],
  
  // File type overrides
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 120,
        proseWrap: "always",
      },
    },
  ],
};`;
      
      fs.writeFileSync(configPath, config);
      console.log(chalk.green('✓ Created Prettier configuration'));
    }
  }

  async updatePackageJson() {
    console.log(chalk.blue('📄 Updating package.json scripts...'));
    
    const packageJsonPath = path.join(this.frontendDir, 'package.json');
    let packageJson = {};
    
    if (fs.existsSync(packageJsonPath)) {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    }

    // Add scripts
    packageJson.scripts = {
      ...packageJson.scripts,
      "prepare": "husky init",
      "style-check": "node scripts/style-consistency-check.js",
      "style-check:fix": "node scripts/style-consistency-check.js --fix",
      "style-check:verbose": "node scripts/style-consistency-check.js --verbose",
      "lint": "eslint --config .eslintrc.style-consistency.js .",
      "lint:fix": "eslint --config .eslintrc.style-consistency.js . --fix",
      "format": "prettier --write .",
      "format:check": "prettier --check .",
      "commit": "git add . && git commit",
      "validate-branch": "validate-branch-name",
      "setup-hooks": "node scripts/setup-hooks.js"
    };

    // Add lint-staged config if not in separate file
    if (!fs.existsSync(path.join(this.frontendDir, '.lintstagedrc.js'))) {
      packageJson["lint-staged"] = {
        "*.{ts,tsx,js,jsx}": [
          "eslint --config .eslintrc.style-consistency.js --fix",
          "prettier --write"
        ],
        "*.{css,scss,sass,json,md}": [
          "prettier --write"
        ]
      };
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(chalk.green('✓ Updated package.json with scripts'));
  }

  printUsageInstructions() {
    console.log(chalk.cyan.bold('📚 Usage Instructions:\n'));
    
    console.log(chalk.white('Git Workflow:'));
    console.log(chalk.gray('  • Commits must follow Conventional Commits format'));
    console.log(chalk.gray('  • Branch names must follow the naming convention'));
    console.log(chalk.gray('  • Pre-commit hooks will check style consistency'));
    console.log(chalk.gray('  • Pre-push hooks will validate everything\n'));
    
    console.log(chalk.white('Available Scripts:'));
    console.log(chalk.cyan('  npm run style-check          ') + chalk.gray('- Check style consistency'));
    console.log(chalk.cyan('  npm run style-check:fix       ') + chalk.gray('- Check and auto-fix issues'));
    console.log(chalk.cyan('  npm run style-check:verbose   ') + chalk.gray('- Detailed consistency check'));
    console.log(chalk.cyan('  npm run lint                  ') + chalk.gray('- Run ESLint'));
    console.log(chalk.cyan('  npm run lint:fix              ') + chalk.gray('- Run ESLint with auto-fix'));
    console.log(chalk.cyan('  npm run format                ') + chalk.gray('- Format code with Prettier'));
    console.log(chalk.cyan('  npm run validate-branch       ') + chalk.gray('- Check branch name\n'));
    
    console.log(chalk.white('Commit Message Format:'));
    console.log(chalk.cyan('  feat(scope): add new feature'));
    console.log(chalk.cyan('  fix(scope): resolve bug'));
    console.log(chalk.cyan('  docs: update documentation\n'));
    
    console.log(chalk.white('Branch Naming Examples:'));
    console.log(chalk.cyan('  feature/user-authentication'));
    console.log(chalk.cyan('  feature/:JIRA-123-user-auth'));
    console.log(chalk.cyan('  bugfix/fix-login-redirect'));
    console.log(chalk.cyan('  hotfix/:GH-456-critical-fix\n'));
    
    console.log(chalk.green.bold('🎉 Your project is now set up with automated style consistency checks!'));
    console.log(chalk.blue('📖 See frontend/COMPONENT_MAPPING.md for component guidelines'));
  }
}

// CLI interface
if (require.main === module) {
  const setup = new HooksSetup();
  setup.setup().catch(error => {
    console.error(chalk.red('Setup failed:'), error);
    process.exit(1);
  });
}

module.exports = HooksSetup; 