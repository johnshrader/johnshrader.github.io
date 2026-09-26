// assets/site.js — Build S. No inline handlers anywhere (a strict CSP forbids them). Jobs: the nav toggle, the estimate
// widget, and (go-live batch) on the 404 page, the "retired document" line for the old site's /pdf/ links.
(function(){
  var op=document.getElementById('oldpdf'); if(op&&/^\/pdf\//.test(location.pathname)) op.hidden=false;
  var t=document.querySelector('[data-nav-toggle]'), n=document.getElementById('nav');
  if(t&&n){t.addEventListener('click',function(){n.classList.toggle('open');t.setAttribute('aria-expanded',n.classList.contains('open'));document.body.classList.toggle('nav-open',n.classList.contains('open'));});}
  var e=document.getElementById('estimate'); if(!e) return;
  var d=e.dataset, room=+d.room, kitchen=+d.kitchen, fee=+d.fee, rmin=+d.roomMin, kmin=+d.kitchenMin;
  var $=function(id){return document.getElementById(id);};
  var money=function(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:2});};
  function calc(){
    var rh=Math.max(rmin, parseInt($('est-room').value,10)||rmin);
    var kh=parseInt($('est-kitchen').value,10)||0; if(kh>0&&kh<kmin) kh=kmin;
    var r=room*rh, k=kitchen*kh;
    $('est-room-total').textContent=money(r); $('est-kitchen-total').textContent=money(k);
    $('est-fee-total').textContent=money(fee); $('est-total').textContent=money(r+k+fee);
  }
  $('est-room').addEventListener('input',calc); $('est-kitchen').addEventListener('input',calc); calc();
})();
