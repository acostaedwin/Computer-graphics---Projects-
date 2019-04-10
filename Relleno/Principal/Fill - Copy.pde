class Fill {
  Fill() {
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

  void fillNeighborhood(int x, int y, color fill, color border) {            
    println("punto: "+x+","+y+"--> "+((get(x, y) != fill && get(x, y) != border) && (x>=0 && y>=0 && y<=height && x<=width)));
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
}
