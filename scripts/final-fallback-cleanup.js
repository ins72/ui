const fs = require('fs');
const path = require('path');

function finalFallbackCleanup() {
  console.log('🧹 Final cleanup of remaining fallback data...');

  const cleanupTargets = [
    {
      file: 'templates/Income/PayoutsPage/PayoutHistory/index.tsx',
      replacements: [
        {
          from: /const fallbackPayouts: PayoutHistory\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setPayouts\(fallbackPayouts\);/g,
          to: 'setPayouts([]);'
        }
      ]
    },
    {
      file: 'templates/Income/PayoutsPage/Statistics/index.tsx',
      replacements: [
        {
          from: /const fallbackStatistics: PayoutStatistic\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setStatistics\(fallbackStatistics\);/g,
          to: 'setStatistics([]);'
        }
      ]
    },
    {
      file: 'templates/Income/EarningPage/RecentEarnings/index.tsx',
      replacements: [
        {
          from: /const fallbackEarnings: RecentEarning\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setEarnings\(fallbackEarnings\);/g,
          to: 'setEarnings([]);'
        }
      ]
    },
    {
      file: 'templates/Customers/OverviewPage/TrafficChannel/index.tsx',
      replacements: [
        {
          from: /const sampleChannels: TrafficChannel\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setChannels\(sampleChannels\);/g,
          to: 'setChannels([]);'
        }
      ]
    },
    {
      file: 'templates/Customers/OverviewPage/index.tsx',
      replacements: [
        {
          from: /const fallbackDevices: DeviceData\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setDevices\(fallbackDevices\);/g,
          to: 'setDevices([]);'
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

  console.log('🎉 Final fallback data cleanup completed!');
}

finalFallbackCleanup(); 