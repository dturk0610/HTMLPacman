var pacmanPos;
var pacRadius = 50;
var pacmanVertex = [];
var pacmanMoveDir = vec2( 0, 0 );
var pacmanSpeed = .5;

function setupCharacter(){

   //calculate the circle position
   var div = 50;
   var stepAmount = 2*Math.PI/div;
   var count = 0;
   for (var theta = 0; theta < 2*Math.PI; theta += stepAmount ){
       var x = pacRadius*Math.cos(theta);
       var y = pacRadius*Math.sin(theta);
       pacmanVertex.push( vec2( x, y ));
       count++; //count = count +1

   }

   pacmanPos = vec2( w/2, h/2 );
   pacmanMoveDir = vec2( -1, 0 );

}

function updateCharacter(){

    pacmanPos[0] = pacmanPos[0] + pacmanMoveDir[0]*pacmanSpeed;
    pacmanPos[1] = pacmanPos[1] + pacmanMoveDir[1]*pacmanSpeed;

    if ( pacmanPos[0] < 0 - pacRadius + 1 ) pacmanPos[0] = w - 1 + pacRadius + pacmanMoveDir[0]*pacmanSpeed;
    if ( pacmanPos[0] > w + pacRadius - 1 ) pacmanPos[0] = 0 + 1 - pacRadius + pacmanMoveDir[0]*pacmanSpeed;
    
    if ( pacmanPos[1] < 0 - pacRadius + 1 ) pacmanPos[1] = h - 1 + pacRadius + pacmanMoveDir[1]*pacmanSpeed;
    if ( pacmanPos[1] > h + pacRadius - 1 ) pacmanPos[1] = 0 + 1 - pacRadius + pacmanMoveDir[1]*pacmanSpeed;

}

function renderCharacter(){

    gl.bindBuffer(gl.ARRAY_BUFFER, characterBufferID );
    gl.useProgram( characterShader );
    gl.enableVertexAttribArray( posAttributeLocation );
    gl.vertexAttribPointer( posAttributeLocation, 2, gl.FLOAT, false, 0, 0 );

    var pointsToRender = [];
    for ( var i = 0; i < pacmanVertex.length; i++ ){
        pointsToRender.push( convertCanvasPosToView( pacmanVertex[i][0] + pacmanPos[0], pacmanVertex[i][1] + pacmanPos[1] ));
    
    }

    gl.bufferData( gl.ARRAY_BUFFER, flatten( pointsToRender ), gl.STATIC_DRAW );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, pointsToRender.length );

}