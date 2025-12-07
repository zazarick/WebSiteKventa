function toggleChapter() {
  const content = document.getElementById('chapterContent');
  const icon = document.getElementById('expandIcon');
  
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    icon.classList.remove('expanded');
  } else {
    content.classList.add('expanded');
    icon.classList.add('expanded');
  }
}

function toggleSubChapter(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.sub-expand-icon');

  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    icon.classList.remove('expanded');
    icon.textContent = '▶';
  } else {
    content.classList.add('expanded');
    icon.classList.add('expanded');
    icon.textContent = '▼';
  }
}
