(function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const path = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const target = href.split('#')[0].split('/').pop();
    if(target && target === path){
      a.setAttribute('aria-current','page');
    }
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
    });
  }
})();
