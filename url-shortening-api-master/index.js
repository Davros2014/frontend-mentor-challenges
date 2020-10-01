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

// define variables for link & error
let input = "";
let error = "";
// let errMess = document.querySelector(".error");

const shortenBtn = document.querySelector(".shortenItButton");

// error handling
const addError = message => {
    const errorMessage = `<p class="error">${message}</p>`;
    document
        .querySelector(".inputErrorContainer")
        .insertAdjacentHTML("beforeend", errorMessage);
    document.querySelector(".inputField").classList.add("errorFocus");
};
const removeError = () => {
    let errorFocus = document.querySelector(".inputField");
    if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
        errorFocus.classList.remove("errorFocus");
    }
};

///////////////////////////////////////////
// GET INPUT FROM USER & MAKE API CALL
///////////////////////////////////////////

shortenBtn.addEventListener("click", event => {
    event.preventDefault();
    if (document.querySelector(".error")) {
        removeError();
    }
    let userInput = document.querySelector("input[name='submission']").value;
    shortenInput(userInput);
    document.querySelector("input[name='submission']").value = "";
});

// check url validity
const isValidURL = str => {
    const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // fragment locator
    return !!pattern.test(str);
};

async function shortenInput(input) {
    // prevent empty input
    if (input === "") {
        error = "Please add a link";
        addError(error);
        return;
    }
    // if input is not a valid url
    if (!isValidURL(input)) {
        error = "Please add a valid link, dude";
        addError(error);
        return;
    }
    // api call
    try {
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: input })
        };
        const response = await fetch("https://rel.ink/api/links/", options);
        const data = await response.json();
        makeShorterLink(input, data.hashid);
    } catch (err) {
        console.log(err);
        error = "Sorry, an error occurred, please try again";
        addError(error);
    }
}

// 1/ create short link
const makeShorterLink = (oldLink, hashId) => {
    var shortLink = `https://rel.ink/${hashId}`;
    let linkData = { oldLink, shortLink };
    getLocalStorage(linkData);
};

// 2/ store new items
const getLocalStorage = newItem => {
    let items = get(); // check local storage for links
    items = [...items, newItem]; // add new links to existing links
    // console.log("items", items);
    localStorage.setItem("items", JSON.stringify(items)); // send to local storage
    getLinks(); // update visible short links
};

// get links from local storage
const get = () => {
    let items = localStorage.getItem("items");
    items == null ? (items = []) : (items = JSON.parse(items));
    return items;
};

// display Shortened Links
const markupContainer = document.querySelector(".shortLinksSection");
const showShortLinks = (link, shortLink) => {
    const shortLinksMarkup = `
    <div class="shorterLinksContainer">
        <a href="${link}" class="originalLink">${link}</a>
        <div class="copyBtnContainer">
            <a href="${shortLink}" id="shortLink" class="itemShortlink">${shortLink}</a>
            <button id="copy" class="copyBtn">Copy</button>
        </div>
    </div>
    `;
    markupContainer.insertAdjacentHTML("afterbegin", shortLinksMarkup);
};
//onclick="copyIt()"
function getLinks() {
    // need to remove element from dom and replace with new markup
    // get items from storage and repopulate the dom with data
    markupContainer.innerHTML = "";
    let items = get();
    items.map(newLink => {
        showShortLinks(newLink.oldLink, newLink.shortLink);
    });
    addCopyBtn();
}

const addCopyBtn = () => {
    let copyButton = document.querySelectorAll("#copy");
    copyButton.forEach(copyButton =>
        copyButton.addEventListener("click", copyIt)
    );
};

function copyIt(event) {
    // copy link
    let textarea = document.createElement("textarea");
    textarea.value = event.target.previousElementSibling.innerText; // value of text area = value of #shortLink
    console.log("textarea.value", textarea.value);

    document.body.appendChild(textarea); // append textarea to html document
    textarea.select(); // select textarea contents
    document.execCommand("copy");
    document.body.removeChild(textarea); // after copy to clipboard > remove textarea from dom

    event.target.innerHTML = "Copied";
    event.target.classList.add("copied");
    setTimeout(() => {
        event.target.innerHTML = "Copy";
        event.target.classList.remove("copied");
    }, 2000);
}

// retrieve links from local storage on page load
getLinks();
