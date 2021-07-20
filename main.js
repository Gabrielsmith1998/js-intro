// const firstName = "Gabriel";
// const lastName = "Smith";
const favoriteFood = "Pizza";
// let favoriteNumber = 13;
// const likesToRead = true;

// favoriteNumber += 3;
// favoriteNumber = favoriteNumber + 3;

// console.log(typeof favoriteFood);
// console.log(typeof favoriteNumber);

const whatFoodDoILike = () => {
    if (favoriteFood === "hot dogs" || favoriteFood.toUpperCase() === "PIZZA") {
        console.log("You like hot dogs!");
    } else {
        console.log("You like something else!");
    }
}

whatFoodDoILike();

const myFunction = (number) => {
    console.log(`Your argument was: ${number + 1}`);
}

myFunction(33);