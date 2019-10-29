regulationVar = 1;
changeBkgColor = 0;

var object1;
var firstRectangle;
var phase = 0;
var endingRect;
var endingMovement = -3000;

var control = 0;



function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);


  object1 = createDiv();
  object1.style("width", "100px");
  object1.style("height", "100px");
  object1.position(width / 2 - 50, height / 2 - 50);
  object1.style("background-color", "red");


}

function draw() {
  // put drawing code here

  //background settings
  var bkgCol1 = color(55, 139, 250);
  var bkgCol2 = color(154, 45, 181);
  if (changeBkgColor > 1) {
    regulationVar = -1
  } else if (changeBkgColor < 0) {
    regulationVar = 1
  };
  changeBkgColor = changeBkgColor + 0.01 * regulationVar;
  background(lerpColor(bkgCol1, bkgCol2, changeBkgColor));

  object1.mouseClicked(action);

  if (phase == 5 && control < 190) {
    control += 1
    endingMovement += 15;
    endingRect.position(endingMovement, -100);

  }



}

function action() {
  if (phase == 0) {
    object1.style("border-radius", "50px");
    phase = 1;
  } else if (phase == 1) {
    object1.style("border-radius", "10px");
    object1.addClass("rotate-center");
    phase = 2;
  } else if (phase == 2) {
    object1.removeClass("rotate-center");
    object1.addClass("exit");
    phase = 3
  } else if (phase == 3) {
    object1.removeClass("exit");
    object1.style("background-color", "yellow");
    object1.style("border-radius", "50px");
    object1.addClass("lastOne");
    phase = 4;
  } else if (phase == 4) {
    theEnd();
    phase = 5;
    setTimeout(function() {
      object1.show();
      object1.style("z-index", "10");
      setTimeout(function() {
        object1.hide();
      }, 2000)
    }, 3000)
  }
}


function theEnd() {
  object1.hide();
  console.log("green");
  angleMode(DEGREES);
  rotate(90);
  endingRect = createDiv();
  endingRect.position(-3100, -100);
  endingRect.style("width", "3000px");
  endingRect.style("height", "2000px");
  endingRect.style("background-color", "black");


};
