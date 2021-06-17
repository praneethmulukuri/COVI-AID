const pred=document.querySelector("#prediction")
const pre=document.querySelector("#pre")
const pie=document.querySelector(".pie")

window.addEventListener('load',(event)=>{
    let preds=pred.innerHTML;
    let pres=pre.innerHTML;
    pie.style.background="conic-gradient(rgb(46, 204, 113) 0 " +Number(preds)+"%"+",black 0 "+ Number(pres)+"%)";
})