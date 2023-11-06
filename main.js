// first upload
let faqWrapper = document.querySelector(".faq3_list");
let chevron = `https://uploads-ssl.webflow.com/63bfe07d48817929da122d0d/63c555d34a9d3a4234b82473_chevron.svg`;

try {
  const swiper = new Swiper("#swiper", {
    // Optional parameters
    direction: "horizontal",
    freeMode: {
      enabled: true,
      sticky: false,
    },
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
let form = $("form");

if (form.length) {
  form[0].reset();

  let radioBtns = $("input[type='radio']");
  let addToCartBtn = $("[data-trigger='cart']");

  radioBtns.each((i, radioButton) => {
    $(radioButton).attr("autocomplete", "off");
    $(radioButton).change(() => {
      let link = $(radioButton).attr("data-link");
      addToCartBtn.attr("href", link);
    });
  });

  if (radioBtns.length) {
    let checkedRadioBtn = radioBtns.length === 1 ? radioBtns[0] : Array.from(radioBtns).find((btn) => $(btn)[0].labels[0].textContent.match(/subscribe|subscription/i));

    if (checkedRadioBtn && addToCartBtn.length) {
      $(checkedRadioBtn).prev().toggleClass("w--redirected-checked", true);
      addToCartBtn.attr("href", $(checkedRadioBtn).attr("data-link"));
    }
  }
}

document.getElementById("newsletter-trigger").addEventListener("click", function () {
  window._klOnsite = window._klOnsite || [];
  window._klOnsite.push(["openForm", "Sy4cC5"]);
});
