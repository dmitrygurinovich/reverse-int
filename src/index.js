module.exports = function reverse(n) {
    if (n < 0) {
        return Number(String(n * (-1)).split('').reverse().join(''));
    } else {
        return Number(String(n).split('').reverse().join(''));
    }
}