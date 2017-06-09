var myFont;

function preload() {
  myFont = loadFont('./assets/inconsolata.otf');
}

function setup() {
  createCanvas(1920, 1080);
  //background(255, 229, 234);
  background(0);

  drawText();
}

function draw() {

}

function drawText() {

    //save current drawing mode
    push();

    var blue = color(9, 30, 191);
    var green = color(50,255, 50);

    //blue
    //fill(blue);
    //stroke(blue);

    fill(green);
    stroke(green);

    textAlign(LEFT);

    fontSize = 65;

    xPos = 1 * width/50;

    yDiv = height / 8;

    strokeWeight(1);

    textSize(fontSize);

    //text font
    noStroke();
    //textFont("Didot Regular");

    textFont(myFont);

    text("> ", xPos, 0);

    text("> " + "taller de escritura digital creativa", xPos, 1*yDiv);

    text("> " + "para principiantes, sin requisitos previos", xPos, 2*yDiv);

    text("> " + "requisitos son saber leer y hacer click", xPos, 3*yDiv);

    text("> " + "los 4 miércoles de julio 2017, 7:30pm-10:30pm", xPos, 4*yDiv);

    text("> " + "$50.000 / $20.000 estudiantes", xPos, 5*yDiv);

    text("> " + "organiza http://codedescuela.cl", xPos, 6*yDiv);

    text("> " + "profesor http://montoyamoraga.io", xPos, 7*yDiv);

    //restore previous drawing mode
    pop();

}
