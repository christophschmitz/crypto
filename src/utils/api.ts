import type { CoinFromApi, Coins } from '../types';
export async function getCoins(): Promise<Coins[]> {
  const response = await fetch(
    'https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=EUR'
  );

  const data: CoinFromApi = await response.json();
  const coins = data.coins;

  const formattedCoins: Coins[] = coins.map((coins) => {
    const formattedCoins: Coins = {
      name: coins.name,
      icon: coins.icon,
      symbol: coins.symbol,
      rank: coins.rank,
      price: coins.price,
    };
    return formattedCoins;
  });
  return formattedCoins;
}
