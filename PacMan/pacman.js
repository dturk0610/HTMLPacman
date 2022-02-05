var gl;

function init(){

    var canvas=document.getElementById("gl-canvas");
    gl=WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert( "WebGL is not available" ); }

        gl.viewport(0, 0, 512, 512 );
        gl.clearColor( 200.0/255.0, 0.0/255.0, 170.0/255.0, 1.0 );
        gl.clear( gl.COLOR_BUFFER_BIT );

        var point1 = vec2(0,0);
        var point2 = vec2(0,1);
        var point3 = vec2(1,0);

        var point4 = vec2(0,0);
        var point5 = vec2(0,-1);
        var point6 = vec2(-1,-1);
        var point7 = vec2(-1,0);

        var trinangleArr = [];
        trinangleArr.push(point1);
        trinangleArr.push(point2);
        trinangleArr.push(point3);
        //pushing square points into array
        trinangleArr.push(point4);
        trinangleArr.push(point5);
        trinangleArr.push(point6);
        trinangleArr.push(point7);

        var triBufferID = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, triBufferID);
        gl.bufferData( gl.ARRAY_BUFFER, flatten(trinangleArr), gl.STATIC_DRAW );

        var myShaderProgram = initShaders( gl, "vertex-shader", "fragment-shader" );
        gl.useProgram(myShaderProgram);

        var myPos = gl.getAttribLocation( myShaderProgram, "myPosition");
        gl.vertexAttribPointer( myPos, 2, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( myPos );

        gl.drawArrays( gl.TRIANGLES, 0, 3 );
        gl.drawArrays( gl.TRIANGLE_FAN, 3, 4 );

}


function render(){

}   