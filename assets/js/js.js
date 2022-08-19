console.log("hello")

const bar =document.getElementById('bar');
const nav=document.getElementById('navbar');

bar.addEventListener("click",()=>{
    nav.classList.add('active');
})


const close=document.getElementById('close');

close.addEventListener('click',()=>{
    nav.classList.remove('active');
})