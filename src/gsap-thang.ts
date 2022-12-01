import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

// tl.to(".wrapper", 5, { x: -window.innerWidth }).to(".section2 h2", 5, {
//   x: -window.innerWidth,
// });

// ScrollTrigger.create({
//   animation: tl,
//   trigger: ".wrapper",
//   start: "center center",
//   end: "+=4000",
//   scrub: true,
// });

tl.duration(".wrapper", 5, { x: -window.innerWidth });

ScrollTrigger.create({
  animation: tl,
  trigger: ".wrapper",
  start: "center center",
  end: "+=4000",
  scrub: true,
  pin: true,
});