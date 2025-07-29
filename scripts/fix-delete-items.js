#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that need to be updated
const files = [
  'templates/Products/CommentsPage/List/Answer/index.tsx',
  'templates/Products/CommentsPage/List/index.tsx',
  'templates/Products/DraftsPage/Grid/index.tsx',
  'templates/Products/DraftsPage/List/index.tsx',
  'templates/Products/OverviewPage/Products/Market/index.tsx',
  'templates/Products/OverviewPage/Products/ProductsStatistics/index.tsx',
  'templates/Products/ReleasedPage/Grid/index.tsx',
  'templates/Products/ScheduledPage/List/index.tsx',
  'templates/PromotePage/List/index.tsx',
  'templates/Shop/ShopDetailsPage/Comments/Answer/index.tsx'
];

function fixDeleteItems(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace onDelete={() => {}} with onDelete={async () => {}}
    content = content.replace(
      /onDelete=\{\(\) => \{\}\}/g,
      'onDelete={async () => {}}'
    );
    
    // Replace onClick={() => {}} with onClick={async () => {}}
    content = content.replace(
      /onClick=\{\(\) => \{\}\}/g,
      'onClick={async () => {}}'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${filePath}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

console.log('🔧 Fixing DeleteItems components...');

files.forEach(fixDeleteItems);

console.log('✅ All DeleteItems components updated!'); 