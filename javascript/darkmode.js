// This js file is for dark mode, it needs to be imported into every page.
function myFunction() {
    let element = document.body;
    element.classList.toggle("Dark_Mode");
    document.getElementById("p").style.color = "blue";
    document.getElementsByTagName("p1").style.color = "red";
 }