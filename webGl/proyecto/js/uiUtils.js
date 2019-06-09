(function(global){

  var uiUtils = {
    VERSION : '0.0.1',
    pixelInputToGLCoord: function(point){
      var canvas=document.getElementById("glcanvas");
      var x = point.x, y = point.y,
          midX = canvas.width/2, midY = canvas.height/2,
          rect = canvas.getBoundingClientRect();

      x = ((x - rect.left) - midX) / midX;
      y = (midY - (y - rect.top)) / midY;

      return {x:x,y:y};
    },    
    pixelInputToCanvasCoord: function(point){      
      var x = point.x,
          y = point.y,
          rect = document.getElementById("glcanvas").getBoundingClientRect();

          x =x-rect.left;
          y =y-rect.top;
        return {x:x,y:y};
    },    
    canvasCoordToPixelInput: function(point){      
      //(0,0) --> (0-15,0-15)
      //(-15,-15) --> (-15+15,-15+15)
      var x = point.x,
          y = point.y,
          rect = document.getElementById("glcanvas").getBoundingClientRect();

          x =x+rect.left;
          y =y+rect.top;
        return {x:x,y:y};
    }
  };

  // Expose uiUtils globally
  global.uiUtils = uiUtils;

}(window || this));
