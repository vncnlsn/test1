'use strict';
(()=>{
 const toggle=document.querySelector('.nav-toggle');const menu=document.querySelector('.nav-links');
 if(toggle&&menu){const close=()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')};toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))close()});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close))}
 const page=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===page)a.classList.add('active')});
})();
