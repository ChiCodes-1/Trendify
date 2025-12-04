window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".trustee-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200); // delay for each card
  });
});
