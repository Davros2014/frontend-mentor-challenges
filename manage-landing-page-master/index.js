///////////////////////////////////////////
// TOGGLE MOBILE MENU
///////////////////////////////////////////

function toggleIt() {
    document.getElementById("mobileNav").classList.toggle("active");
}

const mobileView = () => {
    document.querySelector(".desktopNav").id = "mobileNav";
};
// add mobile id
if (window.innerWidth <= 999) {
    document.querySelector(".desktopNav").id = "mobileNav";
}
// add & remove mobile id based on screen width
const mobileOrDesktop = () => {
    if (window.innerWidth <= 999) {
        mobileView();
    } else if (window.innerWidth >= 1000) {
        document.querySelector(".desktopNav").removeAttribute("id");
    }
};
window.addEventListener("resize", mobileOrDesktop);
