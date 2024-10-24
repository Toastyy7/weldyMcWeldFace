let slideI = 0;
slideshow();



function slideshow(){
let slides = document.getElementsByClassName("slides");
let bullets = document.getElementsByClassName("bullet");

for (let i = 0; i<4; i++){
    slides[i].style.display ="none";
}
slideI++;
if (slideI > slides.length){
    slideI = 1;
}
for(i = 0; i<bullets.length; i++){
    bullets[i].className = bullets[i].className.replace(" active", "");
}

slides[slideI-1].style.display = "block";  
bullets[slideI-1].className += " active";
setTimeout(slideshow, 2000);

}