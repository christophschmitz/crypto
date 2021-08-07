export async function getCoins() {
  const response = await fetch(
    'https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=EUR'
  );
  const data = await response.json();
  const coins = data.coins;
  return coins;
}
