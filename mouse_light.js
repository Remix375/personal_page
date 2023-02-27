
const light = document.getElementById("light");


document.addEventListener('mousemove', function(x) {

    light.animate({top: `${x.clientY}px`, left: `${x.clientX}px`}, {duration: 1000, fill: "forwards"})
});

