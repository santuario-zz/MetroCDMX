var Triangle = function(A, B, C) {
  this.vert = [A, B, C];
  this.center = undefined;
  this.r = 0;
}

Triangle.prototype.circumcircle = function() {
  if (this.center == undefined) {
    this.CalcCircumcircle();
  }
  return this.center;
}

Triangle.prototype.radius = function() {
  if (this.r == undefined) {
    this.CalcCircumcircle();
  }
  return this.r;
}

Triangle.prototype.CalcCircumcircle = function() {
  var dA, dB, dC, aux1, aux2, div;

  dA = points[this.vert[0]].x * points[this.vert[0]].x + points[this.vert[0]].y * points[this.vert[0]].y;
  dB = points[this.vert[1]].x * points[this.vert[1]].x + points[this.vert[1]].y * points[this.vert[1]].y;
  dC = points[this.vert[2]].x * points[this.vert[2]].x + points[this.vert[2]].y * points[this.vert[2]].y;

  aux1 = (dA * (points[this.vert[2]].y - points[this.vert[1]].y) + dB * (points[this.vert[0]].y - points[this.vert[2]].y) + dC * (points[this.vert[1]].y - points[this.vert[0]].y));
  aux2 = -(dA * (points[this.vert[2]].x - points[this.vert[1]].x) + dB * (points[this.vert[0]].x - points[this.vert[2]].x) + dC * (points[this.vert[1]].x - points[this.vert[0]].x));
  div = (2 * (points[this.vert[0]].x * (points[this.vert[2]].y - points[this.vert[1]].y) + points[this.vert[1]].x * (points[this.vert[0]].y - points[this.vert[2]].y) + points[this.vert[2]].x * (points[this.vert[1]].y - points[this.vert[0]].y)));
  this.center = createVector(aux1 / div, aux2 / div);
  var Ax = points[this.vert[0]].x - this.center.x;
  var Ay = points[this.vert[0]].y - this.center.y;
  this.r = Ax * Ax + Ay * Ay;
}

Triangle.prototype.draw = function() {
  /*noFill();
  strokeWeight(1);
  stroke(0, 100);
  triangle(points[this.vert[0]].x, points[this.vert[0]].y, points[this.vert[1]].x, points[this.vert[1]].y, points[this.vert[2]].x, points[this.vert[2]].y);
  */
  //noFill();
  //stroke(255,0,0);
  //ellipse(this.circumcircle().x,this.circumcircle().y,2*sqrt(this.r),2*sqrt(this.r));
}


