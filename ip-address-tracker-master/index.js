let mymap; // initialise map variable
let initialLocation = "195.192.168.206";
let errorMessage =
    "<p class='errorContainer'> The details you have entered are not valid, please try again </p>";
locateByIP(initialLocation);

document.querySelector(".searchButton").addEventListener("click", event => {
    event.preventDefault();
    let userInput = document.querySelector("input[name='ip']").value;
    console.log("userInput", userInput);
    locateByIP(userInput);
    document.querySelector("input[name='ip']").value = "";
    let errMess = document.querySelector(".errorContainer");

    if (errMess) {
        errMess.remove();
    }
    // if (!validateIPaddress(userInput)) {
    //     document.querySelector("input[name='ip']").value = "";
    //     return;
    // }
    // if (userInput === "") {
    //     const error = document.querySelector("errorContainer");
    //     return error.innerHtml(
    //         "Please provide valid IP address or domain name"
    //     );
    // }
});

async function locateByIP(input) {
    let domianInput;
    let ipInput = validateIPaddress(input);
    (input.match(/./g) || []).length !== 3
        ? (domianInput = input)
        : (ipInput = input);

    // api call
    let api_key = "at_IfnfIuSXWZzJJmnKxnQsGKHGdcAA0";
    try {
        const response = await fetch(
            `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ipInput}&domain=${domianInput}`
        );
        const data = await response.json();
        const { city, country, timezone, lat, lng, postalCode } = data.location;
        document.getElementById("ipAddress").innerHTML = data.ip;
        document.getElementById(
            "locationAddress"
        ).innerHTML = `${city}, ${country}<br /> ${postalCode}`;
        document.getElementById(
            "timezoneAddress"
        ).innerHTML = `<span>UTC</span> ${timezone}`;
        document.getElementById("isp").innerHTML = data.isp;

        addToMap(lat, lng);
    } catch (err) {
        document
            .querySelector(".trackerForm")
            .insertAdjacentHTML("afterend", errorMessage);
    }
}

const validateIPaddress = ipaddress => {
    if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            ipaddress
        )
    ) {
        return true;
    }
    alert("You have entered an invalid IP address, please try again");
    return false;
};

const addToMap = (lat, long) => {
    if (mymap != undefined) {
        mymap.remove();
    }
    mymap = L.map("mapid").setView([lat, long], 13);

    L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
            maxZoom: 18,
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1
        }
    ).addTo(mymap);

    var marker = L.marker([lat, long]).addTo(mymap);
};
