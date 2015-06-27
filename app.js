//Problem: We nees a simple way to look at users badge count and Javascript points
//Solution: Use node.js to connect to Treehouse api & get profile info to print out
var http = require("http");
var username = "margeauxspring";

function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badges(s) and "  + points + " points total";
        console.log(message);
}



//Connect to the api url (http://teamtreehouse.com/username.json)

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";
    //read the data
    response.on('data', function (chunk) {
        body += chunk;
    });
    response.on('end', function () {
        var profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.total, profile.points.JavaScript);
//        console.dir(profile);
    //parse the data
    //print the data  
    });
    
});

request.on("error", function(e) {
    console.error(error.message);

});




//printMessage("Chalkers", 1000, 20000000);



