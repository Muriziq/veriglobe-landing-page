
    const header = document.querySelector("header")
    const headerTimeline = gsap.timeline({defaults:{ease:"power.inOut",duration:0.7}})
    headerTimeline.to(header,{opacity:1})
    headerTimeline.fromTo(header.querySelector("img"),{opacity:0,x:-30},{opacity:1,x:0})
    headerTimeline.fromTo(header.querySelectorAll("button"),{opacity:0,y:30},{opacity:1,y:0,stagger:0.2},"-=0.5")
    headerTimeline.fromTo(header.querySelectorAll("a"),{opacity:0,y:30,x:30},{opacity:1,y:0,x:0,stagger:{each:0.1,from:"center"}},"-=0.5")

function firstPage(){

    const firstPageTimeline = gsap.timeline({defaults:{ease:"power.inOut",duration:0.7}})
    const firstPage = document.querySelector(".first-article")
    firstPageTimeline.fromTo(firstPage.querySelector("svg"),{opacity:0,width:0,height:0},{opacity:1,width:"100%",height:"100%"})
firstPageTimeline.fromTo(firstPage.querySelectorAll("section > div, section > h1, section > p, section > button")
,{opacity:0,y:30},{opacity:1,y:0,stagger:0.2},"-=0.5")


const secondArticle = document.querySelector(".second-article")
gsap.fromTo(secondArticle.querySelectorAll("div img"),{opacity:0,y:100},{opacity:1,y:0,duration:1,scrollTrigger:{trigger:secondArticle,start: "top 90%",end:"bottom top",toggleActions:"play none resume none"}})
const secondArticleSec = secondArticle.querySelector("section")
gsap.fromTo(secondArticleSec.querySelector("img"),{opacity:0,x:-100},{opacity:1,x:0,scrollTrigger:{trigger:secondArticleSec,start:"top 80%",end:"bottom top",toggleActions:"play none resume none"}})
gsap.fromTo(secondArticleSec.querySelector("DIV"),{opacity:0,y:100},{opacity:1,y:0,scrollTrigger:{trigger:secondArticleSec,start:"top 80%",end:"bottom top",toggleActions:"play none resume none"}})

gsap.fromTo(document.querySelectorAll(".third-article div"),{opacity:0,y:50},{opacity:1,y:0,ease:"power1.inOut",scrollTrigger:{trigger:document.querySelector(".third-article section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:0.5,stagger:0.2})
const fourthArticleDivs = Array.from(document.querySelectorAll(".fourth-article > section > div"))
gsap.fromTo(fourthArticleDivs[0],{opacity:0,x:-150},{opacity:1,x:0,scrollTrigger:{trigger:document.querySelector(".fourth-article > section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(fourthArticleDivs[1],{opacity:0,y:150},{opacity:1,y:0,scrollTrigger:{trigger:document.querySelector(".fourth-article > section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(fourthArticleDivs[2],{opacity:0,x:150},{opacity:1,x:0,scrollTrigger:{trigger:document.querySelector(".fourth-article > section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:1})

gsap.fromTo(document.querySelectorAll(".fifth-article h2,.fifth-article > div p"),{opacity:0,y:40},{opacity:1,y:0,stagger:0.2,scrollTrigger:{trigger:".fifth-article",start:"top 80%",end:"bottom top",toggleActions:"play none resume none"}})

gsap.fromTo(".sixth",{opacity:0,y:100},{opacity:1,y:0,scrollTrigger:{trigger:document.querySelector(".sixth-article section"),start:"top 90%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(".sixth1",{opacity:0,x:100},{opacity:1,x:0,scrollTrigger:{trigger:document.querySelector(".sixth-article section"),start:"top 90%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
}
gsap.fromTo(".seventh-article",{opacity:0,y:100},{opacity:1,y:0,ease:"power2.inOut",scrollTrigger:{trigger:".seventh-article",toggleActions:"play none resume none",start:"top 80%"},duration:1})

gsap.fromTo(document.querySelector("footer section"),{opacity:0,x:-100},{opacity:1,x:0,scrollTrigger:{trigger:document.querySelector("footer section"),start:"top 90%",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(document.querySelectorAll("footer nav"),{opacity:0,y:100},{opacity:1,y:0,scrollTrigger:{trigger:document.querySelector("footer section"),start:"top 90%",toggleActions:"play none resume none"},duration:1})

function secondPage(){

    const range = document.querySelector('.third-article input[type="range"]');
    const multiplier = {startup: 900,growth:850,enterprise:0}
    const rangeItem = document.getElementById("range")
    const amountItem = document.getElementById("amount")
    const select = document.getElementById("select")
    function reEvaluate(value){
       rangeItem.textContent = `${value}|`
       amountItem.textContent = multiplier[select.value] * value
    }
        function updateBackground(value){
              const min = range.min ? parseInt(range.min) : 0;
        const max = range.max ? parseInt(range.max) : 100;
        const percentage = ((value - min) / (max - min)) * 100;

        range.style.backgroundImage = `linear-gradient(to right, #64DFDF 0%, #64DFDF ${percentage}%, #E4E4E7 ${percentage}%, #E4E4E7 100%)`;
    }
    range.addEventListener("input",(e)=>{reEvaluate(e.target.value),updateBackground(e.target.value)})
    select.addEventListener("change",()=>reEvaluate(range.value))
    window.addEventListener("load",()=>{reEvaluate(range.value),updateBackground(range.value)})
    gsap.fromTo("path",{fill:"transparent"},{fill:"#ffffff",delay:1.5})
    gsap.fromTo(document.querySelector(".first-article p"),{opacity:0,y:40},{opacity:1,y:0})
    gsap.fromTo(document.querySelectorAll(".second-article h2,.second-article > div p"),{opacity:0,y:50},{opacity:1,y:0,stagger:0.2,delay:1})
    const secondTimeline = gsap.timeline({scrollTrigger:{trigger:".second1",toggleActions:"play none resume none",start:"top 80%"}})
    secondTimeline.fromTo(".second",{opacity:0,x:-100,y:100},{opacity:1,x:0,y:0,stagger:0.2})
    secondTimeline.fromTo(".second1",{opacity:0,y:100},{opacity:1,y:0})
    gsap.fromTo(document.querySelectorAll(".fourth-article  div"),{opacity:0,y:60},{opacity:1,y:0,stagger:0.2,scrollTrigger:{trigger:document.querySelector(".fourth-article section"),toggleActions:"play none resume none",start:"top 90%"}})
}