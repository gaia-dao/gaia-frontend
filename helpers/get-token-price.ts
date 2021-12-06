import axios from 'axios';

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
  const url =
    'https://api.coingecko.com/api/v3/simple/price?ids=gmx,weth,y&vs_currencies=usd,eth';
  const { data } = await axios.get(url);

  cache['GMX'] = data['gmx'].usd;
  cache['wETH'] = data['weth'].usd;
};

export const getTokenPrice = (symbol: string): number => {
  return Number(cache[symbol]);
};
