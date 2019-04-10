class Plumilla {
    int size;
    String pen;
    //size debe estar entre 1 a 10;
    Plumilla(int _size, String _pen) {
        this.size = _size;
        this.pen = _pen;
    }

    void print(int x, int y) {
        println("pen: " + pen);
        if ("".equals(pen)) {
            point(x, y);
        } else if ("box".equals(pen)) {
            //pintamos la plumilla dependiendo del size.
            for (int i = x - size; i < x + size; i++) {
                for (int j = y - size; j < y + size; j++) {
                    //println(i);
                    point(i, j);
                }
            }
        } else if ("halfBoxHorizontal".equals(pen)) {
            //pintamos la plumilla dependiendo del size.
            for (int i = x - size; i < x + size; i++) {
                for (int j = y - size / 5; j < y + size / 5; j++) {
                    //println(i,j);
                    point(i, j);
                }
            }
        } else if ("halfBoxVertical".equals(pen)) {
            //pintamos la plumilla dependiendo del size.
            for (int i = x - size / 5; i < x + size / 5; i++) {
                for (int j = y - size; j < y + size; j++) {
                    //println(i);
                    point(i, j);
                }
            }
        }
    }
    //usamos recursividad para llenar los pixeles cercanos


}
