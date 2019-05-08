
void setup(){
  size(1280,720);
  //bezier(30, 20,  80, 5,  80, 75,  30, 75);
  //bezier(85, 20, 10, 10, 90, 90, 15, 80);
  
  int p0_x=2;
  int p0_y=2;
  int p1_x=2;
  int p1_y=600;
  int p2_x=600;
  int p2_y=600;
  Cuadratica c = new Cuadratica(p0_x,p0_y,p1_x,p1_y,p2_x,p2_y);
  c.print();
  
  
  p0_x=2;
  p0_y=2;
  p1_x=-2;
  p1_y=600;
  p2_x=5;
  p2_y=2;
  int p3_x=600;
  int p3_y=600;
  
  Cubica cu = new Cubica(p0_x,p0_y,p1_x,p1_y,p2_x,p2_y,p3_x,p3_y);
  cu.print();
  
}

void draw(){
  
}