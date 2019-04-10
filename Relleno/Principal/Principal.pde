void setup() {
  size(1280,720);

//creamos el triangulo

  Dda linea1=new Dda(100,200, 400,500, 2,"box");
  Dda linea2=new Dda(400,500, 150,550, 2,"box");
  Dda linea3=new Dda(100,200, 150,550, 2,"box");
  
  linea1.print();
  linea2.print();
  linea3.print();
   
   //strokeWeight(2);
  //point(20,50);
   
   
   //creamos un relleno, y le mandamos una semilla (punto) que este dentro del triangulo.
  Fill f = new Fill();
  color rojo=color(255,0,0);
  color bordeNegro=color(0,0,0);
  f.fill(200,500,rojo,bordeNegro);
    

  
  
  println("end");
  
}

void draw() {
}
