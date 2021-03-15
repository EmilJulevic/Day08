function randomInteger() {

    Math.random() * 30;
}
randomInteger();

console.log(Math.floor(Math.random() * 30));

module.exports = randomInteger;