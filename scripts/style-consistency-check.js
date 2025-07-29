#!/usr/bin/env node

/**
 * Style Consistency Checker for MEWAYZ Frontend
 * Enforces adherence to Frontend Development Rules & Style Consistency Guidelines
 * 
 * Usage: node scripts/style-consistency-check.js [--fix] [--verbose]
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

class StyleConsistencyChecker {
  constructor(options = {}) {
    this.fix = options.fix || false;
    this.verbose = options.verbose || false;
    this.errors = [];
    this.warnings = [];
    this.fixes = [];
    
    // Style reference paths
    this.styleReferencePath = path.join(__dirname, '../style-reference');
    this.componentsPath = path.join(this.styleReferencePath, 'components');
    this.templatesPath = path.join(this.styleReferencePath, 'templates');
    this.globalsCssPath = path.join(this.styleReferencePath, 'app/globals.css');
    
    // Target paths to check
    this.appPath = path.join(__dirname, '../app');
    this.mainComponentsPath = path.join(__dirname, '../components');
  }

  async run() {
    console.log(chalk.blue.bold('\n🔍 MEWAYZ Style Consistency Check\n'));
    
    try {
      // Load available components and templates
      await this.loadStyleReference();
      
      // Check all frontend files
      await this.checkAppPages();
      await this.checkComponents();
      await this.checkImportPatterns();
      await this.checkCSSUsage();
      await this.checkComponentStructure();
      
      // Report results
      this.reportResults();
      
      return this.errors.length === 0;
    } catch (error) {
      console.error(chalk.red('Error running style consistency check:'), error);
      return false;
    }
  }

  async loadStyleReference() {
    if (this.verbose) console.log('📚 Loading style reference...');
    
    this.availableComponents = await this.getAvailableComponents();
    this.availableTemplates = await this.getAvailableTemplates();
    this.cssClasses = await this.extractCSSClasses();
    
    if (this.verbose) {
      console.log(`Found ${this.availableComponents.length} components`);
      console.log(`Found ${this.availableTemplates.length} templates`);
      console.log(`Found ${this.cssClasses.length} CSS classes`);
    }
  }

  async getAvailableComponents() {
    const components = [];
    if (!fs.existsSync(this.componentsPath)) return components;
    
    const componentDirs = fs.readdirSync(this.componentsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    for (const dir of componentDirs) {
      const indexPath = path.join(this.componentsPath, dir, 'index.tsx');
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8');
        const exportMatch = content.match(/export default (\w+)/);
        if (exportMatch) {
          components.push({
            name: exportMatch[1],
            path: `@/components/${dir}`,
            directory: dir
          });
        }
      }
    }
    
    return components;
  }

  async getAvailableTemplates() {
    const templates = [];
    if (!fs.existsSync(this.templatesPath)) return templates;
    
    const findTemplates = (dir, basePath = '') => {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const item of items) {
        if (item.isDirectory()) {
          findTemplates(path.join(dir, item.name), `${basePath}${item.name}/`);
        } else if (item.name === 'index.tsx') {
          const content = fs.readFileSync(path.join(dir, item.name), 'utf8');
          const exportMatch = content.match(/export default (\w+)/);
          if (exportMatch) {
            templates.push({
              name: exportMatch[1],
              path: `@/templates/${basePath.slice(0, -1)}`,
              directory: basePath.slice(0, -1)
            });
          }
        }
      }
    };
    
    findTemplates(this.templatesPath);
    return templates;
  }

  async extractCSSClasses() {
    const classes = new Set();
    
    if (fs.existsSync(this.globalsCssPath)) {
      const content = fs.readFileSync(this.globalsCssPath, 'utf8');
      
      // Extract class names from CSS
      const classMatches = content.matchAll(/\.([a-zA-Z][\w-]*)/g);
      for (const match of classMatches) {
        classes.add(match[1]);
      }
      
      // Extract CSS custom properties
      const customProps = content.matchAll(/--([a-zA-Z][\w-]*)/g);
      for (const match of customProps) {
        classes.add(`--${match[1]}`);
      }
    }
    
    return Array.from(classes);
  }

  async checkAppPages() {
    if (this.verbose) console.log('📄 Checking app pages...');
    
    const pageFiles = glob.sync(path.join(this.appPath, '**/page.tsx'));
    
    for (const filePath of pageFiles) {
      await this.checkPageFile(filePath);
    }
  }

  async checkPageFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check if page uses Layout component
    if (!content.includes('Layout')) {
      this.warnings.push({
        file: relativePath,
        message: 'Page should use Layout component from style-reference',
        suggestion: 'Import and wrap content with Layout component'
      });
    }
    
    // Check for inline styles
    if (content.includes('style={{') || content.includes('style={')) {
      this.errors.push({
        file: relativePath,
        message: 'Inline styles detected - use CSS classes from style-reference instead',
        suggestion: 'Replace inline styles with appropriate CSS classes'
      });
    }
    
    // Check for custom components that might exist in style-reference
    const componentImports = this.extractComponentImports(content);
    for (const component of componentImports) {
      const styleRefComponent = this.availableComponents.find(c => c.name === component);
      if (styleRefComponent) {
        if (!content.includes(styleRefComponent.path)) {
          this.warnings.push({
            file: relativePath,
            message: `Consider using ${component} from style-reference instead of custom implementation`,
            suggestion: `Import from ${styleRefComponent.path}`
          });
        }
      }
    }
    
    // Check for proper export const dynamic for pages
    if (!content.includes('export const dynamic')) {
      const routePath = relativePath.replace('frontend/app/', '').replace('/page.tsx', '');
      const isDynamic = this.shouldBeDynamic(routePath);
      
      if (isDynamic) {
        this.warnings.push({
          file: relativePath,
          message: 'Dynamic page should have export const dynamic = "force-dynamic"',
          suggestion: 'Add export const dynamic = "force-dynamic" for user-specific content'
        });
      }
    }
  }

  shouldBeDynamic(routePath) {
    const dynamicRoutes = [
      'dashboard', 'admin', 'settings', 'messages', 'notifications',
      'customers', 'orders', 'analytics', 'profile', 'account'
    ];
    
    return dynamicRoutes.some(route => routePath.includes(route));
  }

  async checkComponents() {
    if (this.verbose) console.log('🧩 Checking components...');
    
    if (!fs.existsSync(this.mainComponentsPath)) return;
    
    const componentFiles = glob.sync(path.join(this.mainComponentsPath, '**/*.tsx'));
    
    for (const filePath of componentFiles) {
      await this.checkComponentFile(filePath);
    }
  }

  async checkComponentFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    const componentName = path.basename(path.dirname(filePath));
    
    // Check if component already exists in style-reference
    const existingComponent = this.availableComponents.find(c => 
      c.name.toLowerCase() === componentName.toLowerCase()
    );
    
    if (existingComponent) {
      this.warnings.push({
        file: relativePath,
        message: `Component ${componentName} already exists in style-reference`,
        suggestion: `Consider using ${existingComponent.path} instead`
      });
    }
    
    // Check TypeScript prop interfaces
    if (!content.includes('interface') && !content.includes('type') && content.includes('props')) {
      this.errors.push({
        file: relativePath,
        message: 'Component should have TypeScript prop interface',
        suggestion: 'Define props interface following style-reference patterns'
      });
    }
    
    // Check for proper export pattern
    if (!content.includes('export default')) {
      this.errors.push({
        file: relativePath,
        message: 'Component should have default export',
        suggestion: 'Add default export following style-reference patterns'
      });
    }
  }

  async checkImportPatterns() {
    if (this.verbose) console.log('📦 Checking import patterns...');
    
    const allFiles = [
      ...glob.sync(path.join(this.appPath, '**/*.tsx')),
      ...glob.sync(path.join(this.mainComponentsPath, '**/*.tsx'))
    ];
    
    for (const filePath of allFiles) {
      await this.checkFileImports(filePath);
    }
  }

  async checkFileImports(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check import order
    const imports = this.extractImports(content);
    let lastStyleRefImport = -1;
    let firstOtherImport = imports.length;
    
    for (let i = 0; i < imports.length; i++) {
      if (imports[i].includes('@/components') || imports[i].includes('@/templates')) {
        lastStyleRefImport = i;
      } else if (!imports[i].startsWith('react') && !imports[i].startsWith('next') && firstOtherImport === imports.length) {
        firstOtherImport = i;
      }
    }
    
    if (lastStyleRefImport > firstOtherImport) {
      this.warnings.push({
        file: relativePath,
        message: 'Style-reference imports should come before other internal imports',
        suggestion: 'Reorder imports to prioritize @/components and @/templates'
      });
    }
  }

  async checkCSSUsage() {
    if (this.verbose) console.log('🎨 Checking CSS usage...');
    
    const allFiles = [
      ...glob.sync(path.join(this.appPath, '**/*.tsx')),
      ...glob.sync(path.join(this.mainComponentsPath, '**/*.tsx'))
    ];
    
    for (const filePath of allFiles) {
      await this.checkFileCSSUsage(filePath);
    }
  }

  async checkFileCSSUsage(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Extract className usage
    const classNames = this.extractClassNames(content);
    
    for (const className of classNames) {
      // Check if className exists in style-reference
      const isKnownClass = this.cssClasses.includes(className) || 
                          this.isTailwindClass(className) ||
                          className.startsWith('data-') ||
                          className.includes(':');
      
      if (!isKnownClass && !this.isUtilityClass(className)) {
        this.warnings.push({
          file: relativePath,
          message: `CSS class "${className}" not found in style-reference`,
          suggestion: 'Use existing CSS classes from style-reference or add to globals.css'
        });
      }
    }
  }

  isTailwindClass(className) {
    // Common Tailwind patterns
    const tailwindPatterns = [
      /^(flex|grid|block|inline|hidden)/,
      /^(w-|h-|m-|p-|text-|bg-|border-)/,
      /^(sm:|md:|lg:|xl:|2xl:)/,
      /^(max-|min-)/,
      /-\d+$/,
      /^(hover:|focus:|active:|disabled:)/
    ];
    
    return tailwindPatterns.some(pattern => pattern.test(className));
  }

  isUtilityClass(className) {
    const utilityPatterns = [
      /^(container|wrapper|content)/,
      /^(sr-only|visually-hidden)/,
      /^(clearfix|cf)/
    ];
    
    return utilityPatterns.some(pattern => pattern.test(className));
  }

  async checkComponentStructure() {
    if (this.verbose) console.log('🏗️ Checking component structure...');
    
    if (!fs.existsSync(this.mainComponentsPath)) return;
    
    const componentDirs = fs.readdirSync(this.mainComponentsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    for (const dir of componentDirs) {
      await this.checkComponentStructureDir(dir);
    }
  }

  async checkComponentStructureDir(dirName) {
    const dirPath = path.join(this.mainComponentsPath, dirName);
    const indexPath = path.join(dirPath, 'index.tsx');
    
    if (!fs.existsSync(indexPath)) {
      this.errors.push({
        file: `components/${dirName}/`,
        message: 'Component directory should have index.tsx file',
        suggestion: 'Create index.tsx following style-reference component structure'
      });
    }
    
    // Check if directory name matches component name
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf8');
      const exportMatch = content.match(/export default (\w+)/);
      
      if (exportMatch && exportMatch[1] !== dirName) {
        this.warnings.push({
          file: `components/${dirName}/index.tsx`,
          message: `Component name "${exportMatch[1]}" should match directory name "${dirName}"`,
          suggestion: 'Rename component or directory for consistency'
        });
      }
    }
  }

  extractComponentImports(content) {
    const imports = [];
    const importRegex = /import\s+(\w+)/g;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      if (match[1] && !['React', 'useState', 'useEffect', 'Fragment'].includes(match[1])) {
        imports.push(match[1]);
      }
    }
    
    return imports;
  }

  extractImports(content) {
    const lines = content.split('\n');
    return lines.filter(line => line.trim().startsWith('import'));
  }

  extractClassNames(content) {
    const classNames = new Set();
    
    // Extract className="..." and className={...}
    const classRegex = /className=["']([^"']+)["']|className=\{[^}]*["']([^"']+)["'][^}]*\}/g;
    let match;
    
    while ((match = classRegex.exec(content)) !== null) {
      const classString = match[1] || match[2];
      if (classString) {
        classString.split(/\s+/).forEach(cls => {
          if (cls.trim()) classNames.add(cls.trim());
        });
      }
    }
    
    return Array.from(classNames);
  }

  reportResults() {
    console.log('\n📊 Style Consistency Check Results\n');
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log(chalk.green.bold('✅ All checks passed! Your code follows style-reference guidelines.'));
      return;
    }
    
    if (this.errors.length > 0) {
      console.log(chalk.red.bold(`❌ ${this.errors.length} Error(s):`));
      this.errors.forEach((error, index) => {
        console.log(chalk.red(`  ${index + 1}. ${error.file}`));
        console.log(chalk.red(`     ${error.message}`));
        if (error.suggestion) {
          console.log(chalk.yellow(`     💡 ${error.suggestion}`));
        }
        console.log();
      });
    }
    
    if (this.warnings.length > 0) {
      console.log(chalk.yellow.bold(`⚠️  ${this.warnings.length} Warning(s):`));
      this.warnings.forEach((warning, index) => {
        console.log(chalk.yellow(`  ${index + 1}. ${warning.file}`));
        console.log(chalk.yellow(`     ${warning.message}`));
        if (warning.suggestion) {
          console.log(chalk.cyan(`     💡 ${warning.suggestion}`));
        }
        console.log();
      });
    }
    
    if (this.fixes.length > 0) {
      console.log(chalk.blue.bold(`🔧 ${this.fixes.length} Fix(es) Applied:`));
      this.fixes.forEach((fix, index) => {
        console.log(chalk.blue(`  ${index + 1}. ${fix.file}: ${fix.message}`));
      });
      console.log();
    }
    
    console.log(chalk.blue('📖 For more information, see: frontend/COMPONENT_MAPPING.md'));
    console.log(chalk.blue('🔗 Style reference: frontend/style-reference/'));
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {
    fix: args.includes('--fix'),
    verbose: args.includes('--verbose') || args.includes('-v')
  };
  
  const checker = new StyleConsistencyChecker(options);
  
  checker.run().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error(chalk.red('Fatal error:'), error);
    process.exit(1);
  });
}

module.exports = StyleConsistencyChecker; 