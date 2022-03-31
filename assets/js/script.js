function moveLeft(){
    let left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -=100;
    if(left>370){
        character.style.left=left+"px";
    }
}

function moveRight(){
    let left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left +=100;
    if(left<=772){
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

$("#block2").on("animationiteration",function(){
    var randomBlock=Math.floor(Math.random()*5);
    var left =randomBlock*100;
    var l=left+"px";
   
   $("#block2").css("left",l);
});

$("#block").on("animationiteration",function(){
    var randomBlock=Math.floor(Math.random()*5);
    var left =randomBlock*100;
    var l=left+"px";
   $("#block").css("left",l);
});

