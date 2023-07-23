function writeCards(namesArray, eventName) {
    const cardsArray = [];

    for (let i = 0; i < namesArray.length; i++) {
        const greeting = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        cardsArray.push(greeting);

    }
return cardsArray;
}

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "birthday";

const cards = writeCards(names, event);
console.log(cards);

function countDown(number) {
    let count = 0;

    for (let i = number; i >= 0; i--) {
        console.log(i);
        count++;
    }
return count;
}

