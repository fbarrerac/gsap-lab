gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,

    },
    x: 450,
    rotation: 360,
    borderRadius: "50%",
    backgroundColor: "#58a6ff"
});
