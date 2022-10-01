
var GamePellets = [];

function setupPellets(pelletsToLoad, pelletRadius){
  
    for (var i = 0; i < pelletsToLoad.length; i++){
        var newPellet = new Pellet(pelletsToLoad[i][0]*20, pelletsToLoad[i][1]*20, pelletRadius);
        GamePellets.push(newPellet);
    }
}

function updatePellets(){

    var indicesToDelete = [];

    for (var i = 0; i < GamePellets.length; i++){
        var currPellet = GamePellets[i];
        var pelletPos = vec2(currPellet.x, currPellet.y);
        var pelletRad = currPellet.r;
        var diff = vec2(pelletPos[0] - pacmanPos[0], pelletPos[1] - pacmanPos[1]);
        var diffLen = length(diff);
        if (diffLen - pelletRad <= pacRadius/4){
            indicesToDelete.push(i);
        }
    }

    var delLength = indicesToDelete.length;
    for (var i = 0; i < delLength; i++){
        var delInd = indicesToDelete.pop();
        GamePellets.splice(delInd, 1);
    }
}

function renderPellets(){
    
    gl.bindBuffer(gl.ARRAY_BUFFER, pelletBufferID);
    gl.useProgram(pelletShader);
    gl.enableVertexAttribArray(pelletPosAttribLoc);
    gl.vertexAttribPointer(pelletPosAttribLoc, 2, gl.FLOAT, false, 0, 0);

    for (var i = 0; i < GamePellets.length; i++){
        var pointsToRender = [];

        var currPellet = GamePellets[i];
        pointsToRender = currPellet.getRenderPos();

        gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsToRender), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, pointsToRender.length);
    
    }

}

class Pellet{

    constructor(x = 0, y = 0, r = 1){
        this.x = x;
        this.y = y;
        this.r = r;
        var div = 12;
        var stepAmount = 2*Math.PI/div;
        this.verts =[];
        for (var theta = 0; theta < 2*Math.PI; theta += stepAmount) {
            var dx = r*Math.cos(theta);
            var dy = r*Math.sin(theta);
            this.verts.push(vec2(dx, dy));
        }
    }

    getRenderPos(){
        var retPos = [];
        for (var i = 0; i < this.verts.length; i++){
            retPos.push(convertCanvasPosToView(this.x + this.verts[i][0], this.y + this.verts[i][1]));
        }
        return retPos;
    }

}

