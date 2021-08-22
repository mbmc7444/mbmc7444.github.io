

    let section1 = document.querySelector("#section1")
    let section2 = document.querySelector("#section2")
    let footer = document.querySelector("footer")
    let section1Top = section1.offsetTop
    let section2Top = section2.offsetTop


setTimeout(() => {
    let tl = gsap.timeline();
    // gsap.to(".sec1 .logo > div:nth-child(2)", { height: "8.5vw" })
    // gsap.to(".sec1 .button .button-box", { height: "2.5vw" })
    // gsap.to(".sec1 .button .button-title", { opacity: 1 })
    gsap.to("nav", { opacity: 1 })
    // tl.to(".sec1 .logo > div:nth-child(1)", { height: "1.5vw" })
    // tl.to(".sec1 .logo > div:nth-child(3)", { height: "8vw" })
    // tl.to(".sec1 .logo > div:nth-child(4)", { height: "5vw" })
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
    // tl.to(".main-title > span:nth-child(7)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });

}, 2000)

setTimeout(function () {
    contents.classList.add("show")
}, 1000)






// let logoAfter = document.querySelector(".logo div:nth-child(4)")
// setTimeout(function () {
//     logoAfter.classList.add('active')
// }, 8000)



document.querySelectorAll(".splitText").forEach(elem => {
    let splitText = elem.innerText;
    let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
    splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
    elem.innerHTML = splitWrap;
    elem.setAttribute("aria-label", splitText);
});













function scrollProgress() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop
        document.querySelector(".scroll").innerText = parseInt(scroll);
        let scrollTop = window.innerHeight


        if (scroll > document.getElementById("section2").offsetTop) {
                //document.getElementById("section2").style.backgroundColor = "red"
                let tll = gsap.timeline();
                tll.to(".inquiries > span:nth-child(1)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.1 });
                tll.to(".inquiries > span:nth-child(2)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.1 });


        }
        if (scroll > document.getElementById("section2").offsetTop) {
                //document.getElementById("section2").style.backgroundColor = "red"
                let tll = gsap.timeline();
                tll.to(".what-work > span:nth-child(1)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.1 });
                tll.to(".what-work > span:nth-child(2)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.1 });

        }



        // if (document.body.scrollHeight == scroll + window.innerHeight) {
        //         setTimeout(() => {
        //                 console.log("this")
        //                 let tl = gsap.timeline();
        //                 gsap.to("footer .logo > div:nth-child(2)", { height: "8.5vw" })
        //                 tl.to("footer .logo > div:nth-child(1)", { height: "1.5vw" })
        //                 tl.to("footer .logo > div:nth-child(3)", { height: "8vw" })
        //                 tl.to("footer .logo > div:nth-child(4)", { height: "5vw" })

        //         }, 1000)
        // }
};

window.addEventListener("scroll", scrollProgress);








// setTimeout(() => {
//     let tl = gsap.timeline();
//     gsap.to(".sec1 .logo > div:nth-child(2)", { height: "8.5vw" })
//     gsap.to(".sec1 .button .button-box", { height: "2.5vw" })
//     gsap.to(".sec1 .button .button-title", { opacity: 1 })
//     gsap.to("nav", { opacity: 1 })
//     tl.to(".sec1 .logo > div:nth-child(1)", { height: "1.5vw" })
//     tl.to(".sec1 .logo > div:nth-child(3)", { height: "8vw" })
//     tl.to(".sec1 .logo > div:nth-child(4)", { height: "5vw" })
// }, 1000)
// setTimeout(() => {
//     let tl = gsap.timeline();

//     tl.to(".main-title > span:nth-child(1)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });
//     tl.to(".main-title > span:nth-child(3)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });
//     tl.to(".main-title > span:nth-child(5)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });
//     tl.to(".main-title > span:nth-child(7)", { opacity: 1, y: 0, stagger: 0.1, rotation: 0, duration: 0.3 });
// }, 1000)






