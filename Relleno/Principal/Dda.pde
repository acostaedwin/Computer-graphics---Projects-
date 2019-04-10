class Dda {
    int x1,x2,y1,y2,size;
    String pen;
    float ax, ay, x, y, variacion;
    Dda(int _x1, int _y1, int _x2, int _y2,int _size, String _pen) {
        this.x1 = _x1;
        this.y1 = _y1;
        this.x2 = _x2;
        this.y2 = _y2;
        this.size=_size;
        this.pen=_pen;
        this.print();
    }
    private void print() {
        //si la variacion en x es mayor o igual que la variacion en y
        if (abs(x2 - x1) >= abs(y2 - y1)) {
            variacion = abs(x2 - x1);
        } else {
            //si la variacion en y es mayor que la variacion en x
            variacion = abs(y2 - y1);
        }
        ax = (x2 - x1) / variacion; //el valor a aumentar en x
        ay = (y2 - y1) / variacion; //el valor a aumentar en y

        x = (float) x1;
        y = (float) y1;
        println("res: " + variacion);
        int i = 0;
        Plumilla p = new Plumilla(size,pen);
        while (i <= variacion) {
            //point(round(x), round(y));
            //point(x,y);
            p.print((int)x,(int)y);
            x = x + ax;
            y = y + ay;
            i++;
        }
    }
}
