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
    var shader = gl.createShader( shaderType );
    //Load the shader source
    gl.shaderSource( shader, shaderScriptText );
    //Compile the shader
    gl.compileShader( shader );
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

var program = createGLProgram( gl, [ vertexShader, fragmentShader ] );
gl.useProgram( program );
// Store color location.
var colorLocation = gl.getUniformLocation( program, "u_color" );
// Look up where the vertex data needs to go.
var positionLocation = gl.getAttribLocation( program, "a_position" );
// Set the resolution.
var resolutionLocation = gl.getUniformLocation( program, "u_resolution");
gl.uniform2f( resolutionLocation, canvas.width, canvas.height);
// Create a buffer.
var buffer = gl.createBuffer();
gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
gl.enableVertexAttribArray( positionLocation );
// Send the vertex data to the shader program.
gl.vertexAttribPointer( positionLocation, 2, gl.FLOAT, false, 0, 0 );

// Set color to black.
gl.uniform4f( colorLocation, 0, 0, 0, 1);

function drawOneBlackPixel( gl, x, y ) {
  //console.log("papi una sola vez");

  // Fills the buffer with a single point?
  gl.bufferData( gl.ARRAY_BUFFER, new Float32Array([x+0.5,y+0.5]), gl.STATIC_DRAW );
  // Draw one point.
  gl.drawArrays( gl.POINTS, 0, 1 );
}