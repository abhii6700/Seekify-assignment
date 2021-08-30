
/* SHOW NAV BAR IN MOBILE */

function showNavBar() {
    var nav = document.getElementById("nav-mobile")
    if(nav.style.display === 'block'){
        nav.style.display = 'none'
        console.log('if')
    } else{
        nav.style.display = 'block'
        console.log('else')
    }

}

/* SLIDESHOW */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/* TESTIMONIAL */

var reviewIndex = 0;
showReview();

function showReview() {
  var i;
  var review = document.getElementsByClassName("review");

  for (i = 0; i < review.length; i++) {
    review[i].style.display = "none";  
  }
  reviewIndex++;
  if (reviewIndex > review.length) {reviewIndex = 1}    

  review[reviewIndex-1].style.display = "block"; 
  setTimeout(showReview, 5000); // Change image every 5 seconds
}

