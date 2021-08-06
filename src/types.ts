export type Coin = {
  icon: string;
  name: string;
  symbol: string;
  price: string;
};

export type CoinFromAPI = {
  id: string;
  icon: string;
  name: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSuply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  websiteUrl: string;
  twitterUrl: string;
  exp: string[];
};
