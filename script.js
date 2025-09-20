
function firstPage(){

gsap.fromTo(document.querySelectorAll(".third-article div"),{opacity:0,y:50},{opacity:1,y:0,ease:"power1.inOut",scrollTrigger:{trigger:document.querySelector(".third-article section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:0.5,stagger:0.2})
const fourthArticleDivs = Array.from(document.querySelectorAll(".fourth-article > section > div"))
gsap.fromTo(fourthArticleDivs[0],{opacity:0,x:-150},{opacity:1,x:0,scrollTrigger:{trigger:document.querySelector(".fourth-article > section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(fourthArticleDivs[1],{opacity:0,y:150},{opacity:1,y:0,scrollTrigger:{trigger:document.querySelector(".fourth-article > section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(fourthArticleDivs[2],{opacity:0,x:150},{opacity:1,x:0,scrollTrigger:{trigger:document.querySelector(".fourth-article > section"),start:"top 80%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(".sixth",{opacity:0,y:100},{opacity:1,y:0,scrollTrigger:{trigger:document.querySelector(".sixth-article section"),start:"top 90%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
gsap.fromTo(".sixth1",{opacity:0,x:100},{opacity:1,x:0,scrollTrigger:{trigger:document.querySelector(".sixth-article section"),start:"top 90%",end:"bottom top",toggleActions:"play none resume none"},duration:1})
}
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
}


function third(){
    const copyItem = document.querySelectorAll(".copyItem")
    const copy = document.querySelectorAll(".copy")
    copy.forEach((copy,i)=>copy.addEventListener("click",()=>{
        navigator.clipboard.writeText(copyItem[i].textContent.trim())
        .then(()=>{
            gsap.fromTo(".copied",{top:50,opacity:0},{top:150,opacity:1})
            gsap.to(".copied",{opacity:0,delay:1})
        })
        .catch(err => console.log(err))
    }))
    const anchors = document.querySelectorAll("aside a")
    anchors.forEach(anchor => anchor.addEventListener("click",(e)=>{
        e.preventDefault()
            const href = event.currentTarget.getAttribute('href');
            if(href != "" || href!= null){
                    const id = href.substring(1);

    const target = document.getElementById(id);
          const rect = target.getBoundingClientRect();
      const offset = rect.top + window.scrollY - 150;

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
            }
    }))
}