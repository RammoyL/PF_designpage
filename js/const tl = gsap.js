const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.utils.toArray(".layer").forEach(layer => {
    const speed = layer.dataset.speed;
    const movement = -(layer.offsetHeight * speed)
    tl.to(layer, {y:movement,ease: "none"},0)
});

let header = document.getElementById('header');

document.addEventListener('scroll', function() {
// Get scroll position
let scrollPosition = window.pageYOffset;

// Calculate whether the scroll it 350px or not then set the opacity to face the header out
if (scrollPosition <= 350) {
header.style.opacity = 1 - scrollPosition / 350;
} else {
header.style.opacity = 0;
}

});