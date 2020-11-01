/* Работаем с коллекцией карточек в Trello
Удалить, доавить, обновить */

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
console.log(cards);

const removeCard = function (allCards, cardToRemove) {
    const index = allCards.indexOf(cardToRemove);

    if (index === -1) {
        console.log("Такой карточки нет");
        return;
    }

  allCards.splice(index, 1);
};

removeCard(cards, "card-3");
console.log(cards);


const addCard = function (allCards, cardToInsert, index) {
  allCards.splice(index, 0, cardToInsert);
};
addCard(cards, "card-100", 1);
console.log(cards);
//Удаление карточек
// cards.splice(1, 2);
// console.log(cards);
// const cardToRemove = "card-3";
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.log(cards);

//Вставка карточек
// const cardToInsert = "card-10";
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.log(cards);

// cards.splice(2, 1, "card-6");
