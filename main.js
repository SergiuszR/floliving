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

// radio logic
const form = document.querySelector("form");
const radioBtns = document.querySelectorAll("input[type='radio']");
const addToCartBtn = document.querySelector("[data-trigger='cart']");
form.reset();
radioBtns.forEach((radioButton) => {
  radioButton.setAttribute("autocomplete", "off");
  radioButton.addEventListener("change", () => {
    const link = radioButton.getAttribute("data-link");
    addToCartBtn.setAttribute("href", link);
  });
});

const optionsBox = document.querySelector(".product__details-options-box");
const checkedRadioBtn = radioBtns.length === 1 ? radioBtns[0] : Array.from(radioBtns).find((btn) => btn.labels[0].textContent.match(/subscribe/i));
if (checkedRadioBtn) {
  console.log(checkedRadioBtn);
  checkedRadioBtn.previousElementSibling.classList.toggle("w--redirected-checked", true);
  addToCartBtn.href = checkedRadioBtn.getAttribute("data-link");
}

document.getElementById("newsletter-trigger").addEventListener("click", function () {
  window._klOnsite = window._klOnsite || [];
  window._klOnsite.push(["openForm", "Sy4cC5"]);
});
