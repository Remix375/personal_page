
const light = document.getElementById("light");
const cursor = document.getElementById("cursor");


let first = true;

document.addEventListener('mousemove', function(x) {
    if (first) {
        light.style.top = `${x.clientY}px`;
        light.style.left = `${x.clientX}px`;

        cursor.style.top = `${x.clientY}px`;
        cursor.style.left = `${x.clientX}px`;

        light.animate({opacity: "1"}, {duration: 2000, fill: "forwards"});
        cursor.animate({opacity: "1"}, {duration: 1000, fill: "forwards"})
        first = false;
    }
    else {
        light.animate({top: `${x.clientY}px`, left: `${x.clientX}px`}, {duration: 1000, fill: "forwards"});
        cursor.animate({top: `${x.clientY}px`, left: `${x.clientX}px`}, {duration: 0, fill: "forwards"});
    }

});



