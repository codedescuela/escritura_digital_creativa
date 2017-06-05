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

    yDiv = height / 12;

    strokeWeight(1);

    textSize(fontSize);

    //text font
    noStroke();
    textFont("Didot Regular");

    text("> ", xPos, 0);

    text("> " + "título = taller de escritura digital creativa", xPos, 1*yDiv);

    text("> " + "área = letras + programación ", xPos, 2*yDiv);

    text("> " + "contenidos = programación, python, texto generativo", xPos, 3*yDiv);

    text("> " + "requisitos = saber leer y hacer click", xPos, 4*yDiv);

    text("> " + "duración = 4 sesiones, miércoles julio 2017", xPos, 5*yDiv);

    text("> " + "horario = 7:30pm - 10:30pm", xPos, 6*yDiv);

    text("> " + "precio = $50.000, $20.000 estudiantes, incluye wifi y once", xPos, 7*yDiv);

    text("> " + "cupos = 5 personas", xPos, 8*yDiv);

    text("> " + "organización = http://codedescuela.cl", xPos, 9*yDiv);

    text("> " + "profesor = http://montoyamoraga.io", xPos, 10*yDiv);

    text("> " + "inscripciones y preguntas = aaron@codedescuela.cl", xPos, 11*yDiv);

    //restore previous drawing mode
    pop();

}
