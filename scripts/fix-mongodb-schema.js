const fs = require('fs');
const path = require('path');

// Read the current schema
const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
let schema = fs.readFileSync(schemaPath, 'utf8');

// Fix the optional field syntax for MongoDB
const replacements = [
  // Fix optional fields syntax: String @db.ObjectId? -> String? @db.ObjectId
  [/String @db\.ObjectId\?/g, 'String? @db.ObjectId'],
  
  // Fix spacing issues
  [/userId String @db\.ObjectId\s+/g, 'userId String @db.ObjectId\n  '],
  [/productId String\? @db\.ObjectId\s+/g, 'productId String? @db.ObjectId\n  '],
  [/customerId String\? @db\.ObjectId\s+/g, 'customerId String? @db.ObjectId\n  '],
];

// Apply all replacements
replacements.forEach(([pattern, replacement]) => {
  schema = schema.replace(pattern, replacement);
});

// Write the updated schema
fs.writeFileSync(schemaPath, schema);

console.log('✅ Fixed MongoDB schema syntax');
console.log('✅ Optional fields syntax corrected');
console.log('✅ Spacing issues resolved'); 