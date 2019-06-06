class LineDda{    
    constructor(_x1,_y1,_x2,_y2) {
        this.x1 = _x1;
        this.y1 = _y1;
        this.x2 = _x2;
        this.y2 = _y2;        
        this.print();
    }
    print() {
        var ax, ay, x, y, variacion;

        //si la variacion en x es mayor o igual que la variacion en y
        if (Math.abs(this.x2 - this.x1) >= Math.abs(this.y2 - this.y1)) {
            variacion = Math.abs(this.x2 - this.x1);
        } else {
            //si la variacion en y es mayor que la variacion en x
            variacion = Math.abs(this.y2 - this.y1);
        }
        ax = (this.x2 - this.x1) / variacion; //el valor a aumentar en x
        ay = (this.y2 - this.y1) / variacion; //el valor a aumentar en y

        x = this.x1;
        y = this.y1;
        //console.log("res: " + variacion);
        var i = 0;        
        while (i <= variacion){
            //console.log("x:"+x+" - y: "+y);            
            drawOneBlackPixel(gl,x,y);  
            x = x + ax;
            y = y + ay;
            i++;
        }
    }
}

class Circle{  
    constructor(xC,yC,r){
        this.xCentro=xC;
        this.yCentro=yC;
        this.radio=r;
        this.print();
    }
    print(){
        console.log("erda");
        drawOneBlackPixel(gl,this.xCentro,this.yCentro); 
        for(var angulo=0;angulo<=360;angulo++){      
            drawOneBlackPixel(gl,this.xCentro+this.radio*Math.cos(this.degrees_to_radians(-angulo)),
                this.yCentro+this.radio*Math.sin(this.degrees_to_radians(-angulo))); 
        } 
    }
    degrees_to_radians(degrees){
        var pi = Math.PI;
        return degrees * (pi/180);
    }   
}


/*
class Circle {
  constructor(int r,xc,yc){
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
*/