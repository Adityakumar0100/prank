document.addEventListener("DOMContentLoaded",function(){
    const button=document.querySelector(".no");
    button.addEventListener("mouseenter",function(){
         let randomX=Math.random()*(window.innerWidth-button.clientWidth);
         let randomy=Math.random()*(window.innerHeight-button.clientHeight);

         button.style.left=`${randomX}px`;
         button.style.top=`${randomy}px`;
    });

});

function playAudio() {
     var audio = document.getElementById('hover-sound');
     audio.play();
}
function playAudio2() {
     var audio = document.getElementById('hovso');
     audio.play();
}