
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
    let section2 = document.querySelector("#section2")
    let section3 = document.querySelector("#section3")

    let footer = document.querySelector("footer")
    let section2Top = section2.offsetTop
    let section3Top = section3.offsetTop
    let footerTop = footer.offsetTop






    didScroll = false;



    if (scroll > 0) {
        gsap.to("#section1", { y: -(scroll) / 3 })
        gsap.to("#section2", { y: -(scroll) / 3 })
        gsap.to("#section3", { y: -(scroll) / 3 })
        gsap.to("footer", { y: -(scroll) / 3 })

    }


    if (scroll > 0 && scroll < scrollTop) {
        let tl = gsap.timeline();
        gsap.to(".main-title span:nth-child(1)", { y: -(scroll) / 10 })
        gsap.to(".main-title span:nth-child(3)", { y: -(scroll / 8) })
        gsap.to(".main-title span:nth-child(5)", { y: -(scroll / 5) })
        // gsap.to(".main-title span:nth-child(7)", { y: -(scroll) / 3.5 })
        // gsap.to(".sec1 .logo", { y: -(scroll) / 10 })
        gsap.to("nav", { y: -(scroll) / 10 })
        // gsap.to("#section1 .button", { y: -(scroll) / 3.5 })


    }
    if (scroll > 0) {
        let tl = gsap.timeline();
        // gsap.to(".about", { y: -(scroll) / 25 })
        // gsap.to(".photo", { y: -(scroll) / 18 })
        // gsap.to(".inquiries", { y: -(scroll) / 10 })
        // gsap.to(".what-work", { y: -(scroll) / 18 })
        //  gsap.to(".skill-wrap", { y: -(scroll) / 10 })
        // gsap.to(".sec-explain", { y: -(scroll) / 8 })
        // gsap.to("#section2 .button", { y: -(scroll) / 3.5 })
    }

    // if (scroll > section2Top) {
    //     let tl = gsap.timeline();
    //     gsap.to(".skill-wrap", { y: -(scroll) / 10 })
    // }



    if (scroll > section3Top) {
        let tl = gsap.timeline();
        // gsap.to("footer  .contact-content p", { y: -(scroll) / 60 })
        // gsap.to("footer  .contact-wrap .logo", { y: -(scroll) / 60 })

    }




    // window.addEventListener('resize', function(){
    //     doneResizing()
    // });
    // doneResizing()

    // function doneResizing(){

    //     let scroll = window.pageYOffset || document.documentElement.scrollTop
    //     let mainHeight = document.getElementById('contents').offsetHeight;
    //     let bodyheight = mainHeight - (scroll) / 0.7 + 'px'
    //     let contents = document.getElementById('contents');
    //      contents.style.height = bodyheight;

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
    // sec1Button.addEventListener("click", function () { buttonMove(footerTop) })


}
window.addEventListener("scroll", scrollProgress);





