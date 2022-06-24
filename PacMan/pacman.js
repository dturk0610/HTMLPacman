var gl;
var w, h;
var up = vec2( 0, 1), down = vec2( -0, -1), left = vec2( -1, -0), right = vec2( 1, 0), stop = vec2( 0, -0);

function init(){

    var canvas=document.getElementById("gl-canvas");
    gl=WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert( "WebGL is not available" );}

    w = parseFloat(canvas.width);
    h = parseFloat(canvas.height);
    
    setupGL();
    setupCharacter();
    setupInput();

    window.requestAnimationFrame(update);

}
var characterBufferID;
var fruitBufferID, redGhostBufferID, pinkGhostBufferID, blueGhostBufferID, orangeGhostBufferID;
var wallsBufferID;

var characterShader;

var posAttributeLocation

function setupGL(){

    gl.viewport(0, 0, w, h );
    gl.clearColor( 0.0/255.0, 0.0/255.0, 0.0/255.0, 1.0 );
    gl.clear( gl.COLOR_BUFFER_BIT );

    characterBufferID = gl.createBuffer();
    fruitBufferID = gl.createBuffer();
    redGhostBufferID = gl.createBuffer();
    pinkGhostBufferID = gl.createBuffer();
    blueGhostBufferID = gl.createBuffer();
    orangeGhostBufferID = gl.createBuffer();
    wallsBufferID = gl.createBuffer();

    characterShader = initShaders( gl, "vertex-shader", "frag-pacman" );
    gl.useProgram( characterShader );
    posAttributeLocation = gl.getAttribLocation( characterShader, "myPosition")

}

function setupInput(){

    window.addEventListener( "keydown", onKeyDown, false );
    window.addEventListener( "keyup", onKeyUp, false );

}

function update(){

    // console.log("Hell");
    gl.clear( gl.COLOR_BUFFER_BIT );

    updateCharacter();
    renderCharacter();

    window.requestAnimationFrame(update);

}   

function onKeyDown( event ){

    var keyCode = event.keyCode;
    switch (keyCode){
        case 87: pacmanMoveDir = up;    break; //w
        case 65: pacmanMoveDir = left;  break; //a
        case 83: pacmanMoveDir = down;  break; //s
        case 68: pacmanMoveDir = right; break; //d
    }

}  

function onKeyUp( event ){

    var keyCode = event.keyCode;

}

function convertCanvasPosToView(x, y){
    return vec2((x/(w/2)) - 1, (y/(h/2)) - 1);

}

function drawCirc(rad, center){
    //calculate the circle position
    var div = 50;
    var stepAmount = 2*Math.PI/div;
    var count = 0;
    var circleArr = [];
    for (var theta = 0; theta < 2*Math.PI; theta += stepAmount ){
        var x = rad*Math.cos(theta) + center[0];
        var y = rad*Math.sin(theta) + center[1];
        circleArr.push( convertCanvasPosToView(x,y) );
        count++; //count = count +1

    }

    var circBufferID = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, circBufferID);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(circleArr), gl.STATIC_DRAW );

    var myShaderProgram = initShaders( gl, "vertex-shader", "frag-blue" );
    gl.useProgram(myShaderProgram);

    var myPos = gl.getAttribLocation( myShaderProgram, "myPosition");
    gl.vertexAttribPointer( myPos, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( myPos );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, count );

}