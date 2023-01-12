class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;

    let i = Math.floor(Math.random() * data.conversationData.length);
    //console.log("genre working",i);

    //size
    this.size = random(1, 4 * sizeSlider);

    //speed
    this.speed = random(-speedSlider, speedSlider);

    //colour
    //this.color = '#D5D8DC';
    //this.color = data.conversationData[i].colourPalette;
    // console.log("this is the color", color);
    this.color = color;

    this.len = 64;
  }

  show() {
    strokeWeight(this.size);
    stroke(this.color);
    point(this.x, this.y);
  }

  update() {
    //theta 600-900
    var theta = noise(this.x / noiseScale, this.y / noiseScale) * noiseStrength;
    this.x += cos(theta) * this.speed;
    this.y += sin(theta) * this.speed;
  }
}
