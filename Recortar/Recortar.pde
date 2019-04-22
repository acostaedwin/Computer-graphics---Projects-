import java.util.*;

void setup() {
  size(1280, 720);
  ArrayList<Linea> lineas= new ArrayList();
  lineas.add(new Linea(50, 50, 70, 70));
  lineas.add(new Linea(70, 90, 110, 40));
  lineas.add(new Linea(10, 50, 40, 10));
  RecortarLinea rl= new RecortarLinea(40,80,40,40,100,40,100,80,lineas);
  rl.print();
  rl.cut();
  
  
  lineas= new ArrayList();
  lineas.add(new Linea(20,650,600,150));
  lineas.add(new Linea(20,150,600,650));  
  for(int i=80;i<800;i+=80)    
    lineas.add(new Linea(i,150,i,650));  
  RecortarLinea rl2= new RecortarLinea(40,600,40,200,600,200,600,600,lineas);
  rl2.print();
  rl2.cut();
  
  
  
}

void draw() {
}
