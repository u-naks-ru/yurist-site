const categories = {
  civil: {
    title: "Гражданские дела", folder: "civil", label: "гражданские дела",
    backgrounds: ["#BEAF9B", "#BFB09A", "#D5C7B4", "#C4B6A2", "#BBAA96", "#DFD2C0"]
  },
  criminal: {
    title: "Уголовные дела", folder: "criminal", label: "уголовные дела",
    backgrounds: ["#080B0D", "#10161D", "#050708", "#05080A", "#090B0D", "#040506"]
  },
  bankruptcy: {
    title: "Банкротство", folder: "bankruptcy", label: "банкротство",
    backgrounds: ["#081522", "#0C1319", "#0A1621", "#0D1A26", "#0C1823", "#0B1926"]
  }
};

const homeView = document.querySelector("#home-view");
const categoryView = document.querySelector("#category-view");
const categoryHeading = document.querySelector("#category-heading");
const categoryGrid = document.querySelector("#category-grid");

function showCategory(key) {
  const category = categories[key];
  if (!category) return;
  categoryHeading.textContent = category.title;
  categoryGrid.replaceChildren();
  for (let number = 1; number <= 6; number += 1) {
    const image = document.createElement("img");
    const filename = `${category.folder}_${String(number).padStart(2, "0")}.png`;
    image.src = `images/${category.folder}/${filename}`;
    image.alt = `Карточка ${number}: ${category.label}`;
    image.loading = "lazy";
    image.style.backgroundColor = category.backgrounds[number - 1];
    categoryGrid.append(image);
  }
  homeView.hidden = true;
  categoryView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  categoryView.hidden = true;
  homeView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => showCategory(button.dataset.open));
});
document.querySelector("#back-button").addEventListener("click", showHome);
