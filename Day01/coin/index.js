// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

const ccxt = require("ccxt");

let current;

const getCoin = async () => {
  const exchange = new ccxt.binance();
  const coin = await exchange.fetchTicker("BTC/USDT");
  console.log(`현재 비트코인 가격: ${coin.last}`);
  if (coin.last > current) {
    console.log("한강뷰 가즈아~!");
  } else {
    console.log("개떡락 돔황챠");
  }
  current = coin.last;

  return;
};
setInterval(() => {
  getCoin();
}, 3000);
