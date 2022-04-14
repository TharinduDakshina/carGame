var count=0;

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
    count++;
});

$("#block").on("animationiteration",function(){
    var randomBlock=Math.floor(Math.random()*5);
    var left =randomBlock*100;
    var l=left+"px";
    $("#block").css("left",l);
    count++;
});

setInterval(function(){
    var characterLeft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));


    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));


    var blockTop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));


    var block2Left=parseInt(window.getComputedStyle(block2).getPropertyValue("left"));


    var block2Top=parseInt(window.getComputedStyle(block2).getPropertyValue("top"));

    $("#score>span").text(count);

    /*if (blockTop==characterLeft){
        count++;
    }*/

    if( characterLeft==blockLeft && blockTop<700 && blockTop>600){
        console.log("true ");

        alert("Game Over . Score ---> "+count-1);
        $("#block").css("animation","none");
        $("#block2").css("animation","none");
    }else{

    }

    if(characterLeft==block2Left && block2Top<700 && block2Top>500){
        alert("Game Over . Score---> "+count-1);
        $("#block2").css("animation","none");
        $("#block").css("animation","none");
    }else{
        /*count++;*/
    }
},10);

var audio = new Audio('audio/backgroundSound.mp3');
audio.play();