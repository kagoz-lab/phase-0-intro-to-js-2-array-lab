// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push("Ralph");

  };


  function destructivelyPrependCat() {
    return cats.unshift("Bob");

  };
    
  

  function destructivelyRemoveLastCat() {
    return cats.pop("Ralph");

  }
  function  destructivelyRemoveFirstCat() {
    return cats.shift("Bob")
}

function appendCat() {
    return [...cats,"Broom"];

}

function prependCat() {
    return ["Arnold"].concat(cats.map((cat) => cat));
}
function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1)
}
 

