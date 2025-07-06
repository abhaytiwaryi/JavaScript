const marvel_heroes = ["thor", "ironman", "hulk"]
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
// console.log(anotherArray.flat(Infinity));
// console.log(anotherArray);

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

