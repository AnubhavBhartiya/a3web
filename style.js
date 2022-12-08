let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

$(document).ready(function(){
      // Activate Carousel
      $("#myCarousel").carousel("pause");
    
      // Click on the button to start sliding 
      $("#myBtn").click(function(){
        $("#myCarousel").carousel("cycle");
      });
    
      // Click on the button to stop sliding 
      $("#myBtn2").click(function(){
        $("#myCarousel").carousel("pause");
      });
        
      // Enable Carousel Indicators
      $(".item1").click(function(){
        $("#myCarousel").carousel(0);
      });
      $(".item2").click(function(){
        $("#myCarousel").carousel(1);
      });
      $(".item3").click(function(){
        $("#myCarousel").carousel(2);
      });
      $(".item4").click(function(){
        $("#myCarousel").carousel(3);
      });
        
      // Enable Carousel Controls
      $(".left").click(function(){
        $("#myCarousel").carousel("prev");
      });
      $(".right").click(function(){
        $("#myCarousel").carousel("next");
      });
    });