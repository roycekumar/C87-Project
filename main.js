var canvas=new fabric.Canvas('myCanvas');
player_width=30;
player_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
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
    fabric.Image.fromURL(get_image,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(player_width);
        block_image_object.scaleToHeight(player_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=="80"){
        console.log("p and shift key pressed together");
        player_width=player_width+10;
        player_height=player_height+10;
        document.getElementById("current_width").innerHTML=player_width;
        document.getElementById("current_height").innerHTML=player_height;
    }
    if(e.shiftKey==true && keypressed=="77"){
        console.log("m and shift key pressed together");
        player_width=player_width-10;
        player_height=player_height-10;
        document.getElementById("current_width").innerHTML=player_width;
        document.getElementById("current_height").innerHTML=player_height;
    }
    if(keypressed=="70"){
        new_image("ironman_face.png");
        console.log("f");
    }
    if(keypressed=="66"){
        new_image("spiderman_body.png");
        console.log("b");
    }
    if(keypressed=="76"){
        new_image("hulk_legs.png");
        console.log("l");
    }
    if(keypressed=="82"){
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if(keypressed=="72"){
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
    if(keypressed=="38"){
        up();
        console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
}