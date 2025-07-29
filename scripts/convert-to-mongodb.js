const fs = require('fs');
const path = require('path');

// Read the current schema
const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
let schema = fs.readFileSync(schemaPath, 'utf8');

// Convert to MongoDB format
const replacements = [
  // Replace SQLite ID patterns with MongoDB patterns
  [/@id @default\(cuid\(\)\)/g, '@id @default(auto()) @map("_id") @db.ObjectId'],
  
  // Add @db.ObjectId to all String fields that are foreign keys
  [/userId\s+String/g, 'userId String @db.ObjectId'],
  [/productId\s+String/g, 'productId String @db.ObjectId'],
  [/customerId\s+String/g, 'customerId String @db.ObjectId'],
  
  // Add password field to User model if not present
  [/model User \{[\s\S]*?id\s+String[^}]*\}/g, (match) => {
    if (!match.includes('password')) {
      return match.replace('createdAt DateTime @default(now())', 'password String?\n  createdAt DateTime @default(now())');
    }
    return match;
  }]
];

// Apply all replacements
replacements.forEach(([pattern, replacement]) => {
  schema = schema.replace(pattern, replacement);
});

// Write the updated schema
fs.writeFileSync(schemaPath, schema);

console.log('✅ Schema converted to MongoDB format');
console.log('✅ All ID fields converted to MongoDB ObjectId format');
console.log('✅ Foreign key fields updated with @db.ObjectId'); 