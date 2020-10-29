const sum = function () {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
};

const sum1 = sum(1, 2, 3, 4, 5, 6);
console.log(sum1);
const sum2 = sum(10, 20, 3, 8);
console.log(sum2);

// const withdraw = function (amount, balance) {
//     if (amount === 0) {
//         console.log('Введите сумму больше нуля');
//     } else if (amount > balance) {
//         console.log("Недостаточно средств на счету");
//     } else {
//         console.log("Операция снятия средств проведена");
//     }
// }

const withdraw = function (amount, balance) {
  if (amount === 0) {
    console.log("Введите сумму больше нуля");
    return;
  }
  if (amount > balance) {
    console.log("Недостаточно средств на счету");
    return;
  }
  console.log("Операция снятия средств проведена");
};

withdraw(0, 1000);
withdraw(301, 300);
withdraw(100, 500);

