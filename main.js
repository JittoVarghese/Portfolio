// Navigations starts

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

// Navigations ends

// Text animation starts

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
     });

    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
// Text animation ends


// Testimonial carousel starts
$(".testimonial_slider_area").owlCarousel({
  // autoplay:true,
  slideSpeed:3000,
  items:3,
  nav:true,
  navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
  margin:30,
  dots:false,
  responsive:{
    320:{
      items:1
    },
    767:{
      items:2
    },
    600:{
      items:3
    },
    1000:{
      items:3
    },
  }
});
// Testimonial carousel ends
var typed = new Typed('#element', {
  strings: ['Front End Developer ', 'Wordpress Developer','UI Designer'],
  typeSpeed: 70,
  loop:true,

});

 var form = document.getElementById('contact-form').addEventListener('submit',function(event){
  event.preventDefault();
  var data = new FormData(event.target);
  fetch("https://formspree.io/f/xeqyvrkz",{
    method:'POST',
    body:data,
  }).then(response =>{
    if(response.ok){
      alert('Success');
    } else{
      alert('Error');
    }
  });
  document.getElementById('contact-form').reset();
});