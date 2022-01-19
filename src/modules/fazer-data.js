import FazerMenuEn from "../assets/fazer-dataEn.json";
import FazerMenuFi from "../assets/fazer-data.json";

const coursesEn = [];
const coursesFi = [];

/**
 * Extract courses titles from Fazer menu JSON course
 *
 * @param {string} menu - JSON menu to be parsed
 */
const parseFazerMenu = (menu) => {
  const courses = Object.values(FazerMenuEn);

  const test = courses.map((nested) =>
    nested.map((element) => (element = !null))
  );
  // const result = courses.filter((i) => Object.values(i)[1].LunchMenus);

  // const filtered = courses.filter((x) => (x = !null));

  console.log(test);
};
parseFazerMenu(FazerMenuEn.courses);

const FazerData = { coursesEn, coursesFi };
export default FazerData;
