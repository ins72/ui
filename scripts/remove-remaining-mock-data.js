const fs = require('fs');
const path = require('path');

function removeRemainingMockData() {
  console.log('🔍 Removing remaining specific mock data patterns...');

  // Handle specific files with targeted replacements
  const specificReplacements = [
    {
      file: 'templates/Products/OverviewPage/ProductActivity/index.tsx',
      replacements: [
        {
          from: /const baseProducts = Math\.floor\(products\.length \/ 4\) \+ Math\.floor\(Math\.random\(\) \* 3\);/g,
          to: 'const baseProducts = products.length;'
        },
        {
          from: /const baseLikes = Math\.floor\(baseViews \* 0\.1\) \+ Math\.floor\(Math\.random\(\) \* 20\);/g,
          to: 'const baseLikes = Math.floor(baseViews * 0.1);'
        },
        {
          from: /const baseComments = Math\.floor\(baseLikes \* 0\.3\) \+ Math\.floor\(Math\.random\(\) \* 5\);/g,
          to: 'const baseComments = Math.floor(baseLikes * 0.3);'
        }
      ]
    },
    {
      file: 'templates/ExploreCreatorsPage/index.tsx',
      replacements: [
        {
          from: /isOnline: creator\.isOnline \|\| Math\.random\(\) > 0\.5,/g,
          to: 'isOnline: creator.isOnline,'
        }
      ]
    },
    {
      file: 'templates/PromotePage/List/index.tsx',
      replacements: [
        {
          from: /const fallbackPublished: PublishedItem\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /const fallbackScheduled: ScheduledItem\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setPublishedItems\(fallbackPublished\);/g,
          to: 'setPublishedItems([]);'
        },
        {
          from: /setScheduledItems\(fallbackScheduled\);/g,
          to: 'setScheduledItems([]);'
        }
      ]
    },
    {
      file: 'templates/PromotePage/Engagement/index.tsx',
      replacements: [
        {
          from: /const fallbackData: EngagementData\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setEngagementData\(fallbackData\);/g,
          to: 'setEngagementData([]);'
        }
      ]
    },
    {
      file: 'templates/PromotePage/Insights/index.tsx',
      replacements: [
        {
          from: /const fallbackData: InsightData\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setInsightsData\(fallbackData\);/g,
          to: 'setInsightsData([]);'
        }
      ]
    },
    {
      file: 'templates/PromotePage/Interactions/index.tsx',
      replacements: [
        {
          from: /const fallbackData: InteractionData\[\] = \[[\s\S]*?\];/g,
          to: ''
        },
        {
          from: /setInteractionData\(fallbackData\);/g,
          to: 'setInteractionData([]);'
        }
      ]
    }
  ];

  specificReplacements.forEach(({ file, replacements }) => {
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

  console.log('🎉 Remaining mock data removal completed!');
}

removeRemainingMockData(); 