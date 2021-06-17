const im1=document.querySelector("#ibox1")
const j1=document.querySelector("#j1")
const m1=document.querySelector("#m1")

const im2=document.querySelector("#ibox2")
const j2=document.querySelector("#j2")
const m2=document.querySelector("#m2")

const im3=document.querySelector("#ibox3")
const j3=document.querySelector("#j3")
const m3=document.querySelector("#m3")

const im4=document.querySelector("#ibox4")
const j4=document.querySelector("#j4")
const m4=document.querySelector("#m4")

const sc1a=document.querySelector("#sc1a")
const sc1b=document.querySelector("#sc1b")
const sc1c=document.querySelector("#sc1c")
const sc1d=document.querySelector("#sc1d")
const n1=document.querySelector("#n1")

const sc2a=document.querySelector("#sc2a")
const sc2b=document.querySelector("#sc2b")
const sc2c=document.querySelector("#sc2c")
const sc2d=document.querySelector("#sc2d")
const n2=document.querySelector("#n2")

const sc3a=document.querySelector("#sc3a")
const sc3b=document.querySelector("#sc3b")
const sc3c=document.querySelector("#sc3c")
const sc3d=document.querySelector("#sc3d")
const n3=document.querySelector("#n3")

const sc4a=document.querySelector("#sc4a")
const sc4b=document.querySelector("#sc4b")
const sc4c=document.querySelector("#sc4c")
const sc4d=document.querySelector("#sc4d")
const n4=document.querySelector("#n4")

const fab=document.querySelector(".fab")

const ha=document.querySelector("#ha")
const ma=document.querySelector("#ma")
const pa=document.querySelector("#pa")
const ba=document.querySelector("#ba")
const logo=document.querySelector("#log")

im1.addEventListener('mouseover',(event)=>{
    j1.style.opacity=1
    m1.style.opacity=1
    sc1a.style.opacity=1
    sc1b.style.opacity=1
    sc1c.style.opacity=1
    sc1d.style.opacity=1
    n1.style.paddingTop="20px"
    im1.style.height="500px"
    
})

im1.addEventListener('mouseout',(event)=>{
    j1.style.opacity=0
    m1.style.opacity=0
    sc1a.style.opacity=0
    sc1b.style.opacity=0
    sc1c.style.opacity=0
    sc1d.style.opacity=0
    n1.style.paddingTop="40px"
    im1.style.height="350px"
})

im2.addEventListener('mouseover',(event)=>{
    j2.style.opacity=1
    m2.style.opacity=1
    sc2a.style.opacity=1
    sc2b.style.opacity=1
    sc2c.style.opacity=1
    sc2d.style.opacity=1
    n2.style.paddingTop="20px"
    im2.style.height="500px"
})

im2.addEventListener('mouseout',(event)=>{
    j2.style.opacity=0
    m2.style.opacity=0
    sc2a.style.opacity=0
    sc2b.style.opacity=0
    sc2c.style.opacity=0
    sc2d.style.opacity=0
    n2.style.paddingTop="40px"
    im2.style.height="350px"
})

im3.addEventListener('mouseover',(event)=>{
    j3.style.opacity=1
    m3.style.opacity=1
    sc3a.style.opacity=1
    sc3b.style.opacity=1
    sc3c.style.opacity=1
    sc3d.style.opacity=1
    n3.style.paddingTop="20px"
    im3.style.height="500px"
})

im3.addEventListener('mouseout',(event)=>{
    j3.style.opacity=0
    m3.style.opacity=0
    sc3a.style.opacity=0
    sc3b.style.opacity=0
    sc3c.style.opacity=0
    sc3d.style.opacity=0
    n3.style.paddingTop="40px"
    im3.style.height="350px"
})

im4.addEventListener('mouseover',(event)=>{
    j4.style.opacity=1
    m4.style.opacity=1
    sc4a.style.opacity=1
    sc4b.style.opacity=1
    sc4c.style.opacity=1
    sc4d.style.opacity=1
    n4.style.paddingTop="20px"
    im4.style.height="500px"
})

im4.addEventListener('mouseout',(event)=>{
    j4.style.opacity=0
    m4.style.opacity=0
    sc4a.style.opacity=0
    sc4b.style.opacity=0
    sc4c.style.opacity=0
    sc4d.style.opacity=0
    n4.style.paddingTop="40px"
    im4.style.height="350px"
})


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>500){
        hnav.style.backgroundColor="white"  
        ha.style.color="black"
        ma.style.color="black"
        pa.style.color="black"
        ba.style.color="black"
        logo.style.color="black"
    }
    else{
        hnav.style.backgroundColor="transparent"
        ha.style.color="white"
        ma.style.color="white"
        pa.style.color="white"
        ba.style.color="white"
        logo.style.color="white"
    }
});

/**************************************** Scroll Reveal Animations******************************************/

const sr=ScrollReveal({
    origin:'top',
    distance:'200px',
    duration:2000,
    reset:true,
    easing:'ease-in-out'
})

sr.reveal('.img',{origin:'left',delay:400})
sr.reveal('.matter',{origin:'right'})