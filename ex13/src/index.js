function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randomRangeNumber(4, 7));

module.exports = randomRangeNumber;