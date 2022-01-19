import LunchMenu from "../assets/sodexo-day-example.json";

const coursesEn = [];
const coursesFi = [];

/**
 * Extract courses titles from Sodexo menu JSON course
 *
 * @param {string} menu - JSON menu to be parsed
 */
const parseSodexoMenu = (menu) => {
  const courses = Object.values(menu);
  // console.log(menu);

  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};
parseSodexoMenu(LunchMenu.courses);

const SodexoData = { coursesEn, coursesFi };
export default SodexoData;
