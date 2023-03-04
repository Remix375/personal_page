let current_lang = "English"



function change_lang(language) {
    if (language === current_lang) {
        return;
    }
    current_lang = language
    Array.from(document.getElementById("language_nav").children).forEach(elt => {
        if (elt.id === `nav_lang_${language}`) {
            elt.animate({"background": "white", "color": "black"}, {duration: 100, fill: "forwards"})
        } else {
            elt.animate({"background": "rgb(8, 0, 117)", "color": "white"}, {duration: 100, fill: "forwards"})
        }
    })
    console.log(`language changing to ${language}`);
    console.log(".");
    console.log("..");
    console.log("...");
}