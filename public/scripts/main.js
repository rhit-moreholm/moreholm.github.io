// import ScrollMagic from "./ScrollMagic";

var rhit = rhit || {};

/** globals */
rhit.variableName = "";
// var controller = new ScrollMagic.Controller();

// /** function and class syntax examples */
// function stickyNavBar() { // wait for document ready
//     // build scene
//     var scene = new ScrollMagic.Scene({triggerElement: "#navbar"})
//                     .setPin("#navbar")
//                     .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//                     .addTo(controller);
// };

//From: https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.onscroll = function() {stickyNavBar()};

// Get the header
var navBar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navBar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavBar() {
  if (window.scrollY > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}


/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
    // stickyNavBar();
};

rhit.main();
