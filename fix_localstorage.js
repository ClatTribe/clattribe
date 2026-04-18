const fs = require('fs');
const path = require('path');

const dir = 'src/components/gk';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  let p = path.join(dir, f);
  let t = fs.readFileSync(p, 'utf8');
  let original = t;
  
  // Replace localStorage method calls with safe versions
  t = t.replace(/localStorage\.getItem\((.*?)\)/g, "(typeof window !== 'undefined' ? localStorage.getItem($1) : null)");
  t = t.replace(/localStorage\.setItem\((.*?)\)/g, "(typeof window !== 'undefined' ? localStorage.setItem($1) : null)");
  t = t.replace(/localStorage\.removeItem\((.*?)\)/g, "(typeof window !== 'undefined' ? localStorage.removeItem($1) : null)");
  
  // Fix double window checks if they somehow break compilation (they shouldn't grammatically)
  if (t !== original) {
    fs.writeFileSync(p, t);
    console.log(`Patched ${f}`);
  }
});
