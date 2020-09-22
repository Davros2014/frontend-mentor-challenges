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
