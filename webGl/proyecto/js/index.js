(function(global) {

  var canvas, gl, program, points = [];

  glUtils.SL.init({ callback:function() { main(); } });

  function main() {
    // Get canvas element and check if WebGL enabled
    canvas = document.getElementById("glcanvas");
    gl = glUtils.checkWebGL(canvas);

    // Initialize the shaders and program
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex),
    fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);

    program = glUtils.createProgram(gl, vertexShader, fragmentShader);

    gl.useProgram(program);

    var aPosition = gl.getAttribLocation(program, 'aPosition');
    var uFragColor = gl.getUniformLocation(program, 'uFragColor');

    //var resolutionLocation = gl.getUniformLocation( program, "u_resolution");
    //gl.uniform2f( resolutionLocation, canvas.width, canvas.height);

    console.log(gl);

    // UI events
    canvas.addEventListener('mousedown', function(event) { onmousedown(event, aPosition, uFragColor); });

    //gl.clearColor(0, 0, 0, 0);
    //gl.clear(gl.COLOR_BUFFER_BIT);
  }

  // draw!
  function draw(aPosition, uFragColor) {

    gl.clear(gl.COLOR_BUFFER_BIT);

    var len = points.length;
    for(var i = 0; i < len; i++) {      
      var point = points[i], color = point.c;
      // Pass the position of a point to aPosition
      gl.vertexAttrib3f(aPosition, point.x, point.y, 0.0);
      // Pass the color of a point to uFragColor
      gl.uniform4f(uFragColor, color[0], color[1], color[2], color[3]);
      // Draw
      gl.drawArrays(gl.POINTS, 0, 1);
    }

  }

  // UI Events
  function onmousedown(event, aPosition, uFragColor) {
    //recibe siempre los puntos en mis coors
    var newPoints=creandoObjetos(event);
    if(newPoints!=null){      
      //convertirmos a GL coors
      var glPoints=[];
      for (var i=0; i<newPoints.length;i++){        
        matrix[newPoints[i].x][newPoints[i].y]=newPoints[i];
        var originalPoint=uiUtils.canvasCoordToPixelInput(newPoints[i]);
        var pointGL = uiUtils.pixelInputToGLCoord(originalPoint);
        glPoints.push({x:pointGL.x,y:pointGL.y,c:newPoints[i].c});
      }
      points=points.concat(glPoints);
      draw(aPosition, uFragColor);
    }    
  }

})(window||this);


function distanciaEntreDosPuntos(p1,p2){            
    var d = Math.sqrt(Math.pow(p2.x-p1.x,2)+Math.pow(p2.y-p1.y,2));    
    return parseInt(d);    
}

function hexToRGB(hex,alpha){
    var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
    if(alpha){        
        return [r,g,b,1.0];
    } else {
        return [r,g,b];
    }
}

//matrix de respaldo para guardar coors con colores
var columnas=document.getElementById("glcanvas").width;
var filas=document.getElementById("glcanvas").height;
//console.log("columnas: "+columnas);console.log("filas: "+filas);
var matrix = [];
for(var i=0; i<columnas; i++) {
    matrix[i] = new Array(filas);
}
for(var i=0; i<matrix.length; i++) {
  for(var j=0; j<matrix[i].length; j++) {
    //matrix[i][j]={x:i,y:j,c:{r:255,g:255,b:255,a:1.0}};
    matrix[i][j]={x:i,y:j,c:[255,255,255,1.0]};
  }
}
//console.log("columnas: "+matrix.length);console.log("filas: "+matrix[matrix.length-1].length);