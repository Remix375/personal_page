function hover_elt() {
    cursor.animate({height: "20px", width: "20px"}, {duration: 200, fill: "forwards"});
}

function stop_hover_elt() {
    cursor.animate({height: "10px", width: "10px"}, {duration: 200, fill: "forwards"});
}


Array.from(document.getElementsByClassName("hover_elt")).forEach(elt => {elt.addEventListener("mouseover", hover_elt);elt.addEventListener("mouseleave", stop_hover_elt)})
