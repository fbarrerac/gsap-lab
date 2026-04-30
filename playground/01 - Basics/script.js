gsap.to(".box-3", {
    x: 180,
    delay: 1,
    duration: 3,
    backgroundColor: "#ff0055",
    borderRadius: "50%",
    rotation: 360,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"
});


gsap.from(".box-1", {
    y: -200,
    duration: 1.5,
    backgroundColor: "#0066ff",
    delay: 0.5,
    ease: "bounce.out",
    repeat: -1,
});


gsap.from(".box-2", {
    scale: 0,
    rotation: 360,
    duration: 1,
    ease: "back.out(1.7)",
    repeat: -1,
    yoyo: true
});