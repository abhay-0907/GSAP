const breakText = ()=>{
    let h1 = document.querySelector("h1");
    let text = h1.textContent;
    let clutter = ""
    let spilitedText = text.split("");
    console.log(spilitedText);
    
    spilitedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    console.log(clutter);
    h1.innerHTML = clutter
    
}

breakText()

gsap.from("h1 span",{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.3,
})