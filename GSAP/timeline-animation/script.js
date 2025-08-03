let tl = gsap.timeline();

tl.to(".full",{
    right:0,
    duration:0.2
})

tl.from(".full li",{
    x:150,
    stagger:0.2,
    duration:0.5,
    opacity:0
})

tl.from(".full i",{
    opacity:0,
})
tl.pause();
let menu = document.querySelector(".nav i");
menu.addEventListener("click",function(){
    console.log("cl");
    
    tl.play()
})

let close = document.querySelector(".full i")

close.addEventListener("click",function(){
    tl.reverse()
})