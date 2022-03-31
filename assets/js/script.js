function moveLeft(){
    let left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -=100;
    if(left>=0){
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

setInterval(function(){
    var characterLeft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    
    console.log("characterLeft : "+characterLeft);

    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    console.log("blockLeft : "+blockLeft);

    var blockTop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    
    var x=characterLeft==blockLeft;

    console.log(x);

    if( x && blockTop<700 && blockTop>500){
        console.log("true");
            alert("Game Over");
            $("#block").css("animation","none");
    
    }
},10);
