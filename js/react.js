let transition = document.querySelector('.transition')
let transitionBox = document.querySelectorAll('.transition .transition-box')


window.onload = function () {
  if (transition.classList.contains('active') == true) {
    fn()
  }
  else if (transition.classList.contains('active') !== true) {
    pageFn()

  }

  function fn() {
    setTimeout(() => {
      window.setTimeout(function () {
        document.querySelectorAll('.transition .transition-box').forEach((boxElem) => {
          boxElem.classList.remove('active')
        })
      }, 1000)
    }, 100);
    setTimeout(() => {
      let tl = gsap.timeline();
      gsap.to(".transition", { opacity: 0 })
      tl.to(".transition", { top: -100 + "%" })
      transition.classList.remove("active");
      tl.to(".transition", { top: 0 + "%" })
      tl.to(".transition", { opacity: 1 })
    }, 2000);
  }

  function pageFn() {
    let locationName;
    document.querySelectorAll("nav >ul > li a").forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        const locationName = elem.getAttribute('href');
        transition.classList.add('active');
        document.querySelectorAll('.transition .transition-box').forEach((boxElem) => {
          boxElem.classList.add('active')
        })
        setTimeout(() => {
          window.location.href = locationName;
        }, 2000);
      });
    });
  };
  pageFn()



};