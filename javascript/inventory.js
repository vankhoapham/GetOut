var canvas1 = document.getElementById("inventory");
var ctx = canvas1.getContext('2d');
canvas1.width = 50;
canvas1.height = 640;

bgImg = new Image();
bgImg.src = "images/Dungeon_A1.png";
var mapX=0; mapY=33;
var map = [
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
];
bgImg.onload=function(){
    drawInventory();
};
window.addEventListener('keydown', pickUp, false);
function pickUp(event) {

        if (event.keyCode == 74)// key J
        {
            map.splice(0,1,"1");
        }console.log(map[0][0]);

    }


function drawInventory(){
    for(var row = 0; row < map.length;row++){
        Y = row * SIZE;
        for (var col = 0; col < map[row].length;col++){
            if(map[row][col]===1){
                mapX = 50;
            }
            else if(map[row][col]===0){
                mapX = 0;
            }
            X = col * SIZE;
            ctx.drawImage(bgImg,
                mapX,mapY,SIZE,SIZE,
                X, Y, SIZE, SIZE);
        }
    }


}
