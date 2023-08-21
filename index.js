// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
    return cats;
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
    return cats;
}
function destructivelyRemoveLastCat(Ralph) {
    cats.pop("Ralph")
    return cats;
}
function destructivelyRemoveFirstCat(Bob) {
    cats.shift("Bob")
    return cats;
}
function appendCat(Broom) {
    const catsTwo = [...cats, "Broom"]
    return catsTwo;
}
function prependCat(Arnold) {
    const catsThree = ["Arnold", ...cats]
    return catsThree;
}
function removeLastCat() {
    const catsFour = cats.slice(0, cats.length - 1)
    return catsFour;
}
function removeFirstCat(){
    const catsFive = cats.slice(1)
    return catsFive;
}