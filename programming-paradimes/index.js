//imperative programming
//what to do in details

// pour flour in a bowl
// pour some egg to same bowl
// pour milk
// mix the ingredients
// pour the mix in the mold
// cook for 45mins

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = [];

for (let index = 0; index < nums.length; index++) {


  
  const element = nums[index];
  if (element > 5) result.push(element);
}

// procedural programming
function pourIngredients() {
  // pour flour in a bowl
  // pour some egg to same bowl
  // pour milk
}

function mixAndTransferToMold() {
  // mix the ingredients
  // pour the mix in the mold
}

function cook() {
  // cook for 45mins
}

pourIngredients();
mixAndTransferToMold();
cook();

//functional programming
//first class citizens - variable, argument, function as return value
//pure function ,same input leads to same result. not change anything outside this function

function filterNum() {
  const result = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element > 5) result.push(element);
  }
  return result;
}

//declarative programming

console.log(
  "filtered nums:",
  nums.filter((num) => num > 5)
);

//object oriented programming
//separate concents into entities = object
//entity has set of info and actions = properties and methods
// class is a template/blueprint for the object

// pour flour in a bowl
// pour some egg to same bowl
// pour milk

// mix the ingredients
// pour the mix in the mold
// cook for 45mins

class Cook {
  constructor(name) {
    this.name = name;
  }
  mixAndBake() {
    console.log(`
mix the ingredients
pour the mix in the mold
cook for 45mins
        `);
  }
}

class AssistantCook {
  constructor(name) {
    this.name = name;
  }
  pourIngredients() {
    console.log(`
pour flour in a bowl
pour some egg to same bowl
pour milk
    `);
  }
}

const Mike = new Cook("Mike");
const Frank = new AssistantCook("Frank");

Frank.pourIngredients();
Mike.mixAndBake();
