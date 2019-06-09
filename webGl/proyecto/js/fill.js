
class Fill{  
  start(xSeed,ySeed,fill,border){    
    /*
    console.log("xSeed: "+xSeed);
    console.log("ySeed: "+ySeed);
    console.log("fill: "+fill);
    console.log("border: "+border);
    */
     var pila =[];     
     var pointResponse=[];     
     pila.push({x:xSeed,y:ySeed});     
     while(pila.length!=0){       
      //console.log("pila: "+pila.length);
        var point = pila.pop();        
        //console.log("pila pop: "+pila.length);
        if(this.validarPoint(point,fill,border,pointResponse)){
          pointResponse.push({x:point.x,y:point.y,c:fill});          

          //draw(aPosition, uFragColor);
          

          pila.push({x:point.x + 1,y:point.y});
          pila.push({x:point.x - 1,y:point.y});
          pila.push({x:point.x,y:point.y + 1});
          pila.push({x:point.x,y:point.y - 1});
        } 
     }
     return pointResponse;
  }

  validarPoint(point,fill,border,pointResponse){
      //validamos que no este en pointResponse
      for (var i =0; i<pointResponse.length;i++){
        var p10=pointResponse[i];
        if(p10.x==point.x && p10.y==point.y){
          return false;
        }
      }

     //validamos que este dentro de la pantalla     
     var canvas=document.getElementById("glcanvas");
     if(!(point.x>0 && point.y>0 && point.y<canvas.height && point.x<canvas.width)){       
       return false;
     }     
     

     /*
     if(get(point.x,point.y) == fill || get(point.x,point.y) == border){
       println("SE DESCARTA POR FILL O BORDE.");
       return false;
     }               
     println("SE PINTA ESE PIXEL");
     return true;                
     */
     if(this.equalsColor(this.getColorFromMatrix(point),fill) || 
        this.equalsColor(this.getColorFromMatrix(point),border)){
       //console.log("SE DESCARTA POR FILL O BORDE.");
       return false;
     }               
     //console.log("SE PINTA ESE PIXEL");
     return true; 

  }
  equalsColor(c1,c2) {
    /*
    console.log("mi punto: "+JSON.stringify(c1));
    console.log("borde or fill: "+JSON.stringify(c2));
    */
    if(c1[0]==c2[0] && c1[1]==c2[1] && c1[2]==c2[2] && c1[3]==c2[3]){
      //console.log("esto retorno OK");
        return true;
    }
    return false;   
  } 
  getColorFromMatrix(point){    
    //console.log("getColorFromMatrix---> "+matrix[point.x][point.y]);
    return matrix[point.x][point.y].c;
  } 
}