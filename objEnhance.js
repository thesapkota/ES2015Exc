// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  /* Write an ES2015 Version */
  let createInstructor =  ((firstName,lastName) => {
    return {firstName, lastName}});

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
let instructor = {
    firstName : "Colt",
    [favoriteNumber] : "That is my favorite!"
}

// let inst = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

let inst = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}


const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species,verb,noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }

}