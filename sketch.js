/*
 *
 * METRO CDMX
 * Área Cercana (Diciembre 2017)
 * Klustera
 * Adrian Santuario
 *
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var points = [];
var triangles = [];
var pointsL1 = [];

// Background
var backgroundImage;


// Font
var geoMidFont
var geoSmallFont;

/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {
  // Backgrund
  backgroundImage = loadImage("assets/images/CDMX_Template.png");


  // Fuemtes
  geoMidFont = loadFont('assets/fonts/Geogtq-Md.otf');
  geoSmallFont = loadFont('assets/fonts/Geogtq-Ul.otf');
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetVoronoi();
  initializeVoronoi();
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  initialize();
}

function draw() {

  
  clear();
  drawBackground();
  drawVoronoi();
  
  drawHeader();
  drawInfo();
}

/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */

function initialize() {


  initializeMetroLines();
  initializeHeader();
  initializeInfo();
  initializeBackground();
  initializeVoronoi();

}


/*
 *****************************************
 *****************************************
 * BACKGROUND METHODS
 *****************************************
 *****************************************
 */


function initializeBackground() {


}


function drawBackground() {
  var correctionX = (windowWidth / 2) - (backgroundImage.width / 2);
  var correctionY = (windowHeight / 2) - (backgroundImage.height / 2);
  image(backgroundImage, correctionX, correctionY);

}

/*
 *****************************************
 *****************************************
 * HEADER METHODS
 *****************************************
 *****************************************
 */


function initializeHeader() {


}

function drawHeader() {

  fill(0);
  textAlign(LEFT, TOP);
  noStroke();
  //Title
  textFont(geoMidFont);
  textSize(30);
  text("Metro CDMX", 30, 20);

  //Subtitle
  textFont(geoSmallFont);
  textSize(20);
  text("Distribución de zonas dependiendo su cercanía a alguna estación del Metro", 30, 60, (windowWidth / 2) - 50, windowHeight);
}

/*
 *****************************************
 *****************************************
 * INFO METHODS
 *****************************************
 *****************************************
 */
 
 function initializeInfo() {


}

function drawInfo() {
  
  
}
 

/*
 *****************************************
 *****************************************
 * VORONOI METHODS
 *****************************************
 *****************************************
 */


function resetVoronoi() {

  if (points.length > 0) {
    points.length = 0;
  }

  if (triangles.length > 0) {
    triangles.length = 0;
  }


}

function initializeVoronoi() {


  points[0] = new Point(0, 0);
  points[1] = new Point(windowWidth, 0);
  points[2] = new Point(0, windowHeight);
  points[3] = new Point(windowWidth, windowHeight);


  triangles[0] = new Triangle(0, 1, 2);
  points[0].triangles.push(0);
  points[1].triangles.push(0);
  points[2].triangles.push(0);
  triangles[1] = new Triangle(1, 2, 3);
  points[1].triangles.push(1);
  points[2].triangles.push(1);
  points[3].triangles.push(1);


  for (var i = 0; i < pointsL1.length; i++) {
    addPoint(windowWidth / 2 - pointsL1[i].x, windowHeight / 2 - pointsL1[i].y);
  }

}


function drawVoronoi() {

  //background(100);

  stroke(0);
  //strokeWeight(3);
  for (var i = 0; i < points.length; i++) {
    points[i].draw();
  }

  strokeWeight(1);
  //fill(255, 100);
  for (var i = 0; i < triangles.length; i++) {
    triangles[i].draw();
  }


}

function dist2(A, B) {
  var Ax = A.x - B.x;
  var Ay = A.y - B.y;
  return Ax * Ax + Ay * Ay;
}

function addPoint(x, y) {
  points.push(new Point(x, y));
  var t = [];
  var edgeA = [];
  var edgeB = [];
  for (var i = triangles.length - 1; i >= 0; i--) {
    if (dist2(points[points.length - 1], triangles[i].circumcircle()) < triangles[i].radius()) {
      t.push(i);
      for (var j = 0; j < triangles[i].vert.length; j++)
        for (var k = 0; k < points[triangles[i].vert[j]].triangles.length; k++)
          if (points[triangles[i].vert[j]].triangles[k] == i) {
            points[triangles[i].vert[j]].triangles.splice(k, 1);
            break;
          }
    }
  }

  for (var i = 0; i < t.length; i++) {
    edgeA.push(triangles[t[i]].vert[0]);
    edgeB.push(triangles[t[i]].vert[1]);

    edgeA.push(triangles[t[i]].vert[1]);
    edgeB.push(triangles[t[i]].vert[2]);

    edgeA.push(triangles[t[i]].vert[2]);
    edgeB.push(triangles[t[i]].vert[0]);
  }

  for (var i = edgeA.length - 1; i >= 0; i--) {
    for (var j = edgeA.length - 1; j > i; j--) {
      if ((edgeA[i] == edgeA[j] && edgeB[i] == edgeB[j]) || (edgeA[i] == edgeB[j] && edgeB[i] == edgeA[j])) {
        edgeA.splice(j, 1);
        edgeB.splice(j, 1);
        edgeA.splice(i, 1);
        edgeB.splice(i, 1);
        break;
      }
    }
  }

  for (var i = 0; i < edgeA.length; i++) {
    if (i < t.length) {
      triangles[t[i]] = new Triangle(edgeA[i], edgeB[i], points.length - 1);
      points[edgeA[i]].triangles.push(t[i]);
      points[edgeB[i]].triangles.push(t[i]);
      points[points.length - 1].triangles.push(t[i]);
      continue;
    }
    triangles.push(new Triangle(edgeA[i], edgeB[i], points.length - 1));
    points[edgeA[i]].triangles.push(triangles.length - 1);
    points[edgeB[i]].triangles.push(triangles.length - 1);
    points[points.length - 1].triangles.push(triangles.length - 1);
  }
}

function convexHull(p) {
  if (p.length < 4) return p;
  for (var i = 1; i < p.length; i++) {
    if (p[0].y > p[i].y)
      sw(p, 0, i);
  }

  for (var j = 0; j < p.length; j++) {
    var record = 4;
    for (var i = j + 1; i < p.length; i++) {
      var angl = Angle(p[j], p[i]);
      //print(angl);
      if (angl < record) {
        sw(p, j + 1, i);
        record = angl;
      }
    }
  }

  return p;
}

function sw(ar, i, j) {
  var A = ar[i];
  ar[i] = ar[j];
  ar[j] = A;
}

function Angle(A, B) {
  return createVector(A.x, A.y).sub(createVector(B.x, B.y)).heading();
}

/*
 *****************************************
 *****************************************
 * METRO LINES METHODS
 *****************************************
 *****************************************
 */


function initializeMetroLines() {

  //Line 1
  pointsL1.push(createVector(98, 197));
  pointsL1.push(createVector(-25, -97));
}



/*
 *****************************************
 *****************************************
 * UI METHODS
 *****************************************
 *****************************************
 */

function keyPressed() {


  return false;
}

function mouseMoved() {
  var normalizedX = map(mouseX, 0, windowWidth, 0, 1);
  //print(normalizedX);
}


function mouseClicked() {
  //addPoint(mouseX,mouseY);
  print(((windowWidth / 2) - mouseX) + " :: " + mouseX + " , " + ((windowHeight / 2) - mouseY) + " :: " + mouseY);


}