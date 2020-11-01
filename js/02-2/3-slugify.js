const title = "Top 10 benefits of React Framework";
const slugify = function (string) {
  const words = string.toLowerCase().split(" ");
  const slug = words.join("-");
  return slug;
};
console.log(slugify(title));
console.log(slugify("the WoRld is not EnouGh its MINE"));

const articles = [
  "Смещение даты выхода супергеройского сольника Скарлетт Йоханссон «Чёрная вдова» знатно перетасовало планы на Четвёртую фазу киновселенной Marvel",
  "Инвесторы со стороны Disney даже мягко намекали, что пора бы уже поиметь совесть и выпустить фильм",
  "Скарлетт Йоханссон, за прокат и против стриминга",
  "Вынужденная задержка привела к своеобразному антирекорду"
];
const slugs = [];
for (const article of articles) {
    const slug = slugify(article);
    slugs.push(slug);
}
console.log(slugs);