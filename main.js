// first upload
let faqWrapper = document.querySelector(".faq3_list");
let chevron = `https://uploads-ssl.webflow.com/63bfe07d48817929da122d0d/63c555d34a9d3a4234b82473_chevron.svg`;

fetch(
  "https://floliving.zendesk.com/api/v2/help_center/articles.json?sort_by=updated_at&sort_order=aschttps://floliving.zendesk.com/api/v2/help_center/articles.json?sort_by=updated_at&sort_order=asc",
  {
    headers: {
      Accept: "*/*",
    },
    method: "GET",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    let articles = data.articles;

    articles.forEach((article) => {
      let accordionItem = document.createElement("div");
      accordionItem.classList.add("faq3_accordion");
      accordionItem.innerHTML = `<div class="faq3_question"><div class="size-4">${article.title}</div><img src="${chevron}" loading="lazy" alt="" class="faq3_icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div><div style="width: 100%;" class="faq3_answer"><div class="margin-bottom--s"><p class="no-margin-bottom">${article.body}</div></div>`;
      faqWrapper.append(accordionItem);
    });
  });

const swiper = new Swiper("#swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,

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
