var Triangle = function(A,B,C){
  this.vert = [A,B,C];
  this.center = undefined;
  this.r = 0;
}

Triangle.prototype.circumcircle = function(){
  if(this.center == undefined){
    this.CalcCircumcircle();
  } 
  return this.center;
}

Triangle.prototype.radius = function(){
  if(this.r == undefined){
    this.CalcCircumcircle();
  } 
  return this.r;
}

Triangle.prototype.CalcCircumcircle = function(){
  var dA, dB, dC, aux1, aux2, div;
  
  dA = points[this.vert[0]].x * points[this.vert[0]].x + points[this.vert[0]].y * points[this.vert[0]].y;
  dB = points[this.vert[1]].x * points[this.vert[1]].x + points[this.vert[1]].y * points[this.vert[1]].y;
  dC = points[this.vert[2]].x * points[this.vert[2]].x + points[this.vert[2]].y * points[this.vert[2]].y;
  
  aux1 = (dA*(points[this.vert[2]].y - points[this.vert[1]].y) + dB*(points[this.vert[0]].y - points[this.vert[2]].y) + dC*(points[this.vert[1]].y - points[this.vert[0]].y));
  aux2 = -(dA*(points[this.vert[2]].x - points[this.vert[1]].x) + dB*(points[this.vert[0]].x - points[this.vert[2]].x) + dC*(points[this.vert[1]].x - points[this.vert[0]].x));
  div = (2*(points[this.vert[0]].x*(points[this.vert[2]].y - points[this.vert[1]].y) + points[this.vert[1]].x*(points[this.vert[0]].y-points[this.vert[2]].y) + points[this.vert[2]].x*(points[this.vert[1]].y - points[this.vert[0]].y)));
  this.center = createVector(aux1/div,aux2/div);
  var Ax = points[this.vert[0]].x - this.center.x;
  var Ay = points[this.vert[0]].y - this.center.y;
  this.r = Ax*Ax + Ay*Ay;
}

Triangle.prototype.draw = function(){
  noFill();
  strokeWeight(1);
  stroke(0,100);
  triangle(points[this.vert[0]].x,points[this.vert[0]].y,points[this.vert[1]].x,points[this.vert[1]].y,points[this.vert[2]].x,points[this.vert[2]].y);
  //noFill();
  //stroke(255,0,0);
  //ellipse(this.circumcircle().x,this.circumcircle().y,2*sqrt(this.r),2*sqrt(this.r));
}


var Point = function(x,y){
  this.x = x;
  this.y = y;
  this.triangles = [];
  this.cell = [];
}

Point.prototype.draw = function(){
  //stroke(255,0,0);
  //strokeWeight(1);
  //for(var i = 0;i<this.triangles.length;i++){
    //line(this.x,this.y,triangles[this.triangles[i]].circumcircle().x,triangles[this.triangles[i]].circumcircle().y);
    //fill(0);
    //text(this.triangles[i],triangles[this.triangles[i]].circumcircle().x,triangles[this.triangles[i]].circumcircle().y);
  //}
  for(var i = 0;i<this.triangles.length;i++){
    this.cell[i] = createVector(triangles[this.triangles[i]].circumcircle().x,triangles[this.triangles[i]].circumcircle().y);
  }
  this.cell = convexHull(this.cell);
  strokeWeight(2);
	
  //fill(floor(random(255)),floor(random(100,255)),floor(random(255)));
  fill(235,42,95,100);
  stroke(0);
  beginShape();
  if(this.cell.length>=3)
  for(var i = 0;i<this.triangles.length;i++){
    vertex(this.cell[i].x,this.cell[i].y);
  }
  endShape(CLOSE);
  
  noStroke();
  fill(255);
  //text(this.triangles,this.x,this.y);
  strokeWeight(10);
  stroke(0);
  point(this.x,this.y);
}