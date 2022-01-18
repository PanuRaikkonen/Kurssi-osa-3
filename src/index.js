import SodexoData from "./modules/sodexo-data";

let curLang = "en";
let currentMenu = SodexoData.coursesEn;

/**
 * Renders menu courses on page
 *
 */
const createMenu = () => {
  const ulElement = document.querySelector("#menu");
  ulElement.innerHTML = "";
  for (const item of currentMenu) {
    const listElement = document.createElement("li");
    listElement.textContent = item;
    ulElement.appendChild(listElement);
  }
};

/**
 * Switches language of menu on page
 *
 */
const switchLang = () => {
  if (curLang === "fi") {
    curLang = "en";
    currentMenu = SodexoData.coursesEn;
  } else {
    curLang = "fi";
    currentMenu = SodexoData.coursesFi;
  }
};

/**
 * Sorts menu courses on page
 *
 * @param {Array} menu - menu array
 * @param {string} order - 'asc' / 'desc'
 * @returns {Array} - sorted menu
 */
const sortMenu = (menu, order = "asc") => {
  const sortedMenu = menu.sort();
  if (order === "desc") {
    sortedMenu.reverse();
  }
  return sortedMenu;
};

/**
 * Pick random dish
 *
 * @param {Array} menu - menu
 * @returns {string} - random item
 */
const randomItem = (menu) => {
  const randomIndex = [Math.floor(Math.random() * menu.length)];
  return menu[randomIndex];
};

/**
 * Initialize application
 */
const init = () => {
  createMenu();

  document.querySelector("#language").addEventListener("click", () => {
    switchLang();
    createMenu();
  });

  document.querySelector("#sort").addEventListener("click", () => {
    currentMenu = sortMenu(currentMenu, "asc");
    createMenu();
  });

  document.querySelector("#random").addEventListener("click", () => {
    document.querySelector("#random1").innerHTML =
      "Random Dish: " + randomItem(currentMenu);
  });
};
init();
