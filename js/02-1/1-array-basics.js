const numbers = [1, 2, 3, 4, 5, 6];
const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
console.log(friends[2]);

// friends[2] = "Chelsey";
// console.log(friends);
// console.log(friends[2]);
// console.log(friends.length);

// friends[4] = "Kongo";
// console.log(friends);
// console.log(friends.length);

// Итерация по массиву
// for (let i = 0; i < friends.length; i += 1) {
//     console.log(friends[i]);
// }

// for (const friend of friends) {
//      console.log(friend);
//  }

const nameToFind = "Poly";
let message = "Такого друга нет";
// for (let i = 0; i < friends.length; i += 1) {
//     const friend = friends[i];
//     if (nameToFind === friend) {
//       console.log(`Нашли такого друга ${friends[i]}`);  
//     } 
// }

for (const friend of friends) {
     if (nameToFind === friend) {
         message = `Нашли такого друга ${nameToFind}`;
         break;
    }
}
console.log(message);