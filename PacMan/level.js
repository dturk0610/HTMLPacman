const level1 = "" +
"\nb,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b" +
"\nb,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b" +
"\nb,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b" +
"\nw,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w" +
"\nw,p,p,p,p,p,p,p,p,p,p,p,p,w,w,p,p,p,p,p,p,p,p,p,p,p,p,w" +
"\nw,p,w,w,w,w,p,w,w,w,w,w,p,w,w,p,w,w,w,w,w,p,w,w,w,w,p,w" +
"\nw,o,w,w,w,w,p,w,w,w,w,w,p,w,w,p,w,w,w,w,w,p,w,w,w,w,o,w" +
"\nw,p,w,w,w,w,p,w,w,w,w,w,p,w,w,p,w,w,w,w,w,p,w,w,w,w,p,w" +
"\nw,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,w" +
"\nw,p,w,w,w,w,p,w,w,p,w,w,w,w,w,w,w,w,p,w,w,p,w,w,w,w,p,w" +
"\nw,p,w,w,w,w,p,w,w,p,w,w,w,w,w,w,w,w,p,w,w,p,w,w,w,w,p,w" +
"\nw,p,p,p,p,p,p,w,w,p,p,p,p,w,w,p,p,p,p,w,w,p,p,p,p,p,p,w" +
"\nw,w,w,w,w,w,p,w,w,w,w,w,h,w,w,h,w,w,w,w,w,p,w,w,w,w,w,w" +
"\nb,b,b,b,b,w,p,w,w,w,w,w,h,w,w,h,w,w,w,w,w,p,w,b,b,b,b,b" +
"\nb,b,b,b,b,w,p,w,w,h,h,h,h,h,h,h,h,h,h,w,w,p,w,b,b,b,b,b" +
"\nb,b,b,b,b,w,p,w,w,h,w,w,w,d,d,w,w,w,h,w,w,p,w,b,b,b,b,b" +
"\nw,w,w,w,w,w,p,w,w,h,w,b,b,b,b,b,b,w,h,w,w,p,w,w,w,w,w,w" +
"\nh,h,h,h,h,h,p,h,h,h,w,b,b,b,b,b,b,w,h,h,h,p,h,h,h,h,h,h" +
"\nw,w,w,w,w,w,p,w,w,h,w,b,b,b,b,b,b,w,h,w,w,p,w,w,w,w,w,w" +
"\nb,b,b,b,b,w,p,w,w,h,w,w,w,w,w,w,w,w,h,w,w,p,w,b,b,b,b,b" +
"\nb,b,b,b,b,w,p,w,w,h,h,h,h,h,s,h,h,h,h,w,w,p,w,b,b,b,b,b" +
"\nb,b,b,b,b,w,p,w,w,h,w,w,w,w,w,w,w,w,h,w,w,p,w,b,b,b,b,b" +
"\nw,w,w,w,w,w,p,w,w,h,w,w,w,w,w,w,w,w,h,w,w,p,w,w,w,w,w,w" +
"\nw,p,p,p,p,p,p,p,p,p,p,p,p,w,w,p,p,p,p,p,p,p,p,p,p,p,p,w" +
"\nw,p,w,w,w,w,p,w,w,w,w,w,p,w,w,p,w,w,w,w,w,p,w,w,w,w,p,w" +
"\nw,p,w,w,w,w,p,w,w,w,w,w,p,w,w,p,w,w,w,w,w,p,w,w,w,w,p,w" +
"\nw,o,p,p,w,w,p,p,p,p,p,p,p,h,h,p,p,p,p,p,p,p,w,w,p,p,o,w" +
"\nw,w,w,p,w,w,p,w,w,p,w,w,w,w,w,w,w,w,p,w,w,p,w,w,p,w,w,w" +
"\nw,w,w,p,w,w,p,w,w,p,w,w,w,w,w,w,w,w,p,w,w,p,w,w,p,w,w,w" +
"\nw,p,p,p,p,p,p,w,w,p,p,p,p,w,w,p,p,p,p,w,w,p,p,p,p,p,p,w" +
"\nw,p,w,w,w,w,w,w,w,w,w,w,p,w,w,p,w,w,w,w,w,w,w,w,w,w,p,w" +
"\nw,p,w,w,w,w,w,w,w,w,w,w,p,w,w,p,w,w,w,w,w,w,w,w,w,w,p,w" +
"\nw,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,w" +
"\nw,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w" +
"\nb,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b" +
"\nb,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b";

function setupMap(){
    var pelletRad = 2.25;
    var superPelletRad = 4;
    var pelletsToLoad = [];
    var isSuperPellet = [];
    var wallsWidth = 20;
    var wallsToLoad = [];

    const lines = level1.split("\n");
    lines.shift();

    var mapW = 0, mapH = lines.length;
    var xyWalls = Array(mapH);
    var xyRails = Array(mapH);

    for (var i = 0; i < lines.length; i++){
        var currLine = lines[i];
        var tokens = currLine.split(",");

        mapW = tokens.length;
        xyWalls[i] = Array(mapW).fill(false);
        xyRails[i] = Array(mapW).fill(vec2(0,0));
        
        for (var j = 0; j < tokens.length; j++){
            switch (tokens[j]){
                case "w":
                    wallsToLoad.push(vec2(j + .5, lines.length - i)); xyWalls[i][j] = true; break;
                case "s":
                    pacmanPos = vec2((j + .5)*20, (lines.length - i)*20); break;
                case "o":
                    pelletsToLoad.push(vec2(j + .5, lines.length - i));
                    isSuperPellet.push(true)
                    xyRails[i][j] = vec2((j + .5)*20, (lines.length - i)*20);
                    break;
                case "p":
                    pelletsToLoad.push(vec2(j + .5, lines.length - i));
                    isSuperPellet.push(false)
                    xyRails[i][j] = vec2((j + .5)*20, (lines.length - i)*20);
                    break;
                case "h":
                    xyRails[i][j] = vec2((j + .5)*20, (lines.length - i)*20); break;
            }
        }
    }

    setupPellets(pelletsToLoad, pelletRad, superPelletRad, isSuperPellet);

    setupWalls(wallsToLoad, wallsWidth);

    setupRailways(mapW, mapH, xyWalls, xyRails);

}
