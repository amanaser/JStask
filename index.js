const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    let sum = 0;

    sum = cartItemsPrices.reduce((a, b) => {
        return (Number(a) || 0) + (Number(b) || 0)
    })
    sum = parseFloat(sum).toFixed(2);
    sum = Number(sum)
    return (sum === WINNING_SUM);
}


module.exports = doesCartWinPrize;
