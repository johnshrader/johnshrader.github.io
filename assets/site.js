// assets/site.js — Build S. No inline handlers anywhere (a strict CSP forbids them). Jobs: the nav toggle, the estimate
// widget, and (go-live batch) on the 404 page, the "retired document" line for the old site's /pdf/ links.
(function(){
  var op=document.getElementById('oldpdf'); if(op&&/^\/pdf\//.test(location.pathname)) op.hidden=false;
  var t=document.querySelector('[data-nav-toggle]'), n=document.getElementById('nav');
  if(t&&n){t.addEventListener('click',function(){n.classList.toggle('open');t.setAttribute('aria-expanded',n.classList.contains('open'));document.body.classList.toggle('nav-open',n.classList.contains('open'));});}
  var $=function(id){return document.getElementById(id);};
  var money=function(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:2});};
  var paths=document.getElementById('path');
  [].forEach.call(document.querySelectorAll('[data-door]'),function(a){a.addEventListener('click',function(){ if(paths) paths.selectedIndex=+a.getAttribute('data-door'); });});
  var e=$('estimate'); if(!e) return;
  var d=e.dataset, room=+d.room, kitchen=+d.kitchen, fee=+d.fee, dep=+d.deposit, rmin=+d.roomMin, kmin=+d.kitchenMin;
  var rh=rmin, kh=0;
  function calc(){
    var r=room*rh, k=kitchen*kh, tot=r+k+fee;
    $('est-room').textContent=rh; $('est-kitchen').textContent=kh;
    $('est-room-total').textContent=money(r); $('est-kitchen-total').textContent=money(k); $('est-total').textContent=money(tot);
    $('est-label').textContent=(rh===rmin&&kh===0)?'Minimum total':'Your estimate';
    return tot;
  }
  [].forEach.call(e.querySelectorAll('[data-step]'),function(btn){btn.addEventListener('click',function(){
    var up=+btn.getAttribute('data-d')>0;
    if(btn.getAttribute('data-step')==='room'){ rh=up?Math.min(rh+1,24):Math.max(rh-1,rmin); }
    else { kh=up?(kh===0?kmin:Math.min(kh+1,24)):(kh<=kmin?0:kh-1); }
    calc();
  });});
  $('est-go').addEventListener('click',function(){
    var t=calc(), box=$('details');
    var line='My estimate: '+rh+' room hours'+(kh?', '+kh+' kitchen hours':'')+' — '+money(t)+' (+ '+money(dep)+' refundable deposit).';
    if(box){ box.value=box.value.replace(/^My estimate:.*\n?/,''); box.value=line+(box.value?'\n'+box.value:''); }
  });
  calc();
})();
