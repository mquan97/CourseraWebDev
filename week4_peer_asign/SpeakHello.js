( function (window){
  var hellooo = {};
  var hello = "Hello";

  hellooo.speak = function (name){
    console.log (hello + " " + name);
  }

  window.hellooo = hellooo;

}) (window);