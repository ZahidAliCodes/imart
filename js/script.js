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
const tabTrigger = document.getElementById("downloadTabTrigger");
const tabMenu = document.getElementById("downloadTabMenu");

if (tabTrigger && tabMenu) {
  tabTrigger.addEventListener("click", () => {
    tabMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (e) {
    if (!tabTrigger.contains(e.target) && !tabMenu.contains(e.target)) {
      tabMenu.classList.add("hidden");
    }
  });
}

