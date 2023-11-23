let currentSlides = {
    verhalen: 0,
    nieuws: 0,
    social: 0,
  };

  const slides = {
    verhalen: ["./images/verhaal3.png", "./images/verhaal1.png"],
    nieuws: ["./images/nieuwspng1.png", "./images/nieuwspng.png"],
    social: ["./images/instapost.png", "./images/verhaal2.png"],
  };

  function showSlide(section) {
    document.getElementById(`${section}Image`).src =
      slides[section][currentSlides[section]];
  }

  function changeSlide(n, section) {
    currentSlides[section] =
      (currentSlides[section] + n + slides[section].length) %
      slides[section].length;
    showSlide(section);
  }

  showSlide("verhalen"); // Initial display for the first section
  showSlide("nieuws"); // Initial display for the second section
  showSlide("social"); // Initial display for the third section