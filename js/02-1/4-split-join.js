const title = "Top 10 benefits of React framework";
// console.log(title.split(' '));
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join(' '));

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// console.log(slug);

// Лучшее решение
// const words = title.toLowerCase().split(' ');
// const slug = words.join('-');
// console.log(slug);

// Join руками для практики циклов
const words = title.toLowerCase().split(" ");
let slug = '';
for (let i = 0; i < words.length; i += 1) {
    console.log(words[i]);
    // if (i !== words.length - 1) {
    //     slug += words[i] + '-';
    // } else {
    //     slug += words[i];
    // }
    const isNotLastValue = i !== words.length - 1;
    slug += isNotLastValue ? words[i] + "-" : words[i];
}
console.log(slug);