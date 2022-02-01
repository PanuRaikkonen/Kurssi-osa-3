import SodexoData from "./modules/sodexo-data";
import FazerData from "./modules/fazer-data";
import { fetchData } from "./modules/network";

let curLang = "fi";

/**
 * Renders menu courses on page
 *
 */
const createMenu = (data, targetId) => {
  const ulElement = document.querySelector("#" + targetId);
  ulElement.innerHTML = "";
  for (const item of data) {
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
    createMenu(SodexoData.coursesEn, "sodexoMenu");
    createMenu(FazerData.coursesEn, "fazerMenu");
  } else {
    curLang = "fi";
    createMenu(SodexoData.coursesFi, "sodexoMenu");
    createMenu(FazerData.coursesFi, "fazerMenu");
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
  //TODO: switch to real sodexo api data (no need to use proxy)
  //Update sodexo module to be similar to Fazer
  createMenu(SodexoData.coursesFi, "sodexoMenu");

  fetchData("https://www.sodexo.fi/ruokalistat/output/weekly_json/152").then(
    (data) => {
      console.log(data);
    }
  );

  //Render Fazer
  fetchData(FazerData.dataUrlFi, true).then((data) => {
    //TODO: when using proxy move JSON.parse stuff to Network module??
    const menuData = JSON.parse(data.contents);

    //TODO: how to set correct weekday
    const courses = FazerData.parseFazerMenuDay(menuData.LunchMenus, 1);
    createMenu(courses, "fazer");
  });

  //Event listeners
  document.querySelector("#language").addEventListener("click", () => {
    switchLang();
  });

  document.querySelector("#random").addEventListener("click", () => {
    document.querySelector("#random1").innerHTML =
      //TODO: fix random
      "Random Dish: " + randomItem(currentMenu);
  });

  document.querySelector("#sort").addEventListener("click", () => {
    currentMenu = sortMenu(currentMenu, "asc");
    //TODO: fix sort for both restaurant
    // createMenu();
  });
};
init();
