
function secExpFn(target1, target2, current) {
    if (didScroll = true) {
        gsap.to(target1, { marginLeft: current })
        gsap.to(target2, { marginLeft: -current })
    }

}





let section1 = document.querySelector("#section1")
let section2 = document.querySelector("#section2")
let footer = document.querySelector("footer")
let section1Top = section1.offsetTop
let section2Top = section2.offsetTop
let projectLiOne =  section2.querySelector(".project-wrap >li:nth-child(1)")
let projectLiTwo =  section2.querySelector(".project-wrap >li:nth-child(2)")
let projectLiThree =  section2.querySelector(".project-wrap >li:nth-child(3)")
console.log(projectLiOne)

setTimeout(() => {
    let tl = gsap.timeline();
    gsap.to("nav", { opacity: 1 })
    let maintitleSpan = document.querySelectorAll(".main-title span")

    //maintitle 
    for (let i = 0; i < maintitleSpan.length; i++) {
        let arr = [100, 300, 600, 900]
        setTimeout(function () {
            maintitleSpan[i].classList.add('screen')
        }, arr[i])
    }
}, 2000)

setTimeout(() => {
    let tl = gsap.timeline();
    tl.to(".main-title > span:nth-child(1)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });
    tl.to(".main-title > span:nth-child(3)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });
    tl.to(".main-title > span:nth-child(5)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });

}, 2000)

setTimeout(function () {
    contents.classList.add("show")
}, 1000)



function scrollProgress() {
    let didScroll = false;
    let scroll = window.pageYOffset || document.documentElement.scrollTop
    document.querySelector(".scroll").innerText = parseInt(scroll);
    let scrollTop = window.innerHeight
    let section1 = document.querySelector("#section1")
    let section2 = document.querySelector("#section2")

    let footer = document.querySelector("footer")
    let section2Top = section2.offsetTop






    didScroll = false;



    if (scroll > 0) {
        gsap.to("#section1", { y: -(scroll) / 3 })
        gsap.to("#section2", { y: -(scroll) / 3 })
        gsap.to("footer", { y: -(scroll) / 3 })

    }


    if (scroll > 0 && scroll < scrollTop) {
        let tl = gsap.timeline();
        gsap.to(".main-title span:nth-child(1)", { y: -(scroll) / 10 })
        gsap.to(".main-title span:nth-child(3)", { y: -(scroll / 8) })
        gsap.to(".main-title span:nth-child(5)", { y: -(scroll / 5) })
        gsap.to("nav", { y: -(scroll) / 10 })


    }




    if (scroll > document.getElementById("section1").offsetTop + 500) {
        
        //document.getElementById("section2").style.backgroundColor = "red"
        let tll = gsap.timeline();
         projectLiOne.classList.add("active")
        gsap.to(".project-wrap > li:nth-child(1) > .project-img > img", { opacity: 1 , y: 0, stagger: 0.1, rotation: 0, duration: 0.1 });
        setTimeout(() => {
            let tl = gsap.timeline();
            tl.to(".project-wrap > li:nth-child(1) > .project-img .splitText", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });
        }, 1000)
  
    }

    if (scroll > document.getElementById("section1").offsetTop + 800) {
        //document.getElementById("section2").style.backgroundColor = "red"
        let tll = gsap.timeline();
        projectLiTwo.classList.add("active")
        gsap.to(".project-wrap > li:nth-child(2) > .project-img > img", { opacity: 1 , y: 0, stagger: 0.1, rotation: 0, duration: 0.1 });
  

    }
    if (scroll > document.getElementById("section1").offsetTop + 1100) {
        //document.getElementById("section2").style.backgroundColor = "red"
        let tll = gsap.timeline();
        projectLiThree.classList.add("active")
        gsap.to(".project-wrap > li:nth-child(3) > .project-img > img", { opacity: 1 , y: 0, stagger: 0.1, rotation: 0, duration: 0.1 });
  


    }

    document.querySelectorAll(".splitText").forEach(elem => {
        console.log(elem)
        let splitText = elem.innerText;
        let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
        splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
        elem.innerHTML = splitWrap;
        elem.setAttribute("aria-label", splitText);
    });
    
    




    let footerButton = footer.querySelector(".button-box")
    let sec1Button = section1.querySelector(".button-box")

    function buttonMove(top) {
        window.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth'
        })
    }


    footerButton.addEventListener("click", function () { buttonMove(0) })
    // sec1Button.addEventListener("click", function () { buttonMove(footerTop) })






}
window.addEventListener("scroll", scrollProgress);





