const dec=document.getElementById("decb");
const reset=document.getElementById("resetb");
const inc=document.getElementById("incb");

const l=document.getElementById("lb");
let c=0;

inc.onclick= function(){
     c++;
     l.textContent=c;
}

dec.onclick= function(){
    c--;
    l.textContent=c;
}

reset.onclick=function(){
    c=0;
    l.textContent=c;
}