
function secExpFn(target1, target2, current) {
    if (didScroll = true) {
        gsap.to(target1, { marginLeft: current })
        gsap.to(target2, { marginLeft: -current })
    }

}







function scrollProgress() {
    let didScroll = false;
    let scroll = window.pageYOffset || document.documentElement.scrollTop
    document.querySelector(".scroll").innerText = parseInt(scroll);
    let scrollTop = window.innerHeight
    let section1 = document.querySelector("#section1")

    let footer = document.querySelector("footer")

    let section3Top = section3.offsetTop






    didScroll = false;



    if (scroll > 0) {
        gsap.to("#section1", { y: -(scroll) / 3 })
        gsap.to("footer", { y: -(scroll) / 3 })

    }


    if (scroll > 0 && scroll < scrollTop) {
        let tl = gsap.timeline();



    }



    if (scroll > section3Top) {
        let tl = gsap.timeline();


    }



    // }
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



}
window.addEventListener("scroll", scrollProgress);









let section1 = document.querySelector("#section1")

let footer = document.querySelector("footer")
let section1Top = section1.offsetTop



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










document.querySelectorAll(".splitText").forEach(elem => {
let splitText = elem.innerText;
let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
elem.innerHTML = splitWrap;
elem.setAttribute("aria-label", splitText);
});





























