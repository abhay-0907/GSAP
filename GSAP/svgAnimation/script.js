let initialPath = `M 10 100 Q 500 100 900 100`;
let finalPath = `M 10 100 Q 500 100 900 100`;

let box = document.querySelector("#box")

box.addEventListener("mouseenter",(mouse)=>{
    let path = `M 10 100 Q ${mouse.x} ${mouse.y} 900 100`
    console.log(mouse.x);
    console.log(mouse.y);
    
    gsap.to("svg path",{
        attr: {d:path},
        duration: 0.5,
        ease: "power3.out",
    }
    )
    
})

box.addEventListener("mouseleave",(mouse)=>{
   path = `M 0 100 Q 1000 100 1900 100`

    gsap.to("svg path",{
        attr: {d:finalPath},
        duration: 1.5,
        ease: "bounce.out"
    }
    )
    
})