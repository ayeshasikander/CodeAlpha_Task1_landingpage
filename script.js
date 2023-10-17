var cr = document.querySelector("#cursor")
var blur = document.querySelector("#shade-cursor")
document.addEventListener("mousemove", function (dets) {
    cr.style.left = dets.x + "px"
    cr.style.top = dets.y + "px"
    blur.style.left = dets.x - 100 + "px"
    blur.style.top = dets.y - 100 + "px"
})


gsap.to("#nav-bar", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav-bar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2

    }
})

var tl = gsap.timeline({ repeat: -1 });

tl
    .to(".img-section", {
        width: "100%",
        ease: Expo.easeInOut,
        stagger: 2

    }, 'a')
    .to(".text h1", {
        ease: Expo.easeInOut,
        stagger: 2,
        top: 0
    }, 'a')
    .to(".text h1", {
        delay: 2,
        ease: Expo.easeInOut,
        stagger: 2,
        top: "-100%"
    }, 'a')
    .to("#paragraph p", {
        ease: Expo.easeInOut,
        stagger: 2,
        top: 0
    }, 'a')
    .to("#paragraph p", {
        delay: 2,
        ease: Expo.easeInOut,
        stagger: 2,
        top: "-100%"
    }, 'a')
