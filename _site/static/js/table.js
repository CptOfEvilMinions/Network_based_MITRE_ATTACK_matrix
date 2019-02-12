

var url = "threat_actors.json";
var all_actors = []


function get_actors (callback) {
    $.getJSON(url, callback)
};



var y = document.getElementById("threat-actors");
var items = y.getElementsByTagName("li");
console.log(y);





//callback function
get_actors(function(url) {

    all_actors = JSON.parse(url);
    console.log(all_actors)


});

