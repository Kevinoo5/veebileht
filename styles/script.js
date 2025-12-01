//Script hakkab töötama siis, kui leht on täielikult laetud
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
// Vajutamisel muutub menüü nähtavaks või peidetuks olenevalt kas on active klass olemas või mitte.
  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
// Võimalikud review'd.
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
/* Current hoiab meeles, milline review on hetkel nähtaval.
const-id viitavad HTML elementidele, kus review tekst ja autor kuvatakse.
*/
  let current = 0;
  const textEl = document.getElementById("review-text");
  const authorEl = document.getElementById("review-author");
  const reviewBox = document.querySelector(".review-box");
// Kui kõik on leitud hakkavad review'd vahetuma iga 6 sekundi tagant haistusega.
  if (textEl && authorEl && reviewBox) {
    function nextReview() {
      reviewBox.style.opacity = 0;
 //Review lõpetamine ja järgmise kuvamine, current muutub järgmise review indeksiks ja tekstid, autorid vahetuvad.
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
