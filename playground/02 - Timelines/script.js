const tl = gsap.timeline();

tl.from(".card", { scale: 0, opacity: 0, duration: 1 })
  .from(".card-circle", { y: 20, opacity: 0 })
  .from(".card-line", { x: -20, opacity: 0, stagger: 0.2 }) 
  .to(".card-btn", { opacity: 1, y: 0 }, "-=0.3") // El "Position Parameter" (empieza 0.3s antes)
  .to(".card-circle", { scale: 1.2, repeat: 1, yoyo: true });


let button = document.querySelector(".card-btn");
button.addEventListener("click", () => {
  tl.reverse(); // Reproduce la animación en reversa
});
