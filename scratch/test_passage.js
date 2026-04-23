const questions = [
  { passage: "Article 32 of the Indian Constitution, described by Dr. B.R. Ambedkar as the 'heart and soul' of the Constitution, provides the right to move the Supreme Court for the enforcement of Fundamental Rights." },
  { passage: "Article 32 of the Indian Constitution..." }
];

const getFullPassage = (q, index) => {
    if (!q.passage) return null;
    if (!q.passage.endsWith('...')) return q.passage;
    
    for (let i = index - 1; i >= 0; i--) {
      const prevQ = questions[i];
      if (prevQ.passage && !prevQ.passage.endsWith('...')) {
        const truncatedBase = q.passage.slice(0, -3);
        console.log(`Checking: "${prevQ.passage}" startsWith "${truncatedBase}"`);
        if (prevQ.passage.startsWith(truncatedBase)) {
          return prevQ.passage;
        }
      }
    }
    return q.passage;
};

console.log("Result:", getFullPassage(questions[1], 1));
