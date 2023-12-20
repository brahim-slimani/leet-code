/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let quot = Math.trunc(dividend / divisor);
    if (quot > Math.pow(2, 31) - 1) return quot - 1;
    if (quot < -1 * Math.pow(2, 31)) return quot * -1;
    return quot;
};
