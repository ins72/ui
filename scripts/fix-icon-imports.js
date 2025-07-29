#!/usr/bin/env node

/**
 * Icon Import Fixer
 * 
 * This script fixes files that use icon variables (like Shield, Lock, etc.) 
 * instead of icon strings for the Icon component from style-reference.
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
 * Icon variable to string mapping
 */
const ICON_MAPPINGS = {
  'Shield': 'shield',
  'Lock': 'lock',
  'Eye': 'eye',
  'CheckCircle': 'check',
  'AlertTriangle': 'alert-triangle',
  'Users': 'users',
  'Globe': 'globe',
  'Mail': 'mail',
  'Phone': 'phone',
  'MapPin': 'map-pin',
  'Info': 'info',
  'ExternalLink': 'external-link',
  'Download': 'download',
  'Share': 'share',
  'Bookmark': 'bookmark',
  'Search': 'search',
  'Filter': 'filter',
  'SortAsc': 'sort-asc',
  'SortDesc': 'sort-desc',
  'MoreHorizontal': 'more-horizontal',
  'MoreVertical': 'more-vertical',
  'ChevronLeft': 'chevron-left',
  'ChevronRight': 'chevron-right',
  'ChevronUp': 'chevron-up',
  'ChevronDown': 'chevron-down',
  'Minus': 'minus',
  'Plus': 'plus',
  'X': 'x',
  'Check': 'check',
  'AlertCircle': 'alert-circle',
  'HelpCircle': 'help-circle',
  'Clock': 'clock',
  'Calendar': 'calendar',
  'Star': 'star',
  'Award': 'award',
  'Target': 'target',
  'Rocket': 'rocket',
  'Lightbulb': 'lightbulb',
  'Scale': 'scale',
  'Fingerprint': 'fingerprint',
  'Server': 'server',
  'Network': 'network',
  'Bug': 'bug',
  'FileText': 'file-text',
  'Play': 'play',
  'Zap': 'zap',
  'Code': 'code',
  'Settings': 'settings'
};

class IconImportFixer {
  constructor() {
    this.fixedFiles = 0;
    this.totalIconsFixed = 0;
    this.errors = [];
  }

  /**
   * Fix icon usage in a file
   */
  fixFileIcons(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      let iconsFixed = 0;

      // Fix icon property assignments like icon: Shield
      Object.keys(ICON_MAPPINGS).forEach(iconVar => {
        const iconString = ICON_MAPPINGS[iconVar];
        const pattern = new RegExp(`icon:\\s*${iconVar}(?=\\s*[,}])`, 'g');
        
        if (pattern.test(content)) {
          content = content.replace(pattern, `icon: '${iconString}'`);
          hasChanges = true;
          iconsFixed++;
        }
      });

      // Remove icon imports from lucide-react or other icon libraries
      const iconImportPattern = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"];?\s*\n?/g;
      content = content.replace(iconImportPattern, '');

      // Remove other icon-related imports
      const otherIconImports = [
        /import\s*\{\s*([^}]*)(Shield|Lock|Eye|CheckCircle|AlertTriangle|Users|Globe|Mail|Phone|MapPin|Info|ExternalLink|Download|Share|Bookmark|Search|Filter|SortAsc|SortDesc|MoreHorizontal|MoreVertical|ChevronLeft|ChevronRight|ChevronUp|ChevronDown|Minus|Plus|X|Check|AlertCircle|HelpCircle|Clock|Calendar|Star|Award|Target|Rocket|Lightbulb|Scale|Fingerprint|Server|Network|Bug|FileText|Play|Zap|Code|Settings)([^}]*)\s*\}\s*from\s*['"][^'"]+['"];?\s*\n?/g
      ];

      otherIconImports.forEach(pattern => {
        if (pattern.test(content)) {
          content = content.replace(pattern, '');
          hasChanges = true;
        }
      });

      // Write changes if any were made
      if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles++;
        this.totalIconsFixed += iconsFixed;
        console.log(`${colors.green}✅ Fixed ${iconsFixed} icons in${colors.reset} ${filePath}`);
      }

      return { hasChanges, iconsFixed };
    } catch (error) {
      const errorMsg = `Error processing ${filePath}: ${error.message}`;
      this.errors.push(errorMsg);
      console.error(`${colors.red}❌ ${errorMsg}${colors.reset}`);
      return { hasChanges: false, iconsFixed: 0 };
    }
  }

  /**
   * Find and fix all files with icon issues
   */
  async fixAllFiles() {
    console.log(`${colors.cyan}🔧 Icon Import Fixer${colors.reset}\n`);

    // Find all TypeScript React files
    const files = glob.sync('**/*.{ts,tsx}', {
      ignore: ['node_modules/**', '.next/**', 'dist/**', 'build/**', 'style-reference/**'],
      absolute: true
    });

    for (const file of files) {
      // Skip if file doesn't contain icon variables
      const content = fs.readFileSync(file, 'utf8');
      const hasIconVars = Object.keys(ICON_MAPPINGS).some(iconVar => 
        content.includes(`icon: ${iconVar}`) || content.includes(`icon:${iconVar}`)
      );

      if (hasIconVars) {
        this.fixFileIcons(file);
      }
    }

    this.printSummary();
  }

  /**
   * Print summary of fixes
   */
  printSummary() {
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`${colors.cyan}📊 Icon Import Fix Summary${colors.reset}\n`);

    if (this.fixedFiles > 0) {
      console.log(`${colors.green}✅ Files fixed: ${this.fixedFiles}${colors.reset}`);
      console.log(`${colors.green}✅ Total icons fixed: ${this.totalIconsFixed}${colors.reset}`);
    } else {
      console.log(`${colors.yellow}⚠️  No files required fixing${colors.reset}`);
    }

    if (this.errors.length > 0) {
      console.log(`${colors.red}❌ Errors: ${this.errors.length}${colors.reset}`);
      this.errors.forEach(error => console.log(`${colors.red}   ${error}${colors.reset}`));
    }

    console.log(`\n${colors.green}🎯 Icon usage compliance improved!${colors.reset}`);
    console.log(`${colors.blue}💡 Next steps:${colors.reset}`);
    console.log(`   1. Run the application to ensure all icons display correctly`);
    console.log(`   2. Test the application to ensure all functionality works`);
    console.log(`   3. Commit the changes to version control`);
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  }
}

// Run the fixer
const fixer = new IconImportFixer();
fixer.fixAllFiles().catch(console.error); 