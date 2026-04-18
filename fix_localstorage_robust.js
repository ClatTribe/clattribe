const fs = require('fs');
const path = require('path');

const dir = 'src/components/gk';
// Reset the files from git first! So we have a clean slate from our // comments fix state.
// Wait, we already did git checkout and ran fix_comments.js in this state!
// So the files right now are perfectly clean, just having `localStorage.`

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  let p = path.join(dir, f);
  let t = fs.readFileSync(p, 'utf8');
  let original = t;
  
  // Replace localStorage. with the SSR boundary checking wrapper.
  t = t.replace(/\blocalStorage\./g, "(typeof window !== 'undefined' ? window.localStorage : {getItem:()=>null, setItem:()=>null, removeItem:()=>null}).");
  
  // Restore GKApp.tsx manual fix since it was overwritten by git earlier?? 
  // Wait, I ran write_to_file on GKApp.tsx AFTER the git checkout! So it's already fixed.
  // Actually, wait, if I run this script on GKApp.tsx, then GKApp.tsx has window.localStorage... 
  // which is fine, replacing `localStorage.` inside GKApp.tsx is fine.
  
  if (t !== original) {
    fs.writeFileSync(p, t);
    console.log(`Patched ${f}`);
  }
});
