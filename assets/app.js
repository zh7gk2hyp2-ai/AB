/* ═══ AB EVENTS — shared page behaviour ═══ */
const CONFIG = {
  whatsapp: "966507762024",   // رقم واتساب بصيغة دولية بدون +
  phone:    "+966507762024",  // رقم الاتصال
};

/* nav scroll + back-to-top */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{
  if(nav)nav.classList.toggle('scrolled',scrollY>40);
  const tt=document.getElementById('totop');
  if(tt)tt.classList.toggle('show',scrollY>600);
});

/* mobile menu */
const burger=document.getElementById('burger'),navLinks=document.getElementById('navLinks');
if(burger&&navLinks){
  burger.addEventListener('click',()=>{burger.classList.toggle('x');navLinks.classList.toggle('open');});
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('x');navLinks.classList.remove('open');}));
}
const tt=document.getElementById('totop');
if(tt)tt.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* custom cursor */
const dot=document.getElementById('cDot'),ring=document.getElementById('cRing');
if(dot&&ring){
  let mx=0,my=0,rx=0,ry=0;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;});
  (function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button,[data-cursor],.card,.post,.tl-item').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('hover'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));
  });
}

/* whatsapp links */
const waMsg=encodeURIComponent('مرحباً AB Events ✦ أرغب في الاستفسار عن تنظيم فعالية.');
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=`https://wa.me/${CONFIG.whatsapp}?text=${waMsg}`;a.target='_blank';});
document.querySelectorAll('[data-tel]').forEach(a=>a.href='tel:'+CONFIG.phone);

/* year */
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

/* loader */
addEventListener('load',()=>{const l=document.getElementById('loader');if(l)setTimeout(()=>l.classList.add('done'),500);});
setTimeout(()=>{const l=document.getElementById('loader');if(l)l.classList.add('done');},3000);
