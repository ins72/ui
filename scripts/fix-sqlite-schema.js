const fs = require('fs');
const path = require('path');

// Read the current schema
const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
let schema = fs.readFileSync(schemaPath, 'utf8');

// Replace all MongoDB-specific ID patterns with SQLite patterns
const replacements = [
  // Replace @id @default(auto()) @map("_id") @db.ObjectId with @id @default(cuid())
  [/@id @default\(auto\(\)\) @map\("_id"\) @db\.ObjectId/g, '@id @default(cuid())'],
  
  // Replace @db.ObjectId with empty string
  [/@db\.ObjectId/g, ''],
  
  // Replace @map("_id") with empty string
  [/@map\("_id"\)/g, '']
];

// Apply all replacements
replacements.forEach(([pattern, replacement]) => {
  schema = schema.replace(pattern, replacement);
});

// Write the updated schema
fs.writeFileSync(schemaPath, schema);

console.log('✅ Schema reverted to SQLite format');
console.log('✅ All MongoDB-specific ID fields converted to SQLite format'); 