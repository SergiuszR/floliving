// first upload
let faqWrapper = document.querySelector(".faq3_list");
let chevron = `https://uploads-ssl.webflow.com/63bfe07d48817929da122d0d/63c555d34a9d3a4234b82473_chevron.svg`;

try {
  const swiper = new Swiper("#swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: "auto",
    keyboard: {
      enabled: true,
    },
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: "#is-right",
      prevEl: "#is-left",
    },
  });
  const swiper2 = new Swiper("#swiper-2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
    },
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: "#is-right-2",
      prevEl: "#is-left-2",
    },
  });
  const swiper3 = new Swiper("#swiper-3", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
    },
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: "#is-right-2",
      prevEl: "#is-left-2",
    },
  });
} catch (err) {}
