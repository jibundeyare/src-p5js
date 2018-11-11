var img;

function preload() {
  img = loadImage('assets/0a_b9g-rm6w-austin-neill-160x106.jpg');
}

function setup() {
  // taille du sketch
  // la taille par défaut est 100 x 100
  // ici nous voulons utiliser tout l'espace disponible
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // couleur d'arrière plan
  background(200);

  // afficher une image
  image(img, 200, 100);

  // couleur de remplissage
  fill(200, 50, 50);
  // couleur du trait
  stroke(100);
  // épaisseur du trait
  strokeWeight(1);

  ellipse(50, 50, 80, 80);
  rect(150, 50, 80, 80);

  // couleur de remplissage avec couche alpha (transparence)
  fill(200, 50, 50, 200);
  // couleur du trait avec couche alpha (transparence)
  stroke(100, 200);

  ellipse(75, 75, 80, 80);
  rect(175, 75, 80, 80);

  stroke(0, 0, 255);
  strokeWeight(5);
  line(100, 300, 400, 200);

  stroke(0, 255, 0);
  // le trait suit la position de la souris
  line(mouseX, mouseY, 400, 200);

  strokeWeight(1);
  stroke(0);
  fill(255, 0, 0);

  // sauvegarder l'environnement
  push();
  // déplacer la tête d'écriture
  translate(500, 300);
  // pivoter de 30 degrés
  rotate(radians(30));
  rect(0, 0, 100, 100);
  // restaurer l'environnement
  pop();

  // pas de trait
  noStroke();
  fill(255, 0, 0);
  rect(300, 300, 50, 50);

  stroke(0);
  // pas de remplissage
  noFill();
  rect(360, 300, 50, 50);
}

