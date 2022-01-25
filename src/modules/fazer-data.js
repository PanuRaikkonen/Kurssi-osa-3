import FazerMenuEn from "../assets/fazer-dataEn.json";
import FazerMenuFi from "../assets/fazer-data.json";

/**
 *Parses Fazer json data to simple array of strings
 *
 * @param {Array} Menus menu data
 * @param {Number} dayOfWeek 0-6
 * @returns {Array} daily menu
 */
const parseFazerMenuDay = (Menus, dayOfWeek) => {
  const dayMenu = Menus[dayOfWeek].SetMenus.map((setMenu) => {
    const name = setMenu.Name;
    let meals = "";
    //TODO: clean output
    for (const meal of setMenu.Meals) {
      meals += meal.Name + ", ";
    }
    return name ? name + ": " + meals : meals;
  });
  return dayMenu;
};
// console.log(parseFazerMenuDay(FazerMenuEn.LunchMenus, 0));

const coursesEn = parseFazerMenuDay(FazerMenuEn.LunchMenus, 0);
const coursesFi = parseFazerMenuDay(FazerMenuFi.LunchMenus, 0);

const FazerData = { coursesEn, coursesFi };
export default FazerData;
