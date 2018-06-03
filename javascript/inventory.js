var canvas1 = document.getElementById("inventory");
var ctx = canvas1.getContext('2d');
canvas1.width = 50;
canvas1.height = 640;

bgImg = new Image();
bgImg.src = "images/box.png";
const SIZE = 64;
var mapX=0; mapY=0;
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


function drawInventory(){
    for(var row = 0; row < map.length;row++){
        Y = row * SIZE;
        for (var col = 0; col < map[row].length;col++){
            X = col * SIZE;
            ctx.drawImage(bgImg,
                mapX,mapY,SIZE,SIZE,
                X, Y, SIZE, SIZE);
        }
    }


}

var item = [[0]];
itemImg = new Image();
itemImg.src = "images/item/1.png";

function pickUp(event) {

    if (event.keyCode == 74)// key J
    {
        item.push(1);
    }console.log(item);
}

itemImg.onload=function(){
    drawItem();
};