(()=>{
const q=s=>document.querySelector(s);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const f=q('#book');if(!f)return;
const d=f.dataset,ds=q('#day'),ts=q('#time');
const fm=new Intl.DateTimeFormat('it-IT',{weekday:'long',day:'numeric',month:'long'});
const dy=n=>{const x=new Date();x.setDate(x.getDate()+n);return x};
const cap=s=>s[0].toUpperCase()+s.slice(1);
const add=(s,t)=>s.add(new Option(t,t));
const c=d.days.split(':');
if(c[0]==='next'){const ex=(c[2]||'').split(',').filter(Boolean).map(Number);for(let i=1;i<=+c[1];i++){const x=dy(i);if(!ex.includes(x.getDay()))add(ds,cap(fm.format(x)))}}
else{add(ds,'Oggi, '+fm.format(dy(0)));if(c[0]==='od')add(ds,'Domani, '+fm.format(dy(1)))}
d.times.split(',').forEach(t=>add(ts,t));
f.addEventListener('submit',e=>{e.preventDefault();
const it=[...f.querySelectorAll('input[type=checkbox]:checked')].map(i=>i.value),m=q('#msg');
if(!it.length){m.textContent='Scegli almeno una voce per continuare.';return}
m.textContent='';
const n=q('#nome').value.trim();
const t='Ciao '+d.biz+', '+d.intro+': '+it.join(', ')+'. '+d.dl+': '+ds.value+'. '+d.tl+': '+ts.value+'.'+(n?' Nome: '+n+'.':'')+' (messaggio di prova dal sito dimostrativo)';
window.open('https://wa.me/390800000000?text='+encodeURIComponent(t),'_blank','noopener');
});
})();
