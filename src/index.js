const coursesEn = [
  "Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries",
];
const coursesFi = [
  "Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset",
];

const menu = document.querySelector("#menu");
//Tyhjennä menu
const clearMenu = (owner) => {
  while (owner.firstChild) owner.removeChild(owner.lastChild);
};

//Rakenna menu
const createMenu = (objects, owner) => {
  clearMenu(owner);

  for (const object of objects) {
    const menuObject = document.createElement("li");
    menuObject.textContent = object;
    owner.appendChild(menuObject);
  }
};

createMenu(coursesEn, menu);

//Vaihda Kieltä
const chLang = document.querySelector("#language");
let curLang = "en";

chLang.addEventListener("click", () => {
  if (curLang === "fi") {
    curLang = "en";
    createMenu(coursesEn, menu);
    random.removeChild(random);
  } else if (curLang === "en") {
    curLang = "fi";
    createMenu(coursesFi, menu);
  }
});
//Lajittele menun objektit
const sortMenu = (menu, order) => {
  if (order) {
    return menu.sort((a, b) => {
      return a.localeCompare(b);
    });
  } else {
    return menu.sort((a, b) => {
      return b.localeCompare(a);
    });
  }
};

//Nykyinen menu
const CurrentMenu = (menu) => {
  const array = [];
  for (childNode of menu.childNodes) {
    array.push(childNode.textContent);
  }
  return array;
};

const sort = document.querySelector("#sort");
let order = true;

sort.addEventListener("click", () => {
  createMenu(sortMenu(CurrentMenu(menu), order), menu);
  order = order ? false : true;
});

//Random Ruoka
const random = document.querySelector("#random");

const randomItem = (menu) => {
  const RI = [Math.floor(Math.random() * menu.childNodes.length)];
  const rando = menu.childNodes[RI];
  return rando.textContent;
};

random.addEventListener("click", () => {
  document.querySelector("#random1").innerHTML =
    "Random Dish: " + randomItem(menu);
});
