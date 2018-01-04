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
var pointsL2 = [];
var pointsL3 = [];
var pointsL4 = [];
var pointsL5 = [];
var pointsL6 = [];
var pointsL7 = [];
var pointsL8 = [];
var pointsL9 = [];
var pointsLA = [];
var pointsLB = [];
var pointsL12 = [];

// Background
var backgroundImage;
var backgroundImageSupport;

// Info
var yearString;


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
  backgroundImageSupport = loadImage("assets/images/CDMX_Template_Support.png");


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
  
  var correctionXS = (windowWidth / 2) - (backgroundImageSupport.width / 2) - (windowWidth / 10);
  var correctionYS = (windowHeight / 2) - (backgroundImageSupport.height / 2) + (windowHeight / 5);
  
  image(backgroundImageSupport, correctionXS, correctionYS);

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

  yearString = "1965";
}

function drawInfo() {


  fill(200);
  rect(30, windowHeight - 30, windowWidth - 60, 6);
  fill(20);


  var rectW = mouseX;

  if (rectW < 30) {
    rectW = 0;
  } else if (rectW > windowWidth - 30) {
    rectW = windowWidth - 60;
  } else {
    rectW = rectW - 30;
  }

  yearString = floor(map(rectW, 0, windowWidth - 60, 1965, 2018)).toString();

  textFont(geoMidFont);
  textSize(26);
  text(yearString, rectW, windowHeight - 80);

  rect(30, windowHeight - 30, rectW, 6);

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


  points[0] = new Point(0, 0, 0);
  points[1] = new Point(windowWidth, 0, 0);
  points[2] = new Point(0, windowHeight, 0);
  points[3] = new Point(windowWidth, windowHeight, 0);


  triangles[0] = new Triangle(0, 1, 2);
  points[0].triangles.push(0);
  points[1].triangles.push(0);
  points[2].triangles.push(0);
  triangles[1] = new Triangle(1, 2, 3);
  points[1].triangles.push(1);
  points[2].triangles.push(1);
  points[3].triangles.push(1);


  for (var i = 0; i < pointsL1.length; i++) {
    if (pointsL1[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL1[i].x, windowHeight / 2 - pointsL1[i].y, 1);
    }
  }
  
  for (var i = 0; i < pointsL2.length; i++) {
    if (pointsL2[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL2[i].x, windowHeight / 2 - pointsL2[i].y, 2);
    }
  }
  
  for (var i = 0; i < pointsL3.length; i++) {
    if (pointsL3[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL3[i].x, windowHeight / 2 - pointsL3[i].y, 3);
    }
  }
  
  for (var i = 0; i < pointsL4.length; i++) {
    if (pointsL4[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL4[i].x, windowHeight / 2 - pointsL4[i].y, 4);
    }
  }
  
  for (var i = 0; i < pointsL5.length; i++) {
    if (pointsL5[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL5[i].x, windowHeight / 2 - pointsL5[i].y, 5);
    }
  }
  
  for (var i = 0; i < pointsL6.length; i++) {
    if (pointsL6[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL6[i].x, windowHeight / 2 - pointsL6[i].y, 6);
    }
  }
  
  for (var i = 0; i < pointsL7.length; i++) {
    if (pointsL7[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL7[i].x, windowHeight / 2 - pointsL7[i].y, 7);
    }
  }
  
  for (var i = 0; i < pointsL8.length; i++) {
    if (pointsL8[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL8[i].x, windowHeight / 2 - pointsL8[i].y, 8);
    }
  }
  
  for (var i = 0; i < pointsL9.length; i++) {
    if (pointsL9[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL9[i].x, windowHeight / 2 - pointsL9[i].y, 9);
    }
  }
  
  for (var i = 0; i < pointsLA.length; i++) {
    if (pointsLA[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsLA[i].x, windowHeight / 2 - pointsLA[i].y, 10);
    }
  }
  
  for (var i = 0; i < pointsLB.length; i++) {
    if (pointsLB[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsLB[i].x, windowHeight / 2 - pointsLB[i].y, 11);
    }
  }
  
  for (var i = 0; i < pointsL12.length; i++) {
    if (pointsL12[i].z <= parseInt(yearString)) {
      addPoint(windowWidth / 2 - pointsL12[i].x, windowHeight / 2 - pointsL12[i].y, 12);
    }
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

function addPoint(x, y, id) {
  points.push(new Point(x, y, id));
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
  pointsL1.push(createVector(100, 100, 1972)); //Observatorio
  pointsL1.push(createVector(100, 100, 1970)); //Tacubaya
  pointsL1.push(createVector(100, 100, 1970)); //Juanacatlán
  pointsL1.push(createVector(100, 100, 1969)); //Chapultepec
  pointsL1.push(createVector(100, 100, 1969)); //Sevilla
  pointsL1.push(createVector(100, 100, 1969)); //Insurgentes
  pointsL1.push(createVector(100, 100, 1969)); //Cuauhtémoc
  pointsL1.push(createVector(100, 100, 1969)); //Balderas
  pointsL1.push(createVector(100, 100, 1969)); // Salto del Agua
  pointsL1.push(createVector(100, 100, 1969)); // Isabel la Católica
  pointsL1.push(createVector(100, 100, 1969)); // Pino Suárez
  pointsL1.push(createVector(100, 100, 1969)); // Merced
  pointsL1.push(createVector(100, 100, 1969)); // Candelaria
  pointsL1.push(createVector(100, 100, 1969)); //San Lázaro
  pointsL1.push(createVector(100, 100, 1969)); //Moctezuma
  pointsL1.push(createVector(100, 100, 1969)); // Balbuena
  pointsL1.push(createVector(100, 100, 1969)); //Blvd. Puerto Aéreo
  pointsL1.push(createVector(100, 100, 1969)); // Gómez Farías
  pointsL1.push(createVector(100, 100, 1969)); //Zaragoza
  pointsL1.push(createVector(100, 100, 1984)); // Pantitlán

  //Line 2 
  pointsL2.push(createVector(100, 100, 1984)); //Cuatro Caminos
  pointsL2.push(createVector(100, 100, 1984)); // Panteones
  pointsL2.push(createVector(100, 100, 1970)); //Tacuba
  pointsL2.push(createVector(100, 100, 1970)); // Cuitláhuac
  pointsL2.push(createVector(100, 100, 1970)); // Popotla
  pointsL2.push(createVector(100, 100, 1970)); // Colegio Militar
  pointsL2.push(createVector(100, 100, 1970)); // Normal
  pointsL2.push(createVector(100, 100, 1970)); // San Cosme
  pointsL2.push(createVector(100, 100, 1970)); // Revolución
  pointsL2.push(createVector(100, 100, 1970)); // Hidalgo
  pointsL2.push(createVector(100, 100, 1970)); // Bellas Artes
  pointsL2.push(createVector(100, 100, 1970)); // Allende
  pointsL2.push(createVector(100, 100, 1970)); // Zócalo
  pointsL2.push(createVector(100, 100, 1970)); //Pino Suárez
  pointsL2.push(createVector(100, 100, 1970)); // San Antonio Abad
  pointsL2.push(createVector(100, 100, 1970)); // Chabacano
  pointsL2.push(createVector(100, 100, 1970)); // Viaducto
  pointsL2.push(createVector(100, 100, 1970)); // Xola
  pointsL2.push(createVector(100, 100, 1970)); // Villa de Cortés
  pointsL2.push(createVector(100, 100, 1970)); //Nativitas
  pointsL2.push(createVector(100, 100, 1970)); // Portales
  pointsL2.push(createVector(100, 100, 1970)); // Ermita
  pointsL2.push(createVector(100, 100, 1970)); // General Anaya
  pointsL2.push(createVector(100, 100, 1970)); //Tasqueña

  //Line 3 
  pointsL3.push(createVector(100, 100, 1979)); // Indios Verdes
  pointsL3.push(createVector(100, 100, 1979)); // Deportivo 18 de Marzo
  pointsL3.push(createVector(100, 100, 1979)); // Potrero
  pointsL3.push(createVector(100, 100, 1978)); // La Raza
  pointsL3.push(createVector(100, 100, 1970)); // Tlatelolco
  pointsL3.push(createVector(100, 100, 1970)); //Guerrero
  pointsL3.push(createVector(100, 100, 1970)); // Hidalgo
  pointsL3.push(createVector(100, 100, 1970)); //Juárez
  pointsL3.push(createVector(100, 100, 1970)); //, Balderas
  pointsL3.push(createVector(100, 100, 1970)); // Niños Héroes
  pointsL3.push(createVector(100, 100, 1970)); // Hospital General
  pointsL3.push(createVector(100, 100, 1980)); //Centro Médico
  pointsL3.push(createVector(100, 100, 1980)); //Etiopía-Plaza de la Transparencia
  pointsL3.push(createVector(100, 100, 1980)); // Eugenia
  pointsL3.push(createVector(100, 100, 1980)); // División del Norte
  pointsL3.push(createVector(100, 100, 1980)); // Zapata
  pointsL3.push(createVector(100, 100, 1983)); //Coyoacán
  pointsL3.push(createVector(100, 100, 1983)); //Viveros-Derechos Humanos
  pointsL3.push(createVector(100, 100, 1983)); // Miguel Ángel de Quevedo
  pointsL3.push(createVector(100, 100, 1983)); // Copilco
  pointsL3.push(createVector(100, 100, 1983)); //Universidad

  //Line 4 
  pointsL4.push(createVector(100, 100, 1981)); // Martín Carrera
  pointsL4.push(createVector(100, 100, 1981)); // Talismán
  pointsL4.push(createVector(100, 100, 1981)); // Bondojito
  pointsL4.push(createVector(100, 100, 1981)); // Consulado
  pointsL4.push(createVector(100, 100, 1981)); // Canal del Norte
  pointsL4.push(createVector(100, 100, 1981)); //Morelos
  pointsL4.push(createVector(100, 100, 1981)); // Candelaria
  pointsL4.push(createVector(100, 100, 1982)); // Fray Servando,
  pointsL4.push(createVector(100, 100, 1982)); //Jamaica
  pointsL4.push(createVector(100, 100, 1982)); // Santa Anita

  //Line 5
  pointsL5.push(createVector(100, 100, 1982)); // Politécnico
  pointsL5.push(createVector(100, 100, 1982)); // Instituto del Petróleo
  pointsL5.push(createVector(100, 100, 1982)); // Autobuses del Norte
  pointsL5.push(createVector(100, 100, 1982)); // La Raza
  pointsL5.push(createVector(100, 100, 1982)); //Misterios
  pointsL5.push(createVector(100, 100, 1982)); // Valle Gómez
  pointsL5.push(createVector(100, 100, 1981)); // Consulado
  pointsL5.push(createVector(100, 100, 1981)); // Eduardo Molina
  pointsL5.push(createVector(100, 100, 1981)); // Aragón
  pointsL5.push(createVector(100, 100, 1981)); // Oceanía
  pointsL5.push(createVector(100, 100, 1981)); // Terminal Aérea
  pointsL5.push(createVector(100, 100, 1981)); // Hangares
  pointsL5.push(createVector(100, 100, 1981)); // Pantitlán

  //Line 6
  pointsL6.push(createVector(100, 100, 1983)); // El Rosario
  pointsL6.push(createVector(100, 100, 1983)); // Tezozómoc
  pointsL6.push(createVector(100, 100, 1983)); // UAM-Azcapotzalco
  pointsL6.push(createVector(100, 100, 1983)); // Ferrería/Arena Ciudad de México
  pointsL6.push(createVector(100, 100, 1983)); // Norte 45
  pointsL6.push(createVector(100, 100, 1983)); // Vallejo
  pointsL6.push(createVector(100, 100, 1983)); // Instituto del Petróleo
  pointsL6.push(createVector(100, 100, 1986)); // Lindavista
  pointsL6.push(createVector(100, 100, 1986)); // Deportivo 18 de marzo
  pointsL6.push(createVector(100, 100, 1986)); //La Villa-Basílica
  pointsL6.push(createVector(100, 100, 1986)); // Martín Carrera

  //Line 7
  pointsL7.push(createVector(100, 100, 1988)); // El Rosario
  pointsL7.push(createVector(100, 100, 1988)); // Aquiles Serdán
  pointsL7.push(createVector(100, 100, 1988)); // Camarones
  pointsL7.push(createVector(100, 100, 1988)); // Refinería
  pointsL7.push(createVector(100, 100, 1984)); // Tacuba
  pointsL7.push(createVector(100, 100, 1984)); // San Joaquín
  pointsL7.push(createVector(100, 100, 1984)); // Polanco
  pointsL7.push(createVector(100, 100, 1984)); // Auditorio
  pointsL7.push(createVector(100, 100, 1985)); // Constituyentes
  pointsL7.push(createVector(100, 100, 1985)); //Tacubaya
  pointsL7.push(createVector(100, 100, 1985)); // San Pedro de los Pinos
  pointsL7.push(createVector(100, 100, 1985)); //San Antonio
  pointsL7.push(createVector(100, 100, 1985)); //Mixcoac 
  pointsL7.push(createVector(100, 100, 1985)); //Barranca del Muerto

  //Line 8
  pointsL8.push(createVector(100, 100, 1994)); // Garibaldi-Lagunilla
  pointsL8.push(createVector(100, 100, 1994)); //Bellas Artes
  pointsL8.push(createVector(100, 100, 1994)); // San Juan de Letrán
  pointsL8.push(createVector(100, 100, 1994)); //Salto del Agua
  pointsL8.push(createVector(100, 100, 1994)); //Doctores
  pointsL8.push(createVector(100, 100, 1994)); // Obrera
  pointsL8.push(createVector(100, 100, 1994)); //Chabacano
  pointsL8.push(createVector(100, 100, 1994)); // La Viga
  pointsL8.push(createVector(100, 100, 1994)); // Santa Anita
  pointsL8.push(createVector(100, 100, 1994)); // Coyuya
  pointsL8.push(createVector(100, 100, 1994)); // Iztacalco
  pointsL8.push(createVector(100, 100, 1994)); // Apatlaco
  pointsL8.push(createVector(100, 100, 1994)); //Aculco
  pointsL8.push(createVector(100, 100, 1994)); // Escuadrón 201
  pointsL8.push(createVector(100, 100, 1994)); // Atlalilco
  pointsL8.push(createVector(100, 100, 1994)); // Iztapalapa
  pointsL8.push(createVector(100, 100, 1994)); // Cerro de la Estrella
  pointsL8.push(createVector(100, 100, 1994)); // UAM-I 
  pointsL8.push(createVector(100, 100, 1994)); //Constitución de 1917

  //Line 9 
  pointsL9.push(createVector(100, 100, 1988)); // Tacubaya
  pointsL9.push(createVector(100, 100, 1988)); // Patriotismo
  pointsL9.push(createVector(100, 100, 1988)); // Chilpancingo
  pointsL9.push(createVector(100, 100, 1987)); // Centro Médico
  pointsL9.push(createVector(100, 100, 1987)); // Lázaro Cárdenas
  pointsL9.push(createVector(100, 100, 1987)); //Chabacano
  pointsL9.push(createVector(100, 100, 1987)); // Jamaica
  pointsL9.push(createVector(100, 100, 1987)); //Mixiuhca
  pointsL9.push(createVector(100, 100, 1987)); // Velódromo
  pointsL9.push(createVector(100, 100, 1987)); // Ciudad Deportiva
  pointsL9.push(createVector(100, 100, 1987)); // Puebla
  pointsL9.push(createVector(100, 100, 1987)); //Pantitlán

  //Line A 
  pointsLA.push(createVector(100, 100, 1991)); // Pantitlán
  pointsLA.push(createVector(100, 100, 1991)); //Agrícola Oriental
  pointsLA.push(createVector(100, 100, 1991)); // Canal de San Juan
  pointsLA.push(createVector(100, 100, 1991)); //Tepalcates
  pointsLA.push(createVector(100, 100, 1991)); //  Guelatao
  pointsLA.push(createVector(100, 100, 1991)); // Peñón Viejo
  pointsLA.push(createVector(100, 100, 1991)); // Acatitla
  pointsLA.push(createVector(100, 100, 1991)); // Santa Marta
  pointsLA.push(createVector(100, 100, 1991)); // Los Reyes
  pointsLA.push(createVector(100, 100, 1991)); //La Paz

  //Line B 
  pointsLB.push(createVector(100, 100, 1999)); // Buenavista
  pointsLB.push(createVector(100, 100, 1999)); // Guerrero
  pointsLB.push(createVector(100, 100, 1999)); // Garibaldi-Lagunilla
  pointsLB.push(createVector(100, 100, 1999)); // Lagunilla
  pointsLB.push(createVector(100, 100, 1999)); //Tepito
  pointsLB.push(createVector(100, 100, 1999)); // Morelos
  pointsLB.push(createVector(100, 100, 1999)); //San Lázaro
  pointsLB.push(createVector(100, 100, 1999)); // Ricardo Flores Magón
  pointsLB.push(createVector(100, 100, 1999)); //Romero Rubio
  pointsLB.push(createVector(100, 100, 1999)); // Oceanía
  pointsLB.push(createVector(100, 100, 1999)); // Deportivo Oceanía
  pointsLB.push(createVector(100, 100, 1999)); //Bosque de Aragón
  pointsLB.push(createVector(100, 100, 1999)); // Villa de Aragón
  pointsLB.push(createVector(100, 100, 2000)); // Nezahualcóyotl
  pointsLB.push(createVector(100, 100, 2000)); // Impulsora
  pointsLB.push(createVector(100, 100, 2000)); // Río de los Remedios
  pointsLB.push(createVector(100, 100, 2000)); // Múzquiz
  pointsLB.push(createVector(100, 100, 2000)); // Ecatepec
  pointsLB.push(createVector(100, 100, 2000)); // Olímpica
  pointsLB.push(createVector(100, 100, 2000)); // Plaza Aragón
  pointsLB.push(createVector(100, 100, 2000)); // Ciudad Azteca

  //Line 12
  pointsL12.push(createVector(100, 100, 2012)); // Tláhuac
  pointsL12.push(createVector(100, 100, 2012)); //Tlaltenco
  pointsL12.push(createVector(100, 100, 2012)); // Zapotitlán
  pointsL12.push(createVector(100, 100, 2012)); // Nopalera
  pointsL12.push(createVector(100, 100, 2012)); // Olivos
  pointsL12.push(createVector(100, 100, 2012)); // Tezonco
  pointsL12.push(createVector(100, 100, 2012)); //Periférico Oriente
  pointsL12.push(createVector(100, 100, 2012)); // Calle 11
  pointsL12.push(createVector(100, 100, 2012)); //Lomas Estrella
  pointsL12.push(createVector(100, 100, 2012)); // San Andrés Tomatlán
  pointsL12.push(createVector(100, 100, 2012)); // Culhuacán
  pointsL12.push(createVector(100, 100, 2012)); // Atlalilco
  pointsL12.push(createVector(100, 100, 2012)); //Mexicaltzingo
  pointsL12.push(createVector(100, 100, 2012)); // Ermita
  pointsL12.push(createVector(100, 100, 2012)); // Eje Central
  pointsL12.push(createVector(100, 100, 2012)); // Parque de los Venados
  pointsL12.push(createVector(100, 100, 2012)); //Zapata
  pointsL12.push(createVector(100, 100, 2012)); //Hospital 20 de Noviembre
  pointsL12.push(createVector(100, 100, 2012)); //Insurgentes Sur
  pointsL12.push(createVector(100, 100, 2012)); // Mixcoac


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

  resetVoronoi();
  initializeVoronoi();
  //print(normalizedX);
}


function mouseClicked() {
  //addPoint(mouseX, mouseY,2);
  print(((windowWidth / 2) - mouseX) + " :: " + mouseX + " , " + ((windowHeight / 2) - mouseY) + " :: " + mouseY);


}