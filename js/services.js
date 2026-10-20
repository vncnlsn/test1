'use strict';
(()=>{
 const rows=[...document.querySelectorAll('.service-row[data-service]')];
 function setOpen(row,open){row.classList.toggle('open',open);const b=row.querySelector('.service-trigger');if(b)b.setAttribute('aria-expanded',String(open))}
 rows.forEach(row=>{const button=row.querySelector('.service-trigger');if(button)button.addEventListener('click',()=>setOpen(row,!row.classList.contains('open')))});
 function openHash(){const id=decodeURIComponent(location.hash.slice(1));const row=rows.find(r=>r.id===id);if(row){setOpen(row,true);requestAnimationFrame(()=>row.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}))}}
 window.addEventListener('hashchange',openHash);if(location.hash)openHash();else if(rows.length)setOpen(rows[0],true);
})();
