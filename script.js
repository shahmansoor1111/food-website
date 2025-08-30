function toggleMenu() {
      document.getElementById("nav-links").classList.toggle("active");
    }
     let slideIndex = 0;
    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
      if (index >= totalSlides) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = totalSlides - 1;
      }
      slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    function moveSlide(step) {
      slideIndex += step;
      showSlide(slideIndex);
    }

    // Auto-slide every 3 seconds
    setInterval(() => {
      moveSlide(1);
    }, 3000);
    const eat = document.getElementById("eat");

  window.addEventListener("scroll", () => {
    const rect = eat.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      eat.classList.add("typing");
    }
  });
  
  const text = "Our Featured Fast Foods";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      document.getElementById("drink").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 80); // typing speed
    }
  }
  window.addEventListener("scroll", () => {
    const section = document.getElementById("drink");
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight && i === 0) {
      typeEffect();
    }
  });