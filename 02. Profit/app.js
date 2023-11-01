function get_max_profit(stock_prices_yesterday) {
   if (stock_prices_yesterday.length < 2) {
      return 0;
   }

   let minPrice = stock_prices_yesterday[0];
   let maxProfit = 0;

   for (let i = 1; i < stock_prices_yesterday.length; i++) {
      const currentPrice = stock_prices_yesterday[i];
      const potentialProfit = currentPrice - minPrice;

      if (potentialProfit > maxProfit) {
         maxProfit = potentialProfit;
      }

      if (currentPrice < minPrice) {
         minPrice = currentPrice;
      }
   }

   return maxProfit * 15000;
}

const stock_prices_yesterday = [10, 7, 5, 8, 11, 9, 1];
const profitInRupiah = get_max_profit(stock_prices_yesterday);
console.log(profitInRupiah);
