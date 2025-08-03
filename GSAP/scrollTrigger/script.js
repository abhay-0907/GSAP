//!pin property
gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        pin:true,
        start:"top 1%",
        end:"top -500%",
        scrub:4,

    }
})


gsap.from("#page1 #box",{
    scale:0.5 ,
    scrollTrigger:{
        trigger:"#page1",
        pin:true,
        scrub:3,
        markers:true,
        start:"top 0%",
        end:"top -250%"
        
    }
})
