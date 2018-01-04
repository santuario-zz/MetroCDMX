function Point(_x, _y, _id) {
  this.x = _x;
  this.y = _y;
  this.id = _id;
  this.triangles = [];
  this.cell = [];
  this.currentColor;

  if (this.id == 0) {
    this.currentColor = color(235, 42, 95, 0);
  } else if (this.id == 1) {
    this.currentColor = color(245, 77, 150, random(50, 150));
  } else if (this.id == 2) {
    this.currentColor = color(0, 112, 179, random(50, 150));
  } else if (this.id == 3) {
    this.currentColor = color(182, 156, 52, random(50, 150));
  } else if (this.id == 4) {
    this.currentColor = color(53, 186, 175, random(50, 150));
  } else if (this.id == 5) {
    this.currentColor = color(255, 207, 71, random(50, 150));
  } else if (this.id == 6) {
    this.currentColor = color(251, 0, 31, random(50, 150));
  } else if (this.id == 7) {
    this.currentColor = color(255, 113, 46, random(50, 150));
  } else if (this.id == 8) {
    this.currentColor = color(0, 162, 101, random(50, 150));
  } else if (this.id == 9) {
    this.currentColor = color(105, 39, 38, random(50, 150));
  } else if (this.id == 10) {
    this.currentColor = color(143, 44, 117, random(50, 150));
  } else if (this.id == 11) {
    this.currentColor = color(177, 179, 178, random(50, 150));
  } else if (this.id == 12) {
    this.currentColor = color(196, 156, 83, random(50, 150));
  }



  this.draw = function() {
    //stroke(255,0,0);
    //strokeWeight(1);
    //for(var i = 0;i<this.triangles.length;i++){
    //line(this.x,this.y,triangles[this.triangles[i]].circumcircle().x,triangles[this.triangles[i]].circumcircle().y);
    //fill(0);
    //text(this.triangles[i],triangles[this.triangles[i]].circumcircle().x,triangles[this.triangles[i]].circumcircle().y);
    //}
    for (var i = 0; i < this.triangles.length; i++) {
      this.cell[i] = createVector(triangles[this.triangles[i]].circumcircle().x, triangles[this.triangles[i]].circumcircle().y);
    }
    this.cell = convexHull(this.cell);
    strokeWeight(0.5);


    fill(this.currentColor);
    //fill(floor(random(255)),floor(random(100,255)),floor(random(255)));
    //fill(235,42,95,random(150,255));
    //fill(235,42,95,100);
    //fill(red(this.currentColor), green(this.currentColor), blue(this.currentColor), 255);

    stroke(0);
    beginShape();
    if (this.cell.length >= 3)
      for (var i = 0; i < this.triangles.length; i++) {
        vertex(this.cell[i].x, this.cell[i].y);
      }
    endShape(CLOSE);

    noStroke();
    fill(255);
    //text(this.triangles,this.x,this.y);
    strokeWeight(8);
    stroke(0);
    point(this.x, this.y);
  }



}