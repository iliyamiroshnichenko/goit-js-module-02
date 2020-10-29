/* Проверяем наличие работника на месте, 
сначала через for, потом includes */

const staff = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
const query = 'Ajax';
// let result = 'Сотрудника нет на работе';

// for (const employee of staff) {
//     if (query === employee) {
//         result = "Сотрудник на работе";
//         break;
//     }
// }
// console.log(result);

const result = staff.includes(query)
  ? "Сотрудник на работе"
    : "Сотрудника нет на работе";
  console.log(result);