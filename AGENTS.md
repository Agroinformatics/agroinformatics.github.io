Goal: Keep existing HTML styling and layout.

Do:
- Add a new Teaching section using existing CSS classes.
- Convert Team to JSON-driven rendering.
- Fix the CV link to: https://agroinformatics.github.io/cv_NFM/
- Add new files:
  - data/teaching.json
  - data/team.json
  - js/render-teaching.js
  - js/render-team.js
- Edit index.html minimally:
  - add nav link to #teaching
  - add <div id="teaching-grid" class="research-grid"></div> in teaching section
  - replace team lists with <div id="team-current" class="team-list"></div> and <div id="team-alumni" class="team-list"></div>
  - add script tags before </body> for the new JS files

Do NOT:
- introduce frameworks or new styling systems
- delete or redesign other sections
