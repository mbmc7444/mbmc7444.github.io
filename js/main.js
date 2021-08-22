
$(document).ready(function () {
        let inquiriesSpan = document.querySelectorAll(".inquiries span")

        $(window).scroll(function () {
                var wScroll = $(this).scrollTop();

                setTimeout(() => {
                        if (wScroll >= $(".photo").offset().top - 500) {
                                $(".photo").addClass("show");
                        }
                }, 1000)
                if (wScroll >= $(".about").offset().top - 500) {
                        $(".about").addClass("show");
                }
                if (wScroll >= $("#section2").offset().top) {
                        for (let i = 0; i < inquiriesSpan.length; i++) {
                                let times = 100;
                                let arrs = [100, 300]
                                setTimeout(function () {
                                        inquiriesSpan[i].classList.add('show')
                                }, times + arrs[i])
                        }
                
                }
                if (wScroll >= $("#section2").offset().top) {
                        $(".what-work").addClass("show");
                }
                // if (wScroll >= $(".skill").offset().top - $(window).height() / 2) {
                //         $(".skill .ani").addClass("show");
                // }
        });
        

});

