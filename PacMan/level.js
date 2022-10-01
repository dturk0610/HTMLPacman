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
    var pelletRad = 3;
    var pelletsToLoad = [];
    var wallsWidth = 20;
    var wallsToLoad = [];

    const lines = level1.split("\n");

    for (var i = 0; i < lines.length; i++){
        var currLine = lines[i];
        var tokens = currLine.split(",");
        for ( var j = 0; j < tokens.length; j++ ){
            switch (tokens[j]){
                case "p":
                    pelletsToLoad.push(vec2(j + .5, lines.length - i)); break;
                case "w":
                    wallsToLoad.push(vec2(j + .5, lines.length - i)); break;
                case "s":
                    pacmanPos = vec2((j + .5)*20, (lines.length - i)*20); break;
            }
        }
    }

    setupPellets(pelletsToLoad, pelletRad);

    setupWalls(wallsToLoad, wallsWidth);

}
