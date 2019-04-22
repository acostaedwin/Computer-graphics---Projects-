import java.util.*;

class RecortarLinea {  
  int INSIDE = 0; // 0000 
  int LEFT = 1; // 0001 
  int RIGHT = 2; // 0010 
  int BOTTOM = 4; // 0100 
  int TOP = 8; // 1000 

  float x_max; 
  float y_max; 
  float x_min; 
  float y_min;

  ArrayList<Linea> lineas;
  RecortarLinea(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4,ArrayList<Linea> _lineas) {
    x_max=(Math.max(Math.max(x1, x2), Math.max(x3, x4)));
    y_max=(Math.max(Math.max(y1, y2), Math.max(y3, y4)));
    x_min=(Math.min(Math.min(x1, x2), Math.min(x3, x4)));
    y_min=(Math.min(Math.min(y1, y2), Math.min(y3, y4)));   
    this.lineas=_lineas;
    
    //pintamos el cuadro de recorte.
    stroke(0,255,0);
    line(x1,y1,x2,y2);
    line(x2,y2,x3,y3);
    line(x3,y3,x4,y4);
    line(x4,y4,x1,y1);
    
  } 
  void print(){    
    for(Linea l:lineas){
      l.print(color(0,0,0));
    }    
  }
  void cut(){    
    for(Linea l:lineas){
      //l.print(color(0,0,0));
      cohenSutherlandClip(l.x1,l.y1,l.x2,l.y2);
    }    
  }
  void cohenSutherlandClip(float x1, float y1, float x2, float y2) {     
    int code1 = computeCode(x1, y1); 
    int code2 = computeCode(x2, y2);     
    boolean accept = false; 
    while (true) { 
      if ((code1 == 0) && (code2 == 0)) {         
        accept = true; 
        break;
      } else if ((code1 & code2)!=0) {//REVISAR**********************                      
        break;
      } else { 
        int code_out; 
        float x=0, y=0;  
        if (code1 != 0) 
          code_out = code1; 
        else
          code_out = code2;         
        if ((code_out & TOP)!=0) {           
          x = x1 + (x2 - x1) * (y_max - y1) / (y2 - y1); 
          y = y_max;
        } else if ((code_out & BOTTOM)!=0) {          
          x = x1 + (x2 - x1) * (y_min - y1) / (y2 - y1); 
          y = y_min;
        } else if ((code_out & RIGHT)!=0) {          
          y = y1 + (y2 - y1) * (x_max - x1) / (x2 - x1); 
          x = x_max;
        } else if ((code_out & LEFT)!=0) {           
          y = y1 + (y2 - y1) * (x_min - x1) / (x2 - x1); 
          x = x_min;
        } 
        if(code_out == code1){ 
          x1 = x; 
          y1 = y; 
          code1 = computeCode(x1, y1);
        }else{ 
          x2 = x; 
          y2 = y; 
          code2 = computeCode(x2, y2);
        }
      }
    } 
    if(accept){ 
      println("Line aceotada desde " + x1 + ", "+ y1 + " hasta "+ x2 + ", " + y2); 
      stroke(255, 0, 0);
      line((float)x1, (float)y1, (float)x2, (float)y2);      
    }else
      println("Line aceptada.");
  }
  
  int computeCode(float x, float y) {   
    // initialized as being inside 
    int code = INSIDE; 
    if (x < x_min)   // to the left of rectangle 
      code |= LEFT; 
    else if (x > x_max) // to the right of rectangle 
      code |= RIGHT; 
    if (y < y_min)   // below the rectangle 
      code |= BOTTOM; 
    else if (y > y_max) // above the rectangle 
      code |= TOP;     
    return code;
  }    
}
