console.log("jellsado");

const nav=document.getElementById('navbar')
const close=document.getElementById('close');

const bar=document.getElementById('bar');

bar.addEventListener('click',()=>{
    nav.classList.add('ownclass');
})

close.addEventListener('click',()=>{
    nav.classList.remove('ownclass')
})

