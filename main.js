var canvas=new fabric.Canvas('myCanvas');

block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
        });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object=Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_img_object);
        });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == '80'){
        console.log("p and shift are pressed together");
        block_img_width= block_img_width + 10;
        block_img_height= block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height; 
    }
    if(e.shiftKey == true && keypress == '77'){
        console.log("m and shift are pressed together");
        block_img_width= block_img_width - 10;
        block_img_height= block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height; 
    }
    if(keypress == '38'){
        console.log("up");
    }
    if(keypress == '40'){
        console.log("down");
    }
    if(keypress == '37'){
        console.log("left");
    }
    if(keypress == '39'){
        console.log("right");
    }
    if(keypress == '87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypress == '71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keypress == '76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keypress == '84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypress == '82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypress == '89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keypress == '68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypress == '85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keypress == '67'){
        new_image('cloud.jpg');
        console.log("c");
    }

}