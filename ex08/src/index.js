var total = 0;
function funcWithArg(digit) {
    var temp = (digit + 9) / 5;
    return temp;
}
total = funcWithArg(6);
console.log(total);

module.exports = funcWithArg;