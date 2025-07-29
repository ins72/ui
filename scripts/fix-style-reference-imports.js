#!/usr/bin/env node

/**
 * Style Reference Import Fixer
 * 
 * This script automatically fixes import statements to use style-reference components
 * as required by the context rules. It updates all imports from @/components/* to 
 * @/style-reference/components/* in files outside the style-reference directory.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

/**
 * Available components in style-reference
 */
const STYLE_REFERENCE_COMPONENTS = [
  'UnpublishItems', 'Tooltip', 'ThemeButton', 'Test', 'Tabs', 'TableRow',
  'TableProductCell', 'Table', 'Switch', 'Spinner', 'Sidebar', 'ShopItem',
  'ShareProduct', 'Select', 'Search', 'ScheduleProduct', 'RefundRequests',
  'Range', 'ProductView', 'Product', 'PopularProducts', 'Percentage',
  'NoFound', 'NewCustomers', 'NavLink', 'Modal', 'Message', 'Logo',
  'Login', 'LikeButton', 'Layout', 'Image', 'Icon', 'Header',
  'GridProduct', 'Follower', 'Filters', 'FieldImage', 'FieldFiles',
  'Field', 'Emoji', 'Editor', 'Dropdown', 'DeleteItems', 'DateAndTime',
  'CountryItem', 'Compatibility', 'Checkbox', 'CardChartPie', 'Card',
  'Button', 'Badge', 'DataTable'
];

class StyleReferenceImportFixer {
  constructor() {
    this.fixedFiles = 0;
    this.totalImportsFixed = 0;
    this.errors = [];
  }

  /**
   * Fix import statements in a file
   */
  fixFileImports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      let importsFixed = 0;

      // Pattern to match @/components/ imports
      const importPattern = /import\s+([^;]+)\s+from\s+["']@\/components\/([^"']+)["'];?/g;
      
      // Replace all matching imports
      content = content.replace(importPattern, (match, importStatement, componentPath) => {
        const componentName = componentPath.split('/')[0];
        
        // Check if this component exists in style-reference
        if (STYLE_REFERENCE_COMPONENTS.includes(componentName)) {
          hasChanges = true;
          importsFixed++;
          return `import ${importStatement} from "@/style-reference/components/${componentPath}";`;
        } else {
          console.log(`${colors.yellow}⚠️  Warning: Component '${componentName}' not found in style-reference${colors.reset}`);
          return match; // Keep original import if component not found
        }
      });

      // Write changes if any were made
      if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles++;
        this.totalImportsFixed += importsFixed;
        console.log(`${colors.green}✅ Fixed ${importsFixed} imports in${colors.reset} ${filePath}`);
      }

      return { hasChanges, importsFixed };
    } catch (error) {
      const errorMsg = `Error processing ${filePath}: ${error.message}`;
      this.errors.push(errorMsg);
      console.error(`${colors.red}❌ ${errorMsg}${colors.reset}`);
      return { hasChanges: false, importsFixed: 0 };
    }
  }

  /**
   * Get all TypeScript/TSX files that need fixing
   */
  getFilesToFix() {
    // Get all .tsx and .ts files, excluding style-reference directory and node_modules
    const patterns = [
      'app/**/*.{ts,tsx}',
      'components/**/*.{ts,tsx}',
      'templates/**/*.{ts,tsx}',
      'src/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      '__tests__/**/*.{ts,tsx}'
    ];

    let files = [];
    
    patterns.forEach(pattern => {
      const matches = glob.sync(pattern, {
        cwd: process.cwd(),
        ignore: [
          'style-reference/**/*',
          'node_modules/**/*',
          '.next/**/*',
          'dist/**/*',
          'build/**/*'
        ]
      });
      files = files.concat(matches);
    });

    // Remove duplicates and return absolute paths
    return [...new Set(files)].map(file => path.resolve(file));
  }

  /**
   * Main execution function
   */
  async run() {
    console.log(`${colors.bold}${colors.cyan}🔧 Style Reference Import Fixer${colors.reset}`);
    console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

    console.log(`${colors.blue}📁 Scanning for files to fix...${colors.reset}`);
    
    const files = this.getFilesToFix();
    
    if (files.length === 0) {
      console.log(`${colors.yellow}⚠️  No files found to process${colors.reset}`);
      return;
    }

    console.log(`${colors.blue}📄 Found ${files.length} files to process\n${colors.reset}`);

    // Process each file
    for (const file of files) {
      this.fixFileImports(file);
    }

    // Print summary
    this.printSummary();
  }

  /**
   * Print execution summary
   */
  printSummary() {
    console.log(`\n${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}📊 Style Reference Import Fix Summary${colors.reset}\n`);

    if (this.fixedFiles > 0) {
      console.log(`${colors.green}✅ Files fixed: ${this.fixedFiles}${colors.reset}`);
      console.log(`${colors.green}✅ Total imports fixed: ${this.totalImportsFixed}${colors.reset}`);
    } else {
      console.log(`${colors.yellow}⚠️  No files required fixing${colors.reset}`);
    }

    if (this.errors.length > 0) {
      console.log(`${colors.red}❌ Errors: ${this.errors.length}${colors.reset}`);
      this.errors.forEach(error => {
        console.log(`${colors.red}   • ${error}${colors.reset}`);
      });
    }

    console.log(`\n${colors.bold}${colors.green}🎯 Style reference compliance improved!${colors.reset}`);
    console.log(`${colors.cyan}💡 Next steps:${colors.reset}`);
    console.log(`   1. Run the style-consistency-check script to verify fixes`);
    console.log(`   2. Test the application to ensure all imports work correctly`);
    console.log(`   3. Commit the changes to version control`);
    console.log(`\n${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  }
}

// Execute the fixer
if (require.main === module) {
  const fixer = new StyleReferenceImportFixer();
  fixer.run().catch(error => {
    console.error(`${colors.red}❌ Fatal error: ${error.message}${colors.reset}`);
    process.exit(1);
  });
}

module.exports = StyleReferenceImportFixer; 