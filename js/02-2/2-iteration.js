const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const numbers = [1, 2, 3, 4, 5, 6];

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems(friends);
// logItems(numbers);
// logItems(['rfgdg', 34, null, false, 6, 'gerg']);

const nameToFind = "Poly";

const findFriend = function (allFriends, name) {
  let message = "Такого друга нет";
  for (const friend of allFriends) {
    if (friend === name) {
        message = "Друг найден";
        return message;
    }
  }
  return message;
};
console.log(findFriend(friends, nameToFind));
console.log(findFriend(friends, "rfg"));

