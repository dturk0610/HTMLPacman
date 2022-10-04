
var mapWidth = 0, mapHeight = 0;

var XYWalls, XYRails;

function setupRailways(mapW, mapH, xyWalls, xyRails){

    mapWidth = mapW;
    mapHeight = mapH;
    XYWalls = xyWalls;
    XYRails = xyRails;

}

function updateRailways(){
    
    var pacXY = vec2(0, 0);
    var pacXY2 = vec2(0, 0);

    var mouthOffset = vec2(0,0);
    mouthOffset[0] = /*pacRadius*/10*pacmanMoveDir[0];
    mouthOffset[1] = -/*pacRadius*/10*pacmanMoveDir[1];

    pacXY[0] = Math.floor((pacmanPos[0] + mouthOffset[0])*(mapWidth/w));
    if (pacXY[0] == -1) pacXY[0] = 0;
    else if (pacXY[0] == mapWidth) pacXY[0] = mapWidth - 1;

    pacXY2[0] = Math.floor((pacmanPos[0])*(mapWidth/w));
    if (pacXY2[0] == -1) pacXY2[0] = 0;
    else if (pacXY2[0] == mapWidth) pacXY2[0] = mapWidth - 1;

    pacXY[1] = Math.floor((h - pacmanPos[1] + mouthOffset[1])*(mapHeight/h) + .5);
    if (pacXY[1] == -1) pacXY[1] = 0;
    else if (pacXY[1] == mapHeight ) pacXY[1] = mapHeight - 1;

    pacXY2[1] = Math.floor((h - pacmanPos[1])*(mapHeight/h) + .5);
    if (pacXY2[1] == -1) pacXY2[1] = 0;
    else if (pacXY2[1] == mapHeight ) pacXY2[1] = mapHeight - 1;

    if (XYWalls[pacXY[1]][pacXY[0]]){
        pacmanSpeed = 0;
    }

    var currRailPosX = XYRails[pacXY2[1]][pacXY2[0]][0];
    var currRailPosY = XYRails[pacXY2[1]][pacXY2[0]][1];
    var diffx = pacmanPos[0] - currRailPosX;
    var diffy = pacmanPos[1] - currRailPosY;
    var threshold = 1;
    var dist = Math.sqrt(diffx*diffx + diffy*diffy);

    if (dist <= threshold && !XYWalls[pacXY2[1] - pacmanNewMoveDir[1]][pacXY2[0] + pacmanNewMoveDir[0]]){
        pacmanMoveDir = pacmanNewMoveDir;
        pacmanSpeed = origPacSpeed;
    }else if (pacmanNewMoveDir[0]*pacmanMoveDir[0] + pacmanNewMoveDir[1]*pacmanMoveDir[1] == -1){
        pacmanMoveDir = pacmanNewMoveDir;
        pacmanSpeed = origPacSpeed;
    }

    //console.log(`${pacXY[0]}, ${pacXY[1]}`);

}
