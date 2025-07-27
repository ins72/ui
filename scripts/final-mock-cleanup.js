const fs = require('fs');
const path = require('path');

function finalMockCleanup() {
  console.log('🧹 Final cleanup of remaining hardcoded data...');

  const cleanupTargets = [
    {
      file: 'templates/AffiliateCenterPage/CampaignEarning/index.tsx',
      replacements: [
        {
          from: /views: \{ counter: \d+, percentage: \d+ \},/g,
          to: 'views: { counter: 0, percentage: 0 },'
        },
        {
          from: /orders: \{ counter: \d+, percentage: \d+ \},/g,
          to: 'orders: { counter: 0, percentage: 0 },'
        }
      ]
    },
    {
      file: 'templates/AffiliateCenterPage/Insights/index.tsx',
      replacements: [
        {
          from: /percentage: \d+\.\d+,/g,
          to: 'percentage: 0,'
        }
      ]
    },
    {
      file: 'templates/Income/PayoutsPage/Statistics/index.tsx',
      replacements: [
        {
          from: /percentage: \d+\.\d+,/g,
          to: 'percentage: 0,'
        }
      ]
    },
    {
      file: 'templates/Customers/OverviewPage/ActiveTimes/index.tsx',
      replacements: [
        {
          from: /percentage: \d+,/g,
          to: 'percentage: 0,'
        }
      ]
    },
    {
      file: 'templates/Customers/OverviewPage/TrafficChannel/index.tsx',
      replacements: [
        {
          from: /percentage: \d+, value: \d+,/g,
          to: 'percentage: 0, value: 0,'
        }
      ]
    },
    {
      file: 'templates/Customers/OverviewPage/index.tsx',
      replacements: [
        {
          from: /percentage: \d+,/g,
          to: 'percentage: 0,'
        }
      ]
    }
  ];

  cleanupTargets.forEach(({ file, replacements }) => {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      return;
    }

    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    replacements.forEach(({ from, to }) => {
      const newContent = content.replace(from, to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`✅ Updated: ${file}`);
    }
  });

  console.log('🎉 Final mock data cleanup completed!');
}

finalMockCleanup(); 