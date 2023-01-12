//speed and density
const points = [];
var numPoints = 10;
var speed;
let density;
let p5Canvas;

//add data variable
var data;

function preload() {
  //preload conversation data
  data = loadJSON("elevatorConversations.json");
}

//colours allocated based on conversations and genre
var colour0 = ["#D5D8DC", "#EAECEE", "#2C3E50", "#566573", "#ABB2B9"];
var colour1 = ["#23231A", "#322F20", "#6A5837", "#AEBD93", "#D7C9AA"];
var colour2 = ["#89023E", "#EA638C", "#FFD9DA", "#5C9EAD", "#326273"];
var colour3 = ["#EE6055", "000B49", "#9B0000", "#FF7272", "#FFB5B5" ];
var colour4 = ["#531CB3", "#944BBB", "#AA7BC3", "#CC92C2", "#DBA8AC"];
var colour5 = ["#A799B7", "#9888A5", "#776472", "#445552", "#294D4A"];
var colour6 = ["#FFC971", "#FFB627", "#FF9505", "#E2711D", "#CC5803"];
var colour7 = ["#214E34", "#5C7457", "#979B8D", "#C1BCAC", "#EFD0CA"];
var colour8 = ["#AAFAC8", "#C7FFED", "#BBC8CA", "#B592A0", "#9C7178"];
var colour9 = ["#FFCDB2", "#FFB4A2", "#E5989B", "#B5838D", "#6D6875"];
var colour10 = ["#003D5B", "#30638E", "#00B1CC", "#87CBAC"];
var colour11 = ["#BDC667", "#77966D", "#626D58", "#544343", "#56282D"];

var colors = colour0;


function setup() {
  //create canvas
  p5Canvas = createCanvas(windowWidth, windowHeight);
  p5Canvas.parent("sketch-holder");
  frameRate(60);
  background("#FDFEFE");
  angleMode(DEGREES);

  //console.log(background);

 
  //noLoop();

  //set parameters and conversation elements

  //picks random genre (1-11)
  let i = Math.floor(Math.random() * data.conversationData.length);
  console.log("genre number", i);

  // show genre title
  let genre = data.conversationData[i].genre;
  console.log("genre title", genre);

  //picks colour according to genre
  let colours = data.conversationData[i].colourPalette;
  console.log("colours", colours);

  //https://htmlcolorcodes.com/color-chart/flat-design-color-chart/

  if (i == 0) {
    colors = colour0;
    background("#808B96");
    console.log("genre colour: black and white");
  } else if (i === 1) {
    colors = colour1;
    background("#6E2C00");
    console.log("genre colour: brown");
  } else if (i === 2) {
    colors = colour2;
    background("#F1948A");
    console.log("genre colour: pink");
  } else if (i === 3) {
    colors = colour3;
    background("#CB4335");
    console.log("genre colour: red");
  } else if (i === 4) {
    colors = colour4;
    background("#76448A");
    console.log("genre colour: purple");
  } else if (i === 5) {
    colors = colour5;
    background("#EBDEF0");
    console.log("genre colour: pale purple");
  } else if (i === 6) {
    colors = colour6;
    background("#F8C471");
    console.log("genre colour: yellow");
  } else if (i === 7) {
    colors = colour7;
    background("#27AE60");
    console.log("genre colour: green");
  } else if (i === 8) {
    colors = colour8;
    background("#E9F7EF");
    console.log("genre colour: pale brown/green");
  } else if (i === 9) {
    colors = colour9;
    background("#FAD7A0");
    console.log("genre colour: pale orange");
  } else if (i === 10) {
    colors = colour10;
    background("#85C1E9");
    console.log("genre colour: blue");
  } else if (i === 11) {
    colors = colour11;
    background("#9A7D0A");
    console.log("genre colour: green/brown");
  } else {
    colors = colour0;
    background("#808B96");
    console.log("we didn't get i between 0 and 11");
  }

  //hex colours used
  console.log("hex colour palette", colors);

  //partcipant count
  let participantCount = data.conversationData[i].participantCount;
  console.log("participant count", participantCount);

  //amount of conversations recorded
  let conversationsRecorded = data.conversationData[i].content.length;
  console.log("converations recorded", conversationsRecorded);

  //picks random conversatiom within genre
  let j = Math.floor(Math.random() * data.conversationData[i].content.length);
  //loads random conversation
  let sentence = data.conversationData[i].content[j];
  console.log("random sentence", sentence);

  //pick last character from sentence selected
  console.log("last character:", sentence[sentence.length - 1]);

  //console log to find if question is asked
  if (sentence[sentence.length - 1] == "?") {
    console.log("question asked");
  }

  //console log to find if exclamation was said
  if (sentence[sentence.length - 1] == "!") {
    console.log("exclamation made");
  }

  //console log to find if awkward silence is made
  if (sentence[sentence.length - 1] == "...") {
    console.log("awkward silence");
  }

  setupUI();
  isLoop = true;
  initSketch();
}

function draw() {
  for (i = 0; i < path.length; i++) {
  
  }

  numOfParticles();

  if ((display_type = "animate")) {
    for (let point of points) {
      point.show();
      point.update();
    }
  }
}

function initSketch() {

  for (let i = 0; i < numParticles; i++) {
    let x = random(width);
    let y = random(height);
    let color = colors[floor(random(colors.length))];
    points.push(new Particle(x, y, color));
  }
  loop();
}

function radioHandler(src) {
  initSketch();
}

function getColorMethod() {
  return coloring_value;
}

function coloringMethod(x, y) {
  var coloring_value = getColorMethod();
  if (coloring_value == "randomColor") {
    return colors[int(random(colors.length))];
  }
  if ((coloring_value = "gridColor")) {
    i = int((x / (width / colors.length + 1)) % colors.length);
    i = constrain(i, 0, colors.length - 1);
    return colors[i];
  }
}
