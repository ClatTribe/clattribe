const fs = require('fs');

const fixLayout = () => {
  let t = fs.readFileSync('src/components/gk/GKLayout.tsx', 'utf8');
  t = t.replace('// Close search on outside click React.useEffect', '/* Close search on outside click */\nReact.useEffect');
  t = t.replace('// Debounced search across Supabase React.useEffect', '/* Debounced search across Supabase */\nReact.useEffect');
  t = t.replace('// Search editorials const editResp', '/* Search editorials */\nconst editResp');
  t = t.replace('// Search flashcards const flashResp', '/* Search flashcards */\nconst flashResp');
  t = t.replace('// Store pending search target so the tab can deep-link if needed localStorage.setItem', '/* Store pending search target so the tab can deep-link if needed */\nlocalStorage.setItem');
  t = t.replace('// clattribe.com header <header', '/* clattribe.com header */\n<header');
  t = t.replace('// Search bar <div', '/* Search bar */\n<div');
  t = t.replace('// Search dropdown <AnimatePresence>', '/* Search dropdown */\n<AnimatePresence>');
  t = t.replace('// Nav links <div', '/* Nav links */\n<div');
  t = t.replace('// Profile footer <div', '/* Profile footer */\n<div');
  fs.writeFileSync('src/components/gk/GKLayout.tsx', t);
};

const fixSectional = () => {
  let t = fs.readFileSync('src/components/gk/GKSectionalTest.tsx', 'utf8');
  t = t.replace('// Write analytics to localStorage const pct', '/* Write analytics to localStorage */\nconst pct');
  fs.writeFileSync('src/components/gk/GKSectionalTest.tsx', t);
};

const fixWeekly = () => {
  let t = fs.readFileSync('src/components/gk/GKWeeklyTest.tsx', 'utf8');
  t = t.replace('// Write analytics to localStorage const pct', '/* Write analytics to localStorage */\nconst pct');
  t = t.replace('// Table doesn\'t exist yet — show Coming Soon state if (err.code', '/* Table doesn\'t exist yet — show Coming Soon state */\nif (err.code');
  fs.writeFileSync('src/components/gk/GKWeeklyTest.tsx', t);
};

fixLayout();
fixSectional();
fixWeekly();
