let slideIndex = 0;
showSlide(slideIndex);

 function plusSlides(n) {
    showSlide(slideIndex += n);
 }

 function currentSlides(n) {
    showSlide(slideIndex = n)
 }


    




function showSlide(n){
let i ;
let slider=document.querySelectorAll(".slider");
let dots=document.querySelectorAll(".dot");
if (n < 0){
    slideIndex = slider.length -1;

}
if (n >= slider.length){
    slideIndex = 0;
}
for (i=0;i < slider.length; i++){
    slider[i].style.display = "none";
}
for (i =0;i<dots.length;i++){
    dots[i].className = dots[i].className.replace(" active", "");
}
   slider[slideIndex].style.display = "block";
   dots[slideIndex].className += " active";
   

}