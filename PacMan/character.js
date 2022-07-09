var pacmanPos;
var pacRadius = 13;
var pacmanVertex = [];
var pacmanOpenMouthVertex = [];
var pacmanMoveDir = vec2(0, 0);
var pacmanSpeed = 1;
var countDownOrig = 20;
var mouthCountDown = countDownOrig;
var mouthOpen = false;

function setupCharacter() {

    //calculate the circle position
    var div = 50;
    var stepAmount = 2*Math.PI/div;
    var mouthAngle = 55.0*Math.PI/180.0;
    pacmanOpenMouthVertex.push(vec2(0.0, 0.0));
    for (var theta = 0; theta < 2*Math.PI; theta += stepAmount) {
        var x = pacRadius*Math.cos(theta);
        var y = pacRadius*Math.sin(theta);
        pacmanVertex.push(vec2(x, y));

        if (theta >= mouthAngle*.5 && theta <= 2*Math.PI - mouthAngle*.5) {
            pacmanOpenMouthVertex.push(vec2(x, y));

        }

    }

    pacmanPos = vec2(w/2, h/2);
    pacmanMoveDir = left;

}

function updateCharacter() {

    mouthCountDown = mouthCountDown - 1;
    if (mouthCountDown <= 0) {
        mouthOpen = !mouthOpen;
        mouthCountDown = countDownOrig;
    }

    pacmanPos[0] = pacmanPos[0] + pacmanMoveDir[0] * pacmanSpeed;
    pacmanPos[1] = pacmanPos[1] + pacmanMoveDir[1] * pacmanSpeed;

    if (pacmanPos[0] < 0 - pacRadius + 1) pacmanPos[0] = w - 1 + pacRadius + pacmanMoveDir[0] * pacmanSpeed;
    if (pacmanPos[0] > w + pacRadius - 1) pacmanPos[0] = 0 + 1 - pacRadius + pacmanMoveDir[0] * pacmanSpeed;

    if (pacmanPos[1] < 0 - pacRadius + 1) pacmanPos[1] = h - 1 + pacRadius + pacmanMoveDir[1] * pacmanSpeed;
    if (pacmanPos[1] > h + pacRadius - 1) pacmanPos[1] = 0 + 1 - pacRadius + pacmanMoveDir[1] * pacmanSpeed;

}

function renderCharacter() {

    gl.bindBuffer(gl.ARRAY_BUFFER, characterBufferID);
    gl.useProgram(characterShader);
    gl.enableVertexAttribArray(posAttributeLocation);
    gl.vertexAttribPointer(posAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    var pointsToRender = [];

    if (!mouthOpen) {

        for (var i = 0; i < pacmanVertex.length; i++) {
            pointsToRender.push(convertCanvasPosToView(pacmanVertex[i][0] + pacmanPos[0], pacmanVertex[i][1] + pacmanPos[1]));
        }
    } else {
        var theta = 0;
        switch (pacmanMoveDir){
            case up: theta = 90.0*Math.PI/180.0; break;
            case left: theta = 180.0*Math.PI/180.0; break;
            case down: theta = 270.0*Math.PI/180.0; break;
            default: theta = 0;
        }
        for (var i = 0; i < pacmanOpenMouthVertex.length; i++) {
            var newX = Math.cos(theta)*pacmanOpenMouthVertex[i][0] - Math.sin(theta)*pacmanOpenMouthVertex[i][1];
            var newY = Math.sin(theta)*pacmanOpenMouthVertex[i][0] + Math.cos(theta)*pacmanOpenMouthVertex[i][1];
            pointsToRender.push(convertCanvasPosToView(newX + pacmanPos[0], newY + pacmanPos[1]));
        }
    }
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsToRender), gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, pointsToRender.length);

}