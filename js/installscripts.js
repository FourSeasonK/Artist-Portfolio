//reference: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

var slideOrder = 1;
showSlides(slideOrder);

function orderSlides(s) {
  showSlides(slideOrder += s);
}

function currentSlide(s) {
  showSlides(slideOrder = s);
}

function showSlides(s) {
  var i;
  var slides = document.getElementsByClassName("picslides");
  var dots = document.getElementsByClassName("image");
  var captionText = document.getElementById("caption");
  if (s > slides.length) {slideOrder = 1}
  if (s < 1) {slideOrder = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideOrder-1].style.display = "block";
  dots[slideOrder-1].className += " active";
  captionText.innerHTML = dots[slideOrder-1].alt;
}

