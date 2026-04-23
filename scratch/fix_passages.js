const fs = require('fs');
const path = require('path');

const dataDir = 'e:/next/clat-tribe/src/components/gk/testing/data';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let lastFullPassage = "";
    
    // We'll use a regex that matches the entire passage property
    // including multi-line backticked strings
    const passageRegex = /passage:\s*(`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?"),/g;
    
    let match;
    let newContent = content;
    let offset = 0;

    // First pass: extract all full passages in order
    // This is safer than just tracking the "last" one if multiple groups exist
    const fullPassages = [];
    const allMatches = [];
    
    while ((match = passageRegex.exec(content)) !== null) {
        const fullMatch = match[0];
        const stringContent = match[1].slice(1, -1); // Remove quotes
        
        allMatches.push({
            start: match.index,
            end: match.index + fullMatch.length,
            content: stringContent,
            isTruncated: stringContent.endsWith('...') && !stringContent.includes('\n')
        });
        
        if (!stringContent.endsWith('...') || stringContent.includes('\n')) {
            fullPassages.push(stringContent);
        }
    }

    // Second pass: replace truncated ones
    // Iterate backwards to not mess up indices
    for (let i = allMatches.length - 1; i >= 0; i--) {
        const m = allMatches[i];
        if (m.isTruncated) {
            const truncatedBase = m.content.slice(0, -3).trim();
            
            // Find the full passage that matches this truncated one
            // Usually it's the one immediately preceding it
            let bestMatch = "";
            for (let j = i - 1; j >= 0; j--) {
                const prev = allMatches[j];
                if (!prev.isTruncated && prev.content.startsWith(truncatedBase)) {
                    bestMatch = prev.content;
                    break;
                }
            }
            
            if (bestMatch) {
                const replacement = `passage: \`${bestMatch.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\`,` ;
                newContent = newContent.slice(0, m.start) + replacement + newContent.slice(m.end);
            }
        }
    }
    
    fs.writeFileSync(filePath, newContent);
    console.log(`Processed ${file}`);
});
