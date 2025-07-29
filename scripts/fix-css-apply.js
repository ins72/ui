const fs = require('fs');
const path = require('path');

function fixCssApply() {
  console.log('🔧 Fixing @apply directives in globals.css...');

  const filePath = 'app/globals.css';
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace @apply directives with raw CSS
  const replacements = [
    // .center
    {
      from: /@apply w-full mx-auto px-5 max-md:px-3;/g,
      to: 'width: 100%; margin-left: auto; margin-right: auto; padding-left: 1.25rem; padding-right: 1.25rem; @media (max-width: 768px) { padding-left: 0.75rem; padding-right: 0.75rem; }'
    },
    // .center-with-sidebar
    {
      from: /@apply w-full mx-auto pr-5 max-xl:pl-5 max-md:px-3;/g,
      to: 'width: 100%; margin-left: auto; margin-right: auto; padding-right: 1.25rem; @media (max-width: 1280px) { padding-left: 1.25rem; } @media (max-width: 768px) { padding-left: 0.75rem; padding-right: 0.75rem; }'
    },
    // .col-right
    {
      from: /@apply shrink-0 w-\[30rem\] max-3xl:w-\[23rem\] max-2xl:w-\[21\.5rem\] max-\[1349px\]:w-\[19\.5rem\] max-xl:w-\[21\.5rem\] max-lg:w-full;/g,
      to: 'flex-shrink: 0; width: 30rem; @media (max-width: 1536px) { width: 23rem; } @media (max-width: 1440px) { width: 21.5rem; } @media (max-width: 1349px) { width: 19.5rem; } @media (max-width: 1280px) { width: 21.5rem; } @media (max-width: 1024px) { width: 100%; }'
    },
    // .col-left
    {
      from: /@apply w-\[calc\(100%-30\.75rem\)\] mr-3 max-3xl:w-\[calc\(100%-23\.75rem\)\] max-2xl:w-\[calc\(100%-22\.25rem\)\] max-\[1349px\]:w-\[calc\(100%-20\.25rem\)\] max-xl:w-\[calc\(100%-22\.25rem\)\] max-lg:w-full max-lg:mr-0 max-lg:mb-3;/g,
      to: 'width: calc(100% - 30.75rem); margin-right: 0.75rem; @media (max-width: 1536px) { width: calc(100% - 23.75rem); } @media (max-width: 1440px) { width: calc(100% - 22.25rem); } @media (max-width: 1349px) { width: calc(100% - 20.25rem); } @media (max-width: 1280px) { width: calc(100% - 22.25rem); } @media (max-width: 1024px) { width: 100%; margin-right: 0; margin-bottom: 0.75rem; }'
    },
    // .card
    {
      from: /@apply mb-3 p-3 rounded-4xl bg-b-surface2 shadow-widget last:mb-0 dark:shadow-\[inset_0_0_0_1\.5px_rgba\(229,229,229,0\.04\),0px_5px_1\.5px_-4px_rgba\(8,8,8,0\.5\),0px_6px_4px_-4px_rgba\(8,8,8,0\.05\)\];/g,
      to: 'margin-bottom: 0.75rem; padding: 0.75rem; border-radius: var(--rounded-4xl); background-color: var(--backgrounds-surface2); box-shadow: var(--box-shadow-widget); } .card:last-child { margin-bottom: 0; } [data-theme="dark"] .card { box-shadow: inset 0 0 0 1.5px rgba(229,229,229,0.04), 0px 5px 1.5px -4px rgba(8,8,8,0.5), 0px 6px 4px -4px rgba(8,8,8,0.05); }'
    },
    // .chart-tooltip
    {
      from: /@apply p-2 bg-b-dark1 rounded-lg text-t-light;/g,
      to: 'padding: 0.5rem; background-color: var(--backgrounds-dark1); border-radius: 0.5rem; color: var(--text-light);'
    },
    // .chart-tooltip-up
    {
      from: /@apply p-2 bg-b-dark1 rounded-lg text-t-light before:absolute before:top-full before:left-1\/2 before:-translate-x-1\/2 before:border-l-\[5px\] before:border-l-transparent before:border-r-\[5px\] before:border-r-transparent before:border-t-\[6px\] before:border-b-dark1;/g,
      to: 'padding: 0.5rem; background-color: var(--backgrounds-dark1); border-radius: 0.5rem; color: var(--text-light); position: relative; } .chart-tooltip-up:before { content: ""; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 6px solid var(--backgrounds-dark1);'
    },
    // .label
    {
      from: /@apply inline-flex items-center h-7 px-1\.75 rounded-lg text-button;/g,
      to: 'display: inline-flex; align-items: center; height: 1.75rem; padding-left: 0.4375rem; padding-right: 0.4375rem; border-radius: 0.5rem; font-size: var(--text-button);'
    },
    // .label-green
    {
      from: /@apply border border-\[#00A656\]\/15 bg-\[#00A656\]\/5 text-\[#00A656\];/g,
      to: 'border: 1px solid rgba(0, 166, 86, 0.15); background-color: rgba(0, 166, 86, 0.05); color: #00A656;'
    },
    // .label-red
    {
      from: /@apply border border-\[#FF6A55\]\/15 bg-\[#FF6A55\]\/5 text-\[#FF6A55\];/g,
      to: 'border: 1px solid rgba(255, 106, 85, 0.15); background-color: rgba(255, 106, 85, 0.05); color: #FF6A55;'
    },
    // .label-yellow
    {
      from: /@apply border border-\[#EF9D0E\]\/15 bg-\[#EF9D0E\]\/5 text-\[#EF9D0E\];/g,
      to: 'border: 1px solid rgba(239, 157, 14, 0.15); background-color: rgba(239, 157, 14, 0.05); color: #EF9D0E;'
    },
    // .label-gray
    {
      from: /@apply border border-s-stroke2 bg-b-surface1 text-t-secondary;/g,
      to: 'border: 1px solid var(--stroke-stroke2); background-color: var(--backgrounds-surface1); color: var(--text-secondary);'
    },
    // .box-hover
    {
      from: /@apply absolute inset-0 rounded-\[20px\] bg-linear-to-b from-shade-09 to-\[#ebebeb\] before:absolute before:inset-\[1\.5px\] before:bg-b-highlight before:rounded-\[18\.5px\] before:border-\[1\.5px\] before:border-b-surface2 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 dark:from-shade-09\/\[0\.075\] dark:to-\[#ebebeb\]\/\[0\.075\];/g,
      to: 'position: absolute; inset: 0; border-radius: 20px; background: linear-gradient(to bottom, var(--shade-09), #ebebeb); visibility: hidden; opacity: 0; transition: all 0.2s; } .box-hover:before { content: ""; position: absolute; inset: 1.5px; background-color: var(--backgrounds-highlight); border-radius: 18.5px; border: 1.5px solid var(--backgrounds-surface2); } .group:hover .box-hover { visibility: visible; opacity: 1; } [data-theme="dark"] .box-hover { background: linear-gradient(to bottom, rgba(241, 241, 241, 0.075), rgba(235, 235, 235, 0.075));'
    },
    // .action
    {
      from: /@apply flex items-center gap-1 px-1 h-6 border border-transparent rounded text-button text-t-secondary\/80 fill-t-secondary transition-colors hover:border-s-stroke2 hover:text-t-primary hover:fill-t-primary max-md:px-0\.75 dark:hover:border-shade-05\/50;/g,
      to: 'display: flex; align-items: center; gap: 0.25rem; padding-left: 0.25rem; padding-right: 0.25rem; height: 1.5rem; border: 1px solid transparent; border-radius: 0.25rem; font-size: var(--text-button); color: rgba(var(--text-secondary), 0.8); fill: var(--text-secondary); transition: color 0.2s, fill 0.2s; } .action:hover { border-color: var(--stroke-stroke2); color: var(--text-primary); fill: var(--text-primary); } @media (max-width: 768px) { .action { padding-left: 0.1875rem; padding-right: 0.1875rem; } } [data-theme="dark"] .action:hover { border-color: rgba(76, 76, 76, 0.5);'
    },
    // .action svg
    {
      from: /@apply !size-4 fill-inherit;/g,
      to: 'width: 1rem !important; height: 1rem !important; fill: inherit;'
    },
    // .react-tooltip
    {
      from: /@apply z-50 !bg-b-dark1 !opacity-100 !px-2 !py-0\.5 !rounded-\[6px\] !text-caption !text-t-light;/g,
      to: 'z-index: 50 !important; background-color: var(--backgrounds-dark1) !important; opacity: 1 !important; padding-left: 0.5rem !important; padding-right: 0.5rem !important; padding-top: 0.125rem !important; padding-bottom: 0.125rem !important; border-radius: 6px !important; font-size: var(--text-caption) !important; color: var(--text-light) !important;'
    },
    // .tiptap
    {
      from: /@apply min-h-48 px-4\.5 py-4 outline-none \[&_ul\]:list-disc \[&_ul\]:pl-4;/g,
      to: 'min-height: 12rem; padding-left: 1.125rem; padding-right: 1.125rem; padding-top: 1rem; padding-bottom: 1rem; outline: none; } .tiptap ul { list-style-type: disc; padding-left: 1rem;'
    },
    // .custom-datepicker .react-datepicker
    {
      from: /@apply relative z-3 p-4 rounded-3xl bg-b-surface1 font-inter;/g,
      to: 'position: relative; z-index: 3; padding: 1rem; border-radius: var(--rounded-4xl); background-color: var(--backgrounds-surface1); font-family: Inter, sans-serif;'
    },
    // .custom-datepicker .react-datepicker__day-names, .custom-datepicker .react-datepicker__week
    {
      from: /@apply flex justify-center;/g,
      to: 'display: flex; justify-content: center;'
    },
    // .custom-datepicker .react-datepicker__day-name
    {
      from: /@apply flex justify-center items-center w-11 h-11 text-caption text-t-secondary\/50;/g,
      to: 'display: flex; justify-content: center; align-items: center; width: 2.75rem; height: 2.75rem; font-size: var(--text-caption); color: rgba(var(--text-secondary), 0.5);'
    },
    // .custom-datepicker .react-datepicker__day
    {
      from: /@apply flex justify-center items-center w-11 h-11 rounded-full border border-transparent text-body-2 text-t-primary cursor-pointer transition-colors hover:border-b-dark1;/g,
      to: 'display: flex; justify-content: center; align-items: center; width: 2.75rem; height: 2.75rem; border-radius: 50%; border: 1px solid transparent; font-size: var(--text-body-2); color: var(--text-primary); cursor: pointer; transition: color 0.2s; } .custom-datepicker .react-datepicker__day:hover { border-color: var(--backgrounds-dark1);'
    },
    // .custom-datepicker .react-datepicker__day--outside-month
    {
      from: /@apply opacity-0 pointer-events-none;/g,
      to: 'opacity: 0; pointer-events: none;'
    },
    // .custom-datepicker .react-datepicker__day--disabled
    {
      from: /@apply text-t-secondary\/50 pointer-events-none;/g,
      to: 'color: rgba(var(--text-secondary), 0.5); pointer-events: none;'
    },
    // .custom-datepicker .react-datepicker__day--selected
    {
      from: /@apply bg-b-dark1 border-b-dark1 text-t-light;/g,
      to: 'background-color: var(--backgrounds-dark1); border-color: var(--backgrounds-dark1); color: var(--text-light);'
    },
    // .custom-datepicker .react-datepicker__aria-live
    {
      from: /@apply hidden;/g,
      to: 'display: none;'
    },
    // .custom-datepicker .react-datepicker--time-only
    {
      from: /@apply absolute inset-0;/g,
      to: 'position: absolute; inset: 0;'
    },
    // .custom-datepicker .react-datepicker__header--time--only
    {
      from: /@apply hidden;/g,
      to: 'display: none;'
    },
    // .custom-datepicker .react-datepicker__time-list
    {
      from: /@apply absolute top-18 left-0 right-0 bottom-4 px-4 overflow-auto;/g,
      to: 'position: absolute; top: 4.5rem; left: 0; right: 0; bottom: 1rem; padding-left: 1rem; padding-right: 1rem; overflow: auto;'
    },
    // .custom-datepicker .react-datepicker__time-list-item
    {
      from: /@apply relative flex items-center h-12 pl-12 rounded-xl text-body-2 text-t-secondary transition-colors cursor-pointer hover:bg-shade-08\/70 hover:text-t-primary dark:hover:bg-shade-04;/g,
      to: 'position: relative; display: flex; align-items: center; height: 3rem; padding-left: 3rem; border-radius: 0.75rem; font-size: var(--text-body-2); color: var(--text-secondary); transition: color 0.2s; cursor: pointer; } .custom-datepicker .react-datepicker__time-list-item:hover { background-color: rgba(226, 226, 226, 0.7); color: var(--text-primary); } [data-theme="dark"] .custom-datepicker .react-datepicker__time-list-item:hover { background-color: var(--shade-04);'
    }
  ];

  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed @apply directives in globals.css');
}

fixCssApply(); 