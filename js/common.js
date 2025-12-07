document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
  
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    return false;
  }
  
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    return false;
  }
  
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    return false;
  }
  
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    return false;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.dropdown-menu');
  menus.forEach(function(menu){
    const toggle = menu.querySelector('.dropdown-toggle');
    const content = menu.querySelector('.dropdown-content');
    if(toggle && content){
      toggle.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelectorAll('.dropdown-content.show').forEach(function(other){
          if(other!==content){ other.classList.remove('show'); }
        });
        content.classList.toggle('show');
      });
    }
  });
  document.addEventListener('click', function(e){
    if(!e.target.closest('.dropdown-menu')){
      document.querySelectorAll('.dropdown-content.show').forEach(function(dc){ dc.classList.remove('show'); });
    }
  });
});

setInterval(function() {
  const devtools = /./;
  devtools.toString = function() {
    this.opened = true;
  }
  console.log('%c', devtools);
  if (devtools.opened) {
    document.body.innerHTML = 'Доступ запрещен';
  }
}, 1000);

console.log = function() {};
console.warn = function() {};
console.error = function() {};
console.info = function() {};
console.debug = function() {};
console.trace = function() {};
