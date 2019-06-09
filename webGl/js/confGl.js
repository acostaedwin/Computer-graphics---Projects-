//matrix de resplando para set and get de colors
var columnas=document.getElementById("glcanvas").width;
var filas=document.getElementById("glcanvas").height;
console.log("columnas: "+columnas);
console.log("filas: "+filas);
var matrix = [];
for(var i=0; i<columnas; i++) {
    matrix[i] = new Array(filas);
}
console.log("columnas: "+matrix.length);
console.log("filas: "+matrix[matrix.length-1].length);


var colorLocation;
var positionLocation;

var createGLProgram = function( gl, shaders ) {
  var program = gl.createProgram();
    for ( var i = 0; i < shaders.length; i += 1 ) {
      gl.attachShader( program, shaders[ i ] );
    }
  gl.linkProgram( program );
  // Check the link status
  var linked = gl.getProgramParameter( program, gl.LINK_STATUS );
  if(!linked){
    // Something went wrong with the link
    var lastError = gl.getProgramInfoLog( program );
    window.console.error( "Error in program linking: " + lastError );
    gl.deleteProgram( program );
    return null;
  }
  return program;
};

var myCreateShader = function( gl, shaderScriptText, shaderType ) {
  // Create the shader object
    var shader = gl.createShader(shaderType);
    //Load the shader source
    gl.shaderSource(shader,shaderScriptText);
    //Compile the shader
    gl.compileShader(shader);
    return shader;
};

// Get A WebGL context.
var canvas = document.getElementById("glcanvas");

var gl = canvas.getContext( "webgl", { antialias: false ,preserveDrawingBuffer: true} );
var vertexShader = myCreateShader( gl,
  `attribute vec2 a_position;
  uniform vec2 u_resolution;
  void main() {
    // convert the rectangle from pixels to 0.0 to 1.0
    vec2 zeroToOne = a_position / u_resolution;

    // convert from 0 -> 1 to 0 -> 2
    vec2 zeroToTwo = zeroToOne * 2.0;

    // convert from 0 -> 2 to -1 -> +1 (clipspace)
    vec2 clipSpace = zeroToTwo - 1.0;

    // Flip 0,0 from bottom left to conventional 2D top left.
    gl_PointSize = 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }`,gl.VERTEX_SHADER);

var fragmentShader = myCreateShader( gl,
  `precision mediump float;

  uniform vec4 u_color;

  void main() {
    gl_FragColor = u_color;
  }`, gl.FRAGMENT_SHADER );

//https://stackoverflow.com/questions/22895237/hexadecimal-to-rgb-values-in-webgl-shader

var program = createGLProgram( gl, [ vertexShader, fragmentShader ] );
gl.useProgram( program );
// Store color location.
colorLocation = gl.getUniformLocation( program, "aPosition" );
// Look up where the vertex data needs to go.
positionLocation = gl.getAttribLocation( program, "a_position" );
// Set the resolution.
var resolutionLocation = gl.getUniformLocation( program, "u_resolution");
gl.uniform2f( resolutionLocation, canvas.width, canvas.height);
// Create a buffer.
var buffer = gl.createBuffer();
gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
gl.enableVertexAttribArray( positionLocation );
// Send the vertex data to the shader program.
gl.vertexAttribPointer( positionLocation, 2, gl.FLOAT, false, 0, 0 );


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

function setPixel(x,y,color,event){

  
  var point = uiUtils.pixelInputToGLCoord(event,canvas);
  console.log(point);
  point.c = [Math.random(), Math.random(), Math.random(), 1.0];
  points.push(point);
  draw(positionLocation,colorLocation);


  matrix[x][y]=color;
}

function getPixel(x,y){
  return matrix[x][y];
  /*
  var pixels = new Uint8Array(4);
  gl.readPixels(x,y,1,1,gl.RGBA,gl.UNSIGNED_BYTE,pixels);       
  console.log(pixels);*/
}
