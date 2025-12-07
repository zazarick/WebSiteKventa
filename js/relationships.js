setInterval(function() {
  if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
    document.body.innerHTML = 'Доступ запрещен';
  }
}, 1000);

function toggleRelations(){
  const content = document.getElementById('relContent');
  const icon = document.getElementById('relExpandIcon');
  const isExpanded = content.classList.contains('expanded');
  if(isExpanded){
    content.classList.remove('expanded');
    icon.classList.remove('expanded');
  } else {
    content.classList.add('expanded');
    icon.classList.add('expanded');
  }
}

function toggleMando(){
  const content = document.getElementById('mandoContent');
  const icon = document.getElementById('mandoExpandIcon');
  const isExpanded = content.classList.contains('expanded');
  if(isExpanded){
    content.classList.remove('expanded');
    icon.classList.remove('expanded');
  } else {
    content.classList.add('expanded');
    icon.classList.add('expanded');
  }
}
