( function (window){
  var byeJ = {};
  var bye = "Good Bye";

  byeJ.speak = function (name){
    console.log(bye + " " + name);
  }

  window.byeJ = byeJ;

}) (window);