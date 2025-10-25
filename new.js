const slides = document.querySelectorAll('.slides img')
let slideindex = 0;
let intervalid = null;
img = document.getElementById("img")

///* initialize */();
document.addEventListener('DOMContentLoaded', initialize)


function initialize(){
    if(slides.length > 0){
        slides[slideindex].classList.add("displayslide");
        intervalid = setInterval(nextslide, 5000)
    }
    
        

}

function showslide(index){
    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = slideindex.length - 1
    }
    slides.forEach(slide =>{
        slide.classList.remove('displayslide');
    })
    slides[slideindex].classList.add('displayslide');

}

function prevslide(){
    slideindex--;
    showslide(slideindex)
    clearInterval(intervalid);
    

}

function nextslide(){
    slideindex++;
    showslide(slideindex);

}