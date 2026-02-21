document.addEventListener('DOMContentLoaded', async function () {
  var currentContainer = document.getElementById('team-current');
  var alumniContainer = document.getElementById('team-alumni');
  if (!currentContainer || !alumniContainer) return;

  function createLinksHtml(links) {
    var items = [];

    if (links.email) {
      items.push('<a href="' + links.email + '" aria-label="Email"><i class="fas fa-envelope"></i></a>');
    }
    if (links.linkedin) {
      items.push('<a href="' + links.linkedin + '" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>');
    }
    if (links.orcid) {
      items.push('<a href="' + links.orcid + '" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><i class="fab fa-orcid"></i></a>');
    }
    if (links.github) {
      items.push('<a href="' + links.github + '" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>');
    }

    return items.length ? '<div class="member-links">' + items.join('') + '</div>' : '';
  }

  function renderMembers(container, members) {
    container.innerHTML = members.map(function (member) {
      var links = member.links || {};
      return (
        '<div class="team-member">' +
          '<div class="member-info"><strong>' + member.name + '</strong>' + (member.role ? ' (' + member.role + ')' : '') + '</div>' +
          createLinksHtml(links) +
        '</div>'
      );
    }).join('');
  }

  try {
    var response = await fetch('data/team.json');
    if (!response.ok) throw new Error('Failed to load team data');

    var teamData = await response.json();
    renderMembers(currentContainer, teamData.current || []);
    renderMembers(alumniContainer, teamData.alumni || []);
  } catch (error) {
    currentContainer.innerHTML = '';
    alumniContainer.innerHTML = '';
  }
});
