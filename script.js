function firstPage(){
    const header = document.querySelector("header")
    const headerTimeline = gsap.timeline({defaults:{ease:"power.inOut",duration:1}})
    headerTimeline.to(header,{opacity:1})

}