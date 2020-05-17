const tl = gsap.timeline({
   paused: true
});

tl.to(".one", 0.8, {
   y: 6,
   rotation: 45,
   ease: Expo.easeInOut
});

tl.to(".two", 0.8, {
   y: -6,
   rotation: -45,
   ease: Expo.easeInOut,
   delay: -0.8
});

tl.to(".header-menu", 2, {
   top: "0%",
   ease: Expo.easeInOut,
   delay: -2
});

tl.staggerFrom(".header-top__list_item", 2, {
   x: -200,
   opacity: 0,
   ease: Expo.easeOut
}, 0.3);

tl.reverse();

$(document).on("click", ".burger-menu", function () {
   tl.reversed(!tl.reversed());
});

$(document).on("click", ".header-top__list_link", function () {
   tl.reversed(!tl.reversed());
});