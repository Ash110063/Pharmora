(function(){
  var chev='<span class="dot"><svg><use href="#chev"/></svg></span>';
  var fl='<svg class="flower"><use href="#flower"/></svg>';

  // ticker
  var std=[['GMP compliant','<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z"/>'],['21 CFR Part 11','<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'],['EU GMP Annex 11','<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'],['ALCOA+ data integrity','<path d="m5 12 4 4 10-10"/>'],['Electronic batch records','<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>']];
  var one=std.map(function(s){return '<span class="it">'+fl+'<svg class="l" viewBox="0 0 24 24">'+s[1]+'</svg>'+s[0]+'</span>'}).join('');
  document.getElementById('tk').innerHTML=one+one+one+one;

  // pill ticker
  var p='';for(var i=0;i<8;i++)p+='<span class="btn" style="height:42px">Book a Walkthrough '+chev+'</span>'+fl;
  document.getElementById('pk').innerHTML=p+p;

  // modules list with infographic thumbs
  var thumbs={
    ebr:'<div class="thumb th-deep"><svg viewBox="0 0 236 95" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">'+
      [0,1,2,3,4,5].map(function(k){var x=18+k*35;var done=k<5;return '<circle cx="'+(x+8)+'" cy="40" r="8" fill="'+(done?'#96DC6E':'none')+'" stroke="'+(done?'#96DC6E':'rgba(255,255,255,.6)')+'" stroke-width="1.5" '+(done?'':'stroke-dasharray="3 2"')+'/>'+(k<5?'<line x1="'+(x+16)+'" y1="40" x2="'+(x+35)+'" y2="40" stroke="'+(k<4?'#96DC6E':'rgba(255,255,255,.35)')+'" stroke-width="2"/>':'')+(done?'<path d="M'+(x+4.5)+' 40.5l2.4 2.4 4.4-4.6" fill="none" stroke="#054340" stroke-width="1.8" stroke-linecap="round"/>':'')}).join('')+
      '<text x="18" y="74" fill="#fff" font-family="Poppins,sans-serif" font-size="10">BTH-2602</text><text x="218" y="74" text-anchor="end" fill="#C3EE9F" font-family="Poppins,sans-serif" font-size="10">5 of 6 signed</text></svg></div>',
    qc:'<div class="thumb th-mint"><svg viewBox="0 0 236 95" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><rect x="14" y="14" width="208" height="67" rx="9" fill="#fff"/>'+
      '<text x="26" y="33" fill="#0B4A44" font-family="Figtree,sans-serif" font-size="11" font-weight="600">QC-002 release</text><rect x="152" y="23" width="58" height="15" rx="7.5" fill="#F6EBC9"/><text x="181" y="33.5" text-anchor="middle" fill="#8A6417" font-family="Poppins,sans-serif" font-size="8">Awaiting</text>'+
      ['Result','Cert.','Sample'].map(function(l,k){var y=50+k*10;var w=[150,110,70][k];return '<text x="26" y="'+(y+3)+'" fill="#7C8784" font-family="Poppins,sans-serif" font-size="7.5">'+l+'</text><rect x="62" y="'+(y-3)+'" width="148" height="6" rx="3" fill="#E3ECE2"/><rect x="62" y="'+(y-3)+'" width="'+(w*148/150)+'" height="6" rx="3" fill="'+['#7CC99A','#96DC6E','#C3EE9F'][k]+'"/>'}).join('')+'</svg></div>',
    inv:'<div class="thumb th-butter"><svg viewBox="0 0 236 95" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">'+
      [[62,40],[48,30],[70,0],[36,26],[58,44],[44,14]].map(function(v,k){var x=22+k*33;var base=80;return '<rect x="'+x+'" y="'+(base-v[0])+'" width="20" height="'+(v[0]-v[1])+'" rx="3" fill="#0B4A44"/>'+(v[1]?'<rect x="'+x+'" y="'+(base-v[1])+'" width="20" height="'+v[1]+'" rx="3" fill="#EAE7B8" stroke="#B8A94F" stroke-width="1" stroke-dasharray="2 2"/>':'')}).join('')+
      '<line x1="14" y1="80.5" x2="222" y2="80.5" stroke="rgba(11,74,68,.3)"/></svg></div>',
    trace:'<div class="thumb th-deep"><svg viewBox="0 0 236 95" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><path d="M30 70 C70 70 70 30 110 30 S160 60 206 24" fill="none" stroke="#96DC6E" stroke-width="2"/>'+
      [[30,70,'LOT-101'],[110,30,'BTH-2601'],[160,48,'QC-001'],[206,24,'Horizon']].map(function(n){return '<circle cx="'+n[0]+'" cy="'+n[1]+'" r="5" fill="#96DC6E" stroke="#054340" stroke-width="2"/><text x="'+n[0]+'" y="'+(n[1]+(n[1]>50?18:-10))+'" text-anchor="middle" fill="#fff" font-family="Poppins,sans-serif" font-size="8.5">'+n[2]+'</text>'}).join('')+'</svg></div>',
    cost:'<div class="thumb th-mint"><svg viewBox="0 0 236 95" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><text x="18" y="34" fill="#0B4A44" font-family="Figtree,sans-serif" font-size="20" font-weight="500">$1,880</text><text x="92" y="33" fill="#4E5A57" font-family="Poppins,sans-serif" font-size="8.5">BTH-2601 batch cost</text>'+
      (function(){var parts=[['#054340',.52],['#7CC99A',.2],['#96DC6E',.16],['#EAE7B8',.12]],x=18,o='';parts.forEach(function(q){var w=200*q[1];o+='<rect x="'+x+'" y="46" width="'+(w-2)+'" height="14" rx="3" fill="'+q[0]+'"/>';x+=w});return o})()+
      '<text x="18" y="76" fill="#4E5A57" font-family="Poppins,sans-serif" font-size="7.5">Materials · Labour · QC · Overhead (example split)</text></svg></div>'
  };
  var mods=[['Electronic Batch Record','ebr','Operators follow the route step by step. Each step is signed with a name and time, then locked.'],
    ['QC Lab &amp; Release Gate','qc','Finished batches wait behind a release test. Pass unlocks only with a passing result and a certificate.'],
    ['Inventory &amp; Quarantine','inv','New lots are held automatically. Nothing reaches the line until QC releases it.'],
    ['Traceability &amp; Recall','trace','Pick any lot and see source materials, tests, packaging and every customer it reached.'],
    ['Batch Costing &amp; Finance','cost','Material, labour and overhead roll up to a cost per batch, ready for invoicing.']];
  document.getElementById('mlist').innerHTML=mods.map(function(m,i){return '<div class="mrow"><div><div class="n">[0'+(i+1)+']</div><h3>'+m[0]+'</h3></div>'+thumbs[m[1]]+'<p class="d">'+m[2]+'</p><a class="arrow" href="https://claude.ai/artifact/SWQeGB42a1d1AWrpTo5fgo" target="_blank" rel="noopener" aria-label="See '+m[0].replace('&amp;','and')+' in the prototype"><svg><use href="#up"/></svg></a></div>'}).join('');

  // process flow svg
  var st=['Receive materials','Test &amp; release','Plan batch','Dispense','Manufacture','Package','Release test','Dispatch &amp; trace'];
  var W=780,gap=W/8,s='<svg viewBox="0 0 780 150" role="img" aria-label="Eight batch stages; stages 1 to 5 signed, packaging in progress, release test and dispatch waiting. QA gates after test and release and after release test.">';
  s+='<line x1="'+(gap/2)+'" y1="62" x2="'+(W-gap/2)+'" y2="62" stroke="rgba(255,255,255,.18)" stroke-width="2"/>';
  s+='<line x1="'+(gap/2)+'" y1="62" x2="'+(gap*5.5)+'" y2="62" stroke="#96DC6E" stroke-width="2.5"/>';
  st.forEach(function(t,i){var x=gap*i+gap/2,done=i<5,cur=i===5;
    var gate=(i===1||i===6);
    if(gate){s+='<rect x="'+(x-30)+'" y="10" width="60" height="18" rx="9" fill="#EAE7B8"/><text x="'+x+'" y="22.5" text-anchor="middle" fill="#054340" font-family="Poppins,sans-serif" font-size="8.5" font-weight="500">QA gate '+(i===1?1:2)+'</text><line x1="'+x+'" y1="28" x2="'+x+'" y2="46" stroke="#EAE7B8" stroke-dasharray="2 2"/>';}
    s+='<circle cx="'+x+'" cy="62" r="15" fill="'+(done?'#96DC6E':cur?'#fff':'#054340')+'" stroke="'+(done?'#96DC6E':cur?'#fff':'rgba(255,255,255,.55)')+'" stroke-width="1.5" '+((!done&&!cur)?'stroke-dasharray="3 3"':'')+'/>';
    s+='<text x="'+x+'" y="66" text-anchor="middle" fill="'+(done||cur?'#054340':'rgba(255,255,255,.75)')+'" font-family="Figtree,sans-serif" font-size="11" font-weight="600">'+(i+1)+'</text>';
    var words=t.split(' ');var l1=words.slice(0,Math.ceil(words.length/2)).join(' '),l2=words.slice(Math.ceil(words.length/2)).join(' ');
    s+='<text x="'+x+'" y="100" text-anchor="middle" fill="#fff" font-family="Poppins,sans-serif" font-size="11">'+l1+'</text>';
    if(l2)s+='<text x="'+x+'" y="115" text-anchor="middle" fill="#fff" font-family="Poppins,sans-serif" font-size="11">'+l2+'</text>';
    s+='<text x="'+x+'" y="136" text-anchor="middle" fill="'+(done?'#C3EE9F':cur?'#fff':'rgba(255,255,255,.45)')+'" font-family="Poppins,sans-serif" font-size="9">'+(done?'Signed':cur?'In progress':'Waiting')+'</text>';
  });
  document.getElementById('flow').innerHTML=s+'</svg>';

  // role cards
  var roles=[['Signed Steps, Not Signed Sheets','Operators confirm each step on the line. Deviations are caught while the batch is still in the vessel.','Production','#C3EE9F','PR'],
    ['One Queue of Release Tests','Every open test, its due date and the batch waiting on it, in one list the lab works through.','QC lab','#9FD8B3','QC'],
    ['Release With Evidence Attached','The result, certificate and sample sit on the batch. Approval is one signed click.','QA','#EAE7B8','QA'],
    ['Quarantine Handled for You','Received lots are held automatically and appear as released the moment QC passes them.','Stores','#C3EE9F','ST'],
    ['A Cost for Every Batch','Materials, labour and overhead roll up per batch, so margins are known before invoicing.','Finance','#9FD8B3','FI'],
    ['Recall Answers in Minutes','Pick a lot and see every batch and customer it touched, ready for the regulator.','Plant head','#EAE7B8','PH']];
  var icon='<svg viewBox="0 0 26 26"><use href="#flower"/></svg>';
  var rc=roles.map(function(r){return '<div class="rcard"><div class="top">'+icon+'</div><h4>'+r[0]+'</h4><p>'+r[1]+'</p><div class="who"><i style="background:'+r[3]+'">'+r[4]+'</i>'+r[2]+'</div></div>'}).join('');
  document.getElementById('rtrack').innerHTML=rc+rc;

  // FAQ
  var faq=[['How long until we are live?','Phase 1 goes live on one production line at the end of week 4: a two-day discovery, design, three short build sprints, validation support and a pilot on one line.'],
    ['Who owns computer system validation?','Validation stays with you as the manufacturer. We supply the documentation, traceability matrix and test evidence your QA team needs to sign it off.'],
    ['Where is Pharmora hosted?','On a private cloud tenant or on your own servers. Hosting and support are $1,800 a month after go-live.'],
    ['What do you need from our team?','A QA lead and a production lead for a few hours each sprint, plus your master formulas and current SOPs during discovery.'],
    ['Are the prices fixed?','The figures here are indicative. We fix the price for each phase after the two-day discovery workshop.'],
    ['Can we change the order of Phases 2 and 3?','Yes. Both build on Phase 1 and can start in either order.']];
  document.getElementById('qs').innerHTML=faq.map(function(f,i){return '<div class="q'+(i===0?' open':'')+'"><button id="fq'+i+'" aria-expanded="'+(i===0)+'" aria-controls="fa'+i+'">'+f[0]+'<span class="cir"><svg viewBox="0 0 16 16"><path d="M8 3v10M4 9l4 4 4-4"/></svg></span></button><div class="a" id="fa'+i+'" role="region" aria-labelledby="fq'+i+'"'+(i===0?'':' hidden')+'>'+f[1]+'</div></div>'}).join('');
  document.getElementById('qs').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var q=b.parentNode,open=!q.classList.contains('open');
    [].forEach.call(document.querySelectorAll('.q'),function(x){x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded','false');x.querySelector('.a').hidden=true});
    if(open){q.classList.add('open');b.setAttribute('aria-expanded','true');q.querySelector('.a').hidden=false}});

  // delivery cards
  var ph=[['Discovery','W1 · Days 1–2',1,2,'Workshop at your plant, batch routes mapped, scope and price fixed.','2','days'],
    ['UX &amp; UI Design','W1–2 · Days 2–6',2,6,'Screens designed in the open with your operators and QA lead.','5','days'],
    ['Build Sprints','W2–4 · Days 6–16',6,16,'Three short sprints, each ending with a working demo.','3','sprints'],
    ['Validation Support','W3–4 · Days 14–18',14,18,'Test evidence and documentation for your validation sign-off.','2','QA gates'],
    ['Pilot on One Line','W4 · Days 17–20',17,20,'Real batches on one line with the team on site.','4','days'],
    ['Go-live','End of W4',20,20,'Phase 1 live: batch record, QC, inventory, traceability and audit.','17','modules']];
  var dc=ph.map(function(p,i){var g='';for(var d=1;d<=20;d++)g+='<i class="'+(d>=p[2]&&d<=p[3]?'on'+(i%2?' l':''):'')+(d%5===0&&d<20?' wk':'')+'"></i>';
    return '<div class="dcard'+(i===5?' dk':'')+'"><span class="wk">'+p[1]+'</span><h4>'+p[0]+'</h4><div class="gantt" aria-label="Working days '+p[2]+' to '+p[3]+' of 20">'+g+'</div><p>'+p[4]+'</p><div class="big"><b>'+p[5]+'</b><small>'+p[6]+'</small></div></div>'}).join('');
  document.getElementById('dtrack').innerHTML=dc+dc;

  // investment cards (image height to scale with price)
  var inv=[['Core Batch Flow','Phase 1 · 4 weeks',60000,'th-mint',['Overview','Batch record','QC lab','Inventory','Traceability','Audit','Validation','Pilot']],
    ['Supply Chain &amp; Finance','Phase 2 · ~10 weeks',28000,'th-deep dk',['Procurement','Sales orders','Packaging','Costing','Invoicing']],
    ['Quality Systems','Phase 3 · ~10 weeks',24000,'th-butter',['Deviations','CAPA','Doc control','Integrations']]];
  var max=60000,H=454;
  document.getElementById('icards').innerHTML=inv.map(function(c){var h=Math.round(H*c[2]/max);
    return '<article class="icard"><div class="img '+c[3]+'" style="height:'+h+'px"><div class="chips">'+c[4].map(function(x){return '<span>'+x+'</span>'}).join('')+'</div><div class="price">$'+c[2].toLocaleString('en-US')+'<small>'+c[1].split(' · ')[0]+'</small></div></div>'+
      '<div class="meta"><svg viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="11" rx="2"/><path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3"/></svg>'+c[1]+'</div><h3>'+c[0]+'</h3><div class="foot"><span>'+c[4].length+' modules and services</span><a href="#faq">Scope <svg viewBox="0 0 12 12"><path d="M3 9 9 3M4 3h5v5"/></svg></a></div></article>'}).join('');
})();
