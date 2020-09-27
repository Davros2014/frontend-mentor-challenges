// let selector = document.getElementById("mobileNav").classList;
// let selector = document.querySelector("desktopNav").classList;
//

function addRemoveClassOnScreenSize() {
    if (window.innerWidth > 980) {
        console.log("over 980");

        if (
            document
                .querySelector(".desktopNav")
                .classList.contains(".mobileNav")
        ) {
            document
                .querySelector(".desktopNav")
                .classList.remove(".mobileNav");
            console.log("remove mobileNav");
        } else if (window.innerWidth < 980) {
            document.querySelector(".desktopNav").classList.add(".mobileNav");
            console.log("add mobileNav");
        }
    }
}

// function addRemoveClassOnScreenSize() {
//     if (window.innerWidth > 1000) {
//         console.log("over 980");
//         // document.querySelector(".desktopNav").classList.add("bob");
//         console.log("add bob");
//     } else if (window.innerWidth < 1000) {
//         document.querySelector(".desktopNav").classList.remove("bob");
//         console.log("under 980");
//         console.log("remove bob");
//     }
// }

// function addRemoveClassOnScreenSize() {
//     if (window.innerWidth < 1000) {
//         document.querySelector(".desktopNav").id = "mobileNav";
//     } else if (window.innerWidth > 1000) {
//         document.querySelector(".desktopNav").removeAttribute("id");
//     }
// }

function addRemoveClassOnScreenSize() {
    if (window.innerWidth < 1000) {
        document.querySelector(".desktopNav").id = "mobileNav";
    } else if (window.innerWidth > 1000) {
        document.querySelector(".desktopNav").removeAttribute("id");
    }
}
window.addEventListener("resize", addRemoveClassOnScreenSize);

function toggleIt() {
    document.getElementById("mobileNav").classList.toggle("active");
}

// if (window.innerWidth > 980) {
//     console.log("well over 980");
// }
