//Функция поиска самого маленького элемента массива

const numbers = [67, 45, 3, -1.56, 78, 90, 2];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);

const findSmallestNumber = function (items) { 
    let min = numbers[0];
   for (let i = 1; i < items.length; i += 1) {
     if (items[i] < min) {
       min = items[i];
     }
    } 
    return min;
};

console.log(findSmallestNumber(numbers));