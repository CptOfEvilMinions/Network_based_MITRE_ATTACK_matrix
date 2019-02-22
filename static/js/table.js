var x = document.getElementsByClassName("technique");

var links = document.querySelectorAll('a');

[].forEach.call(links, function(link) {
    
  link.addEventListener("mouseenter", function() {
    
    var newPreLoadLink = document.createElement("link");
    newPreLoadLink.rel = "prerender";
    newPreLoadLink.href = link.href;
    
    document.head.appendChild(newPreLoadLink);
    
  })
  
});