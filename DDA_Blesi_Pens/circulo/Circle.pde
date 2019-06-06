class Circle {

  Circle(int r,int xc,int yc){
    int pk=0;
    int x=0;
    int y=0;
    pk = 3 - 2*r;
    y = r;
    print(x, y, xc, yc);
    while (x < y) {
      if (pk <= 0) {
        pk = pk + (4*x) + 6;
        print(++x, y, xc, yc);
      } else {
        pk = pk + (4*(x-y)) + 10;
        print(++x, --y, xc, yc);
      }
    }
  }

  void print(int x, int y, int xc, int yc) {
    //octeto
    point(x+xc, y+yc);
    point(-x+xc, y+yc);
    point(x+xc, -y+yc);
    point(-x+xc, -y+yc);
    point(y+xc, x+yc);
    point(y+xc, -x+yc);
    point(-y+xc, x+yc);
    point(-y+xc, -x+yc);
  }
}
