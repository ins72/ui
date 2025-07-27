#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = 'templates/Customers/OverviewPage/Traffic╨íhannel/index.tsx';

function fixTrafficChannel() {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the mock import with real data service
    content = content.replace(
      /import \{ trafficСhannelChartData \} from "@\/mocks\/charts";/g,
      'import { dataService } from "@/lib/data-service";'
    );
    
    // Add useState and useEffect imports
    content = content.replace(
      /import \{ useState \} from "react";/g,
      'import { useState, useEffect } from "react";'
    );
    
    // Replace the component to use real data
    content = content.replace(
      /const TrafficСhannel = \(\{}\) => \{/g,
      `const TrafficСhannel = ({}) => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                setLoading(true);
                
                const response = await dataService.getTrafficChannels({ limit: 7 });
                if (response.data && Array.isArray(response.data)) {
                    const transformedData = response.data.map((item, index) => ({
                        name: item.name || \`Channel \${index + 1}\`,
                        amt: item.value || item.percentage * 100
                    }));
                    setChartData(transformedData);
                }
            } catch (err) {
                console.error('Error fetching traffic channels:', err);
                setError('Failed to load chart data');
            } finally {
                setLoading(false);
            }
        };

        fetchChartData();
    }, []);`
    );
    
    // Replace the chart data reference
    content = content.replace(
      /data=\{trafficСhannelChartData\}/g,
      'data={chartData}'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${filePath}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

console.log('🔧 Fixing TrafficChannel component...');
fixTrafficChannel();
console.log('✅ TrafficChannel component updated!'); 