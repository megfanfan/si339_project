// menu
document.querySelector("#menu").addEventListener("click", function() {
    document.getElementById("nav-links").style.display = "flex";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "inline";
});
document.querySelector("#close").addEventListener("click", function() {
    document.getElementById("nav-links").style.display = "none";
    document.getElementById("menu").style.display = "inline";
    document.getElementById("close").style.display = "none";
});




