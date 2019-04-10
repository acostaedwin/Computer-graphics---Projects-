import java.util.*;

class FillOld{
  FillOld() {
  } 
  void filling() {
  }


  void test() {  
    color fill = color(255, 0, 0);    
    color border = color(0, 255, 0);    
    println("--> "+getRGBValues(get(0,0)));    
    fillNeighborhood(0,0,fill,border);    
    println("--> "+getRGBValues(get(0,0)));        
  }


  void fill(int xSeed,int ySeed,color fill, color border){
    println("ok");
     Stack<Point> pila = new Stack();
     pila.add(new Point(xSeed,ySeed));
     while(!pila.isEmpty()) {
       //println("a: "+pila.size());
        Point point = pila.pop();
        //println("d: "+pila.size());
        //println("point: "+point.x+","+point.y);
        if(validarPoint(point,fill,border)) {
          set(point.x,point.y,fill);
          pila.add(new Point(point.x + 1, point.y));
          pila.add(new Point(point.x - 1, point.y));
          pila.add(new Point(point.x, point.y + 1));
          pila.add(new Point(point.x, point.y - 1));
        }
        //println("pila: "+pila.size()); 
        //if(pila.size()>1000)
          //break;
     }
  }

  boolean validarPoint(Point point,color fill,color border){
     //(get(point.x,point.y) != fill && get(point.x, point.y) != border) && (point.x>=0 && point.y>=0 && point.y<=height && point.x<=width)          
     //validamos que este dentro de la pantalla
     if(!(point.x>0 && point.y>0 && point.y<height && point.x<width)){
       println("SE DESCARTA POR PANTALLA");
       return false;
     }
     
     //validamos que el color en ese pixel no sea el borde o el fill.
     color colorEnPixel=get(point.x,point.y);
     println("Color en pixel: "+getRGBValues(colorEnPixel));
     println("fill: "+getRGBValues(fill));
     println("border: "+getRGBValues(border));
     if(colorEnPixel == fill || colorEnPixel == border){
       println("SE DESCARTA POR FILL O BORDE.");
       return false;
     }               
     println("SE PINTA ESE PIXEL");
      return true;                
  }

  void fillNeighborhood(int x, int y, color fill, color border) {            
    //println("punto: "+x+","+y+"--> "+((get(x, y) != fill && get(x, y) != border) && (x>=0 && y>=0 && y<=height && x<=width)));
    if ((get(x, y) != fill && get(x, y) != border) && (x>=0 && y>=0 && y<=height && x<=width)) {
      try{
        loadPixels();
        pixels[y*width+x]=fill;
        updatePixels();  
      }catch(Exception e){
        println(e.getMessage());
      }
      
            
      /*
      String puntos;
      puntos=(x+1)+","+(y)+" - ";
      puntos+=(x-1)+","+(y)+" - ";
      puntos+=(x)+","+(y+1)+" - ";
      puntos+=(x)+","+(y-1)+" - ";
      
      println(puntos);
    */
      
      fillNeighborhood(x, y+1,fill,border);
      fillNeighborhood(x-1, y,fill,border);      
      fillNeighborhood(x+1, y,fill,border);
      fillNeighborhood(x, y-1,fill,border);           
      
                     /* 
       fillNeighborhood(x, y-1,fill,border);
       fillNeighborhood(x-1, y-1,fill,border);           
       fillNeighborhood(x-1, y+1,fill,border);
       fillNeighborhood(x+1, y-1,fill,border);*/
    }
  }

  String getRGBValues(color c) {
    return "(RGB)="+"("+((int)red(c))+","+((int)green(c))+","+((int)blue(c))+")";
  }
  class Point{
    int x;
    int y;
    Point(int x,int y){
      this.x=x;
      this.y=y;
    }
    
  }
}
