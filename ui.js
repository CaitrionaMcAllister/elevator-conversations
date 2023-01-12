let path, sizeSlider, densitySlider, angleSlider, noiseControl;

function preload() {
  //preload conversation data
  data = loadJSON("elevatorConversations.json");
}

function setupUI() {

  // Radio Buttons
  path = document.getElementsByName('path');
  coloring = document.getElementsByName('coloring');
  display = document.getElementsByName('display');

  // number of particles on screen (show amount of conversations)
  let conversationsRecorded = 100
  numParticles = conversationsRecorded * 10

  //size (1-10)
  sizeSlider = Math.floor(Math.random() * 10);

  //speed (-0.5 - 0.6)
  speedSlider = Math.random() * 1;
  console.log(speedSlider);
  
  //nosieScale (1 being scribbly and 1000 being straight lines)
  noiseScale = Math.floor(Math.random() * 1000);

  //noise Strength (1 is stright lines and 1500 curved lines)
  noiseStrength = Math.floor(Math.random() * 1500);
}

function clearCanvas() {
  //clear();
  background(51);
}

function numOfParticles() {
  let diff;
  
  if (points.length > numParticles) {
    diff = points.length - numParticles;
    points.splice(0, diff);
  } else if (points.length < numParticles) {
    diff = numParticles - points.length;
    for (let i = 0; i < diff; i++) {
      var x = random(width);
      var y = random(height);
      var color = coloringMethod(x, y);
      points.push(new Particle(x, y, color));
    }
    
  }
}
