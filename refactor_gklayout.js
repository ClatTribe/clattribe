const fs = require('fs');

const path = 'src/components/gk/GKLayout.tsx';
let txt = fs.readFileSync(path, 'utf8');

// 1. Add usePathname
txt = txt.replace('import { useRouter } from "next/navigation";', 'import { useRouter, usePathname } from "next/navigation";\nimport Link from "next/link";');

// 2. Remove activeTab/setActiveTab from interface
txt = txt.replace('  activeTab: string;\n  setActiveTab: (tab: string) => void;\n', '');

// 3. Remove activeTab/setActiveTab from props
txt = txt.replace('  activeTab,\n  setActiveTab,\n', '');

// 4. Update the component to usePathname
txt = txt.replace('const router = useRouter();', 'const router = useRouter();\n  const pathname = usePathname();\n  const activeTab = pathname.split("/").pop() || "dashboard";');

// 5. Replace Link tags in handleSearchSelect
txt = txt.replace('setActiveTab(\n      result.tab,\n    );', 'router.push(`/gk/${result.tab}`);');

// 6. Rewrite the navLinks rendering
const navLinksRegex = /<div\s+key=\{link\.id\}\s+onClick=\{\(\) => setActiveTab\(link\.id\)\}([\s\S]*?)<\/div>\s+\);\s+\}\)/;
const navLinksReplacement = `<Link
                  href={\`/gk/\${link.id}\`}
                  key={link.id}
$1</Link>
              );
            })`;

txt = txt.replace(navLinksRegex, navLinksReplacement);

// 7. Profile tab logic
txt = txt.replace('onClick={() => setActiveTab("profile")}', 'onClick={() => router.push("/gk/profile")}');

// 8. Add Profile nav config? Wait, profile is not in navLinks, it's at the bottom! We just replaced its onClick. Let's make sure it handles activeTab correctly.
// Let's replace 'activeTab === "profile"' logic. Wait, no, `const activeTab = pathname.split("/").pop()` handles it naturally.

fs.writeFileSync(path, txt);
console.log('GKLayout refactored.');
