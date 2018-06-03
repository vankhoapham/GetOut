var canvas1 = document.getElementById("inventory");
var ctx = canvas1.getContext('2d');
canvas1.width = 50;
canvas1.height = 640;

bgImg = new Image();
bgImg.src = "images/box.png";
const SIZE = 64;
var IX=0; IY=0;
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



function drawInventory(){
    for(var row = 0; row < map.length;row++){
        Y = row * SIZE;
        for (var col = 0; col < map[row].length;col++){
            X = col * SIZE;
            ctx.drawImage(bgImg,
                IX,IY,SIZE,SIZE,
                X, Y, SIZE, SIZE);
        }
    }


}

const item = [];
itemImg = new Image();
itemImg.src = "images/item/1.png";

var i = 0;
function pickUp(e) {

    if (e.keyCode == 74)// key J
    {
        if ( i==0 && player.x == 383 && player.y == 355 ||  i==0 && player.x == 362 && player.y==376)
        {
            item.push("item1");
            ctx.drawImage(itemImg,
                8,10,32,32);
            alert("You have receive demo item");
             i=1;
        }
        else if (i=1)
        {
            alert("There is nothing on the table");
        }


    }console.log(item);
    console.log(player.x,player.y)
}

window.addEventListener('keydown', pickUp, false);