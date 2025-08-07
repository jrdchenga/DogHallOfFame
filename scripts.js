
function convertAge(){let a=document.getElementById('age').value;document.getElementById('result').innerText='Dog age: '+(a*7);}
function showTraitInfo(){let t=document.getElementById('trait').value;let info=t==='loyal'?'Loyal & faithful':'Brave & fearless';document.getElementById('info').innerText=info;}
function validateForm(){try{let n=document.getElementById('name').value;if(!n)throw 'Name missing';return true;}catch(e){document.getElementById('error').innerText=e;return false;}}
function advancedValidation(){let p=document.getElementById('postal').value;/^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i.test(p)?document.getElementById('validateResult').innerText='Valid':document.getElementById('validateResult').innerText='Invalid';return false;}
function calculateElapsed(){let d=new Date(document.getElementById('date').value),n=new Date(),ms=n-d,days=Math.floor(ms/864e5),y=Math.floor(days/365);days%=365;let m=Math.floor(days/30);days%=30;document.getElementById('elapsed').innerText=`${y}y ${m}m ${days}d`;}
let fb=[];function updateFeedback(c){c.checked?fb.push(c.value):fb=fb.filter(v=>v!==c.value);document.getElementById('feedback').innerText=fb.join(', ');}
function loadFact(){fetch('https://dog-api.kinduff.com/api/facts').then(r=>r.json()).then(d=>{document.getElementById('fact').innerText=d.facts[0];});}
