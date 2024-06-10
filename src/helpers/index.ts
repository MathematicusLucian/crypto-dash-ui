export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const formatPriceChange = (priceChange: number, after: number = 2) => {
    if (!priceChange) return '-';
    Number.isInteger(priceChange) 
        ? priceChange.toString()
        : priceChange.toFixed(after);
};

export const getPriceChangeClass = (priceChange: number) => ({
    "text-green": priceChange > 0,
    "text-red": priceChange < 0,
});