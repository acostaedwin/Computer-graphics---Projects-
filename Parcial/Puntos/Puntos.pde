import java.util.*;

RecortarLinea rl;
ArrayList<Punto> puntos=new ArrayList();

void setup() {
  background(0);
  size(1280, 720);
  //vamos a crear los puntos suponiendo que es una linea con x1=y1 y x2=y2
  getRandomPoints();
  rl=new RecortarLinea(40, 600, 40, 200, 600, 200, 600, 600, puntos);
  rl.print();
  rl.cut();
}

void draw() {
}

void getRandomPoints() {
  for (int i = 0; i < 100; i++) {
    puntos.add(new Punto(random(width), random(height)));
  }
}

void mouseClicked() {
  background(0);
  rl=new RecortarLinea(mouseX-250, mouseY+200, mouseX-250, mouseY-200, mouseX+250, mouseY-200, mouseX+250, mouseY+200, puntos);
  rl.print();
  rl.cut();
}