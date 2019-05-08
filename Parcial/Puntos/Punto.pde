class Punto {
  float x1, x2, y1, y2;
  Punto(float _x1, float _y1) {
    this.x1=_x1;
    this.x2=_x1;
    this.y1=_y1;
    this.y2=_y1;
  }
  void print(color c) {
    strokeWeight(5);
    stroke(c); 
    line(x1, y1, x2, y2);
  }
}