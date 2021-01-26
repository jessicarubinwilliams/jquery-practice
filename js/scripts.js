$(document).ready(function() {
  const elementArray = ["h1", "p", "img"]
  
  elementArray.forEach(function(element) {
    $(element).click(function() {
      alert("This is a " + element);
    });
  });

  // $("h1").click(function() {
  //   alert("This is a header.");
  // });

  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });

  // $("img").click(function() {
  //   alert("This is an image.");
  // });
});