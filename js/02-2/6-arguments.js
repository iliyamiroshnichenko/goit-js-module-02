//Функция сложения произвольного количества элементов

// const add = function () {
//     const args = Array.from(arguments);
//     console.log(arguments);
//     console.log(args);
//     for (const arg of args) {
//       console.log(arg);
//     }
// };

const add = function (...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6, 7));

const posts = ['post-1', 'post-2', 'post-3', 'post-4', 'post-5'];
const tag = '#jsrules';
// const postsWithTag = [];
// for (const post of posts) {
//   postsWithTag.push(`${post}${tag}`);
// }
// console.log(postsWithTag);

const addTag = function (tag, ...args) {
  const postsWithTag = [];
  for (const arg of args) {
    postsWithTag.push(`${arg}${tag}`);
  }
  console.log(args);
  return postsWithTag;
 }

// console.log(addTag(tag, posts));
console.log(
  addTag("#jsrules", "post-1", "post-2", "post-3", "post-4", "post-5")
);
console.log(
  addTag("#react", "post-6", "post-7", "post-8")
);