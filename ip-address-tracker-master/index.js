console.log("yo");

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function() {
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        console.log("success!", xhr);
    } else {
        // This will run when it's not
        console.log("The request failed!");
    }

    // This will run either way
    // All three of these are optional, depending on what you're trying to do
    console.log("This always runs...");
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();

// or using fetch

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        // The API call was successful!
        console.log("success!", response);
    })
    .catch(function(err) {
        // There was an error
        console.warn("Something went wrong.", err);
    });

const getDataButton = document.querySelector("searchButton");
getDataButton.addEventListener('click', e => {
    fetch('https://geo.ipify.org/api/v1?apiKey=at_IfnfIuSXWZzJJmnKxnQsGKHGdcAA0&ipAddress=8.8.8.8
', {
    mode: 'no-cache'
   })
    .then(response => response.json())
    .then(data => {
      data.filter(key => {
    	  let quote = document.getElementById('quote')
          let author = document.getElementById('author')
     	  quote.innerHTML = key.content
          author.innerHTML = key.title
      })
    })
    .catch(err => console.error(err))



let secrets = require("./secrets");

    const getDataButton = document.querySelector("searchButton");
    getDataButton.addEventListener('click', e => {
        var ip = "8.8.8.8";
    var api_key = secrets.API_KEY;
    $(function () {
       $.ajax({
           url: "https://geo.ipify.org/api/v1",
           dataType: "jsonp",
           data: {apiKey: api_key, ipAddress: ip},
           success: function(data) {
               $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
           }
       });
    });
        .catch(err => console.error(err))
