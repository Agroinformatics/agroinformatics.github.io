Use the existing index.html styling and structure. Do not introduce frameworks.
Implement Teaching and Team as JSON-driven sections.
Create:
- data/teaching.json, data/team.json
- js/render-teaching.js, js/render-team.js
Edit index.html to:
- add nav link #teaching
- add a new Teaching section between Research and Team
- replace hard-coded team lists with #team-current and #team-alumni containers
- change CV link to https://agroinformatics.github.io/cv_NFM/
- include the two script tags before </body>
