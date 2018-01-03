function Point(_x, _y, _id) {
  this.x = _x;
  this.y = _y;
  this.id = _id;
  this.triangles = [];
  this.cell = [];
  this.currentColor;

  if (this.id == 0) {
    this.currentColor = color(235, 42, 95, random(50, 200));
  } else if (this.id == 1) {
    this.currentColor = color(42, 235, 95, random(50, 200));
  } else if (this.id == 2) {
    this.currentColor = color(95, 42, 235, random(50, 200));
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
    strokeWeight(2);


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
    strokeWeight(10);
    stroke(0);
    point(this.x, this.y);
  }



}