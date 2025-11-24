document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const reviews = [
    {
      text: "Ostsin Couch Havenist diivani ja olen väga rahul! Väga mugav ja stiilne.",
      author: "Mari K.",
    },
    {
      text: "Suurepärane teenindus ja kiire tarne! Soovitan soojalt.",
      author: "Jaan L.",
    },
    {
      text: "Diivan on tõesti mugav ja näeb välja täpselt nagu pildil.",
      author: "Ahven",
    },
    { text: "Olen väga rahul kvaliteedi ja hinnaga!", author: "Kevin N." },
    {
      text: "Väga meeldiv ostukogemus – kindlasti tellin siit ka tulevikus.",
      author: "Marcus A.",
    },
  ];

  let current = 0;
  const textEl = document.getElementById("review-text");
  const authorEl = document.getElementById("review-author");
  const reviewBox = document.querySelector(".review-box");

  if (textEl && authorEl && reviewBox) {
    function nextReview() {
      reviewBox.style.opacity = 0;

      setTimeout(() => {
        current = (current + 1) % reviews.length;
        textEl.textContent = `"${reviews[current].text}"`;
        authorEl.textContent = `– ${reviews[current].author}`;
        reviewBox.style.opacity = 1;
      }, 500);
    }

    setInterval(nextReview, 6000);
  }
});
