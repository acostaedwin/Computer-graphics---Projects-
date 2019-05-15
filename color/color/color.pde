

void setup() {  
  size(1280, 720);     

  printColorBox1(100,100,255);  
  text("Brightness-->", 100, 72);
    
  printColorBox2(500,100,255);  
  text("Saturation-->", 500, 72);
  
  printColorBox2(900,100,255);  
  text("Hue-->", 900, 72);
  
  
  
}

void draw() {
  if (mouseX>=100 && mouseX<=100+255) {
    println(mouseX);
    noStroke();
    fill(0, 0, 0);
    rect(100+85,53, 80, 30);
    fill(0, 255, 255, 255);
    textSize(32);
    text(mouseX-100,100+97,80);
  }
  if (mouseX>=500 && mouseX<=500+255) {
    println(mouseX);
    noStroke();
    fill(0, 0, 0);
    rect(500+85,53, 80, 30);
    fill(0, 255, 255, 255);
    textSize(32);
    text(mouseX-500,500+97,80);
  }
  if (mouseX>=900 && mouseX<=900+255) {
    println(mouseX);
    noStroke();
    fill(0, 0, 0);
    rect(900+85,53, 80, 30);
    fill(0, 255, 255, 255);
    textSize(32);
    text(mouseX-900,900+97,80);
  }
}
void mousePressed() {
  if(mouseX>=100 && mouseX<=100+255) {
    printColorBox1(100,100,mouseX-100);
  }
  if(mouseX>=500 && mouseX<=500+255) {
    printColorBox1(500,100,mouseX-500);
  }
  if(mouseX>=900 && mouseX<=900+255) {
    printColorBox1(900,100,mouseX-900);
  }
}
void printColorBox1(int x, int y,int brightness) {    
  noStroke();
  colorMode(HSB, 255);
  for (int i = 0; i < 255; i++) {
    for (int j = 0; j < 255; j++) {
      stroke(i, j, brightness);
      point(x+i, y+j);
    }
  }
}
void printColorBox2(int x, int y,int saturation ) {    
  noStroke();
  colorMode(HSB, 255);
  for (int i = 0; i < 255; i++) {
    for (int j = 0; j < 255; j++) {
      stroke(i, saturation , j);
      point(x+i, y+j);
    }
  }
}
void printColorBox3(int x, int y,int hue ) {    
  noStroke();
  colorMode(HSB, 255);
  for (int i = 0; i < 255; i++) {
    for (int j = 0; j < 255; j++) {
      stroke(hue , i, j);
      point(x+i, y+j);
    }
  }
}
