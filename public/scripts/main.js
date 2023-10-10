var rhit = rhit || {};

/** globals */
rhit.variableName = "";
var controller = new ScrollMagic.Controller();

/** function and class syntax examples */
function stickyNavBar() { // wait for document ready
    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#navbar"})
                    .setPin("#navbar")
                    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                    .addTo(controller);
};


/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
    stickyNavBar();
};

rhit.main();
