let incrm= document.getElementById('increase');
let dicrm= document.getElementById('decrease');
let display=document.getElementById('number');
let h=0;
incrm.addEventListener('click',()=>{
    h += 1;
    display.innerHTML=h;
})
dicrm.addEventListener('click',()=>{
   if(h<=0){
       display.innerHTML=h;
   }
   else{
       h -=1;
       display.innerHTML=h;
   }

})