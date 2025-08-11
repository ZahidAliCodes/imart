const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const verticalBar = item.querySelector(".faq-icon .vertical");

    questionBtn.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));
        document.querySelectorAll(".faq-icon .vertical").forEach((v) => (v.style.display = "inline"));

        if (!isOpen) {
            answer.style.display = "block";
            verticalBar.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".download-tab-wrapper");

  wrappers.forEach(wrapper => {
    const tabTrigger = wrapper.querySelector(".download-tab-trigger");
    const tabMenu = wrapper.querySelector(".download-tab-menu");
    const arrow = tabTrigger ? tabTrigger.querySelector(".arrow") : null;

    if (tabTrigger && tabMenu && arrow) {
      tabTrigger.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent document click from immediately hiding menu
        tabMenu.classList.toggle("hidden");
        arrow.classList.toggle("rotate");
      });

      document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
          tabMenu.classList.add("hidden");
          arrow.classList.remove("rotate");
        }
      });
    }
  });
});


        document.querySelectorAll('.stars').forEach(starContainer => {
    const rating = parseFloat(starContainer.getAttribute('style').match(/--rating: ([\d.]+)/)[1]);
    starContainer.style.setProperty('--rating', rating);
});


