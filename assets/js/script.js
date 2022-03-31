function moveLeft(){
    let left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -=100;
    if(left>-100){
        character.style.left=left+"px";
    }
}

function moveRight(){
    let left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left +=100;
    if(left<500){
        character.style.left=left+"px";
    }
    
}

$(this).on("keydown",function(event){
    if(event.key=="ArrowLeft"){
        moveLeft();
    }

    if(event.key=="ArrowRight"){
        moveRight();
    }
});

$("#block").on("animationiteration",function(){
    var block=$("#block");
    var randomBlock=Math.floor(Math.random()*5);
    var left =randomBlock*100;
    console.log(left);
    var l=left+"px";
   $("#block").css("left",l);
   console.log(l);
    //block.style.left=left+"px";
});

