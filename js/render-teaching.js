document.addEventListener('DOMContentLoaded', async function () {
  var teachingGrid = document.getElementById('teaching-grid');
  if (!teachingGrid) return;

  function buildLink(url, label) {
    if (!url) return '';
    return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  }

  try {
    var response = await fetch('data/teaching.json');
    if (!response.ok) throw new Error('Failed to load teaching data');

    var courses = await response.json();

    teachingGrid.innerHTML = courses.map(function (course) {
      var links = course.links || {};
      var linkItems = [
        buildLink(links.syllabus, 'Syllabus'),
        buildLink(links.github, 'GitHub'),
        buildLink(links.canvas, 'Canvas'),
        buildLink(links.slides, 'Slides')
      ].filter(Boolean);

      var linksHtml = linkItems.length ? '<p>' + linkItems.join(' | ') + '</p>' : '';

      return (
        '<div class="research-card">' +
          '<div class="card-content">' +
            '<h3>' + course.title + '</h3>' +
            '<p>' + (course.description || '') + '</p>' +
            linksHtml +
          '</div>' +
        '</div>'
      );
    }).join('');
  } catch (error) {
    teachingGrid.innerHTML = '';
  }
});
