class Cuadratica {
  int p0_x;
  int p0_y;
  int p1_x;
  int p1_y;
  int p2_x;
  int p2_y;

  Cuadratica(int p0_x, int p0_y, int p1_x, int p1_y, int p2_x, int p2_y) {
    this.p0_x=p0_x;
    this.p0_y=p0_y;
    this.p1_x=p1_x;
    this.p1_y=p1_y;
    this.p2_x=p2_x;
    this.p2_y=p2_y;
  }
  void print() {
    float x_before=0;
    float y_before=0;
    for (double i=0; i<=100; i++) {
      //println(i/100);
      //=$B$13*POTENCIA(1-A2;2)+2*$B$14*(1-A2)*A2+$B$15*POTENCIA(A2;2)
      double iTemp=i/100;
      //println("----- : "+iTemp);
      //println(pow((float)(1-iTemp),2));
      double x=p0_x*pow((float)(1-iTemp), 2)+2*p1_x*(1-iTemp)*iTemp+p2_x*pow(((float)iTemp), 2);

      //$C$13*POTENCIA(1-A2;2)+2*$C$14*(1-A2)*A2+$C$15*POTENCIA(A2;2)
      double y=p0_y*pow((float)(1-iTemp), 2)+2*p1_y*(1-iTemp)*iTemp+p2_y*pow(((float)iTemp), 2);


      println("step("+iTemp+") ---> x= "+((float)x)+" - y= "+((float)y));
      stroke(0, 0, 0);
      strokeWeight(5);
      point((float)x, (float)y);


      if (x_before!=0 && y_before!=0) {
        stroke(255, 0, 0);
        strokeWeight(1);
        line(x_before, y_before, (float)x, (float)y);
      }

      x_before=(float)x;
      y_before=(float)y;
    }
  }
}