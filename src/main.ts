import './style.css';
import { createCoinCard } from './components/coins/coin';
import { createElement } from './utils/createElement';
import { Coins } from './types';

const coins: Coins[] = [
  {
    name: 'Bitcoin',
    icon: 'https://static.coinstats.app/coins/Bitcoin6l39t.png',
    symbol: 'BTC',
    rank: 1,
    price: 34721.32,
  },
  {
    name: 'ethereum',
    icon: 'https://static.coinstats.app/coins/EthereumOCjgD.png',
    symbol: 'ETH',
    rank: 2,
    price: 34721.32,
  },
];

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Coins' }),
    createElement('input', { placeholder: 'Search for a character' }),
    createElement('div', {
      className: 'characterContainer',
      childElements: coins.map((coins) => createCoinCard(coins)),
    }),
  ],
});
document.querySelector<HTMLDivElement>('#app')?.append(mainElement);
