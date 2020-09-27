if (window.innerWidth <= 999) {
    document.querySelector(".desktopNav").id = "mobileNav";
}
function addRemoveClassOnScreenSize() {
    if (window.innerWidth <= 999) {
        document.querySelector(".desktopNav").id = "mobileNav";
    } else if (window.innerWidth > 1000) {
        document.querySelector(".desktopNav").removeAttribute("id");
    }
}
window.addEventListener("resize", addRemoveClassOnScreenSize);

function toggleIt() {
    document.getElementById("mobileNav").classList.toggle("active");
}
