$(document).ready(function(){
    $(".aicons").mouseover(function(){
        $(".aicons").css("opacity", "0.5");
        $(this).css("opacity", "1");
    });
    $(".aicons").mouseout(function(){
        $(".aicons").css("opacity", "1");
    });
    
});

var i=0;//star index
var images =[];
var time= 3000; //tiempo en milisegundos
// image list
images[0]='../img/quality/joncostas1.jpg';
images[1]='../img/quality/joncostas2.jpg';
images[2]='../img/quality/joncostas3.jpg';
images[3]='../img/quality/joncostas8.jpg';

//create function

function changeImage(){
    document.slide.src = images[i];
    if (i<images.length -1) {
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImage()",time);
}
window.onload =changeImage;