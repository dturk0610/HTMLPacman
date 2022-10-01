
var WallsArray = [];
var wallData = [];

function setupWalls(wallsPosToLoad, wallsWidth){

    for ( var i = 0; i < wallsPosToLoad.length; i++ ){
        WallsArray.push( [  convertCanvasPosToView( -1*wallsWidth*.5 + wallsPosToLoad[i][0]*20,  1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ),
                            convertCanvasPosToView(  1*wallsWidth*.5 + wallsPosToLoad[i][0]*20,  1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ),

                            convertCanvasPosToView(  1*wallsWidth*.5 + wallsPosToLoad[i][0]*20, -1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ),
                            convertCanvasPosToView(  1*wallsWidth*.5 + wallsPosToLoad[i][0]*20,  1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ),

                            convertCanvasPosToView( -1*wallsWidth*.5 + wallsPosToLoad[i][0]*20, -1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ),
                            convertCanvasPosToView(  1*wallsWidth*.5 + wallsPosToLoad[i][0]*20, -1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ),

                            convertCanvasPosToView( -1*wallsWidth*.5 + wallsPosToLoad[i][0]*20, -1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ),
                            convertCanvasPosToView( -1*wallsWidth*.5 + wallsPosToLoad[i][0]*20,  1*wallsWidth*.5 + wallsPosToLoad[i][1]*20 ) ] );
    }

    wallData = flattenWallsArr();
    // console.log(`${wallData[4]}, ${wallData[5]} x ${wallData[6]}, ${wallData[7]}`)
    // console.log(`${wallData[28]}, ${wallData[29]} x ${wallData[30]}, ${wallData[31]}`)
    var dupeInds = new Set();
    for (var i = 0; i < wallData.length/4; i++){
        var isADupe = false;
        for ( var j = i + 1; j < wallData.length/4; j++ ){
            if (wallData[i*4] == wallData[j*4] && wallData[i*4 + 1] == wallData[j*4 + 1] &&
                 wallData[i*4 + 2] == wallData[j*4 + 2] && wallData[i*4 + 3] == wallData[j*4 + 3]){
                dupeInds.add(j);
                isADupe = true;
            }
        }   
        if (isADupe){
            dupeInds.add(i);
        }
    }
    var dupeIndsArr = Array.from(dupeInds);
    dupeIndsArr.sort(function (a, b){ return a - b });
    var lengthOfDupesArr = dupeIndsArr.length;
    for (var i = 0; i < lengthOfDupesArr; i++){
        var indToDelete = dupeIndsArr.pop();
        wallData.splice(indToDelete*4, 4);
    }
    
    wallData = new Float32Array(wallData);
}

function renderWalls(){

    gl.bindBuffer(gl.ARRAY_BUFFER, wallsBufferID);
    gl.useProgram(wallShader);
    gl.enableVertexAttribArray(wallPosAttribLoc);
    gl.vertexAttribPointer(wallPosAttribLoc, 2, gl.FLOAT, false, 0, 0);

    gl.bufferData(gl.ARRAY_BUFFER, wallData, gl.STATIC_DRAW, 0);
    gl.drawArrays(gl.LINES, 0, wallData.length);
    
}

function flattenWallsArr(){
    var merged = [].concat.apply([], WallsArray);
    merged = [].concat.apply([], merged);
    return merged;

}