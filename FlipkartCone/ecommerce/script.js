const morehover=document.querySelector('.more');
const elechover=document.querySelector('.elecdrop');
const fashover=document.querySelector('.fashdrop');
const furniover=document.querySelector('.furnidrop');
const dropdown=document.querySelector('.dropdown-more')
const dropdown2=document.querySelector('.dropdown-more2')
const dropdown3=document.querySelector('.dropdown-more3')
const dropdown4=document.querySelector('.dropdown-more4')



morehover.addEventListener('mouseover',function(){
dropdown.style.display='block';
})

morehover.addEventListener('mouseout',function(){
   
    dropdown.style.display='block';

})


    dropdown.addEventListener('mouseover',function(){
        dropdown.style.display='block';
    })

    dropdown.addEventListener('mouseout',function(){
        dropdown.style.display='none';
    })

   


    fashover.addEventListener('mouseover',function(){
        dropdown2.style.display='block';
    })
    fashover.addEventListener('mouseout',function(){
        dropdown2.style.display='none';
    })

    elechover.addEventListener('mouseover',function(){
        dropdown3.style.display='block';
    })
    elechover.addEventListener('mouseout',function(){
        dropdown3.style.display='none';
    })

    furniover.addEventListener('mouseover',function(){
        dropdown4.style.display='block';
    })
  furniover.addEventListener('mouseout',function(){
        dropdown4.style.display='none';
    })

    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}