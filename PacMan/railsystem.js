
var mapWidth = 0, mapHeight = 0;

var XYWalls;

function setupRailways(mapW, mapH, xyWalls){

    mapWidth = mapW;
    mapHeight = mapH;
    XYWalls = xyWalls;

}

function updateRailways(){
    
    var pacXY = vec2(0, 0);

    var mouthOffset = vec2(0,0);
    mouthOffset[0] = pacRadius*pacmanMoveDir[0];
    mouthOffset[1] = -pacRadius*pacmanMoveDir[1];

    pacXY[0] = Math.floor((pacmanPos[0] + mouthOffset[0])*(mapWidth/w));
    if (pacXY[0] == -1) pacXY[0] = 0;
    else if (pacXY[0] == mapWidth) pacXY[0] = mapWidth - 1;

    pacXY[1] = Math.floor((h - pacmanPos[1] + mouthOffset[1])*(mapHeight/h) + .5);
    if (pacXY[1] == -1) pacXY[1] = 0;
    else if (pacXY[1] == mapHeight ) pacXY[1] = mapHeight - 1;

    if (XYWalls[pacXY[1]][pacXY[0]]){
        pacmanSpeed = 0;
    }

    //console.log(`${pacXY[0]}, ${pacXY[1]}`);

}
