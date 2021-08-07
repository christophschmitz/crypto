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

const header = createElement('header', {
  childElements: [
    createElement('div', {
      className: 'hero',
      childElements: [
        createElement('h2', {
          className: 'heroheading',
          innerText: 'Watch your coins',
        }),
        createElement('p', {
          className: 'herotext',
          innerText: 'Watch your coins',
        }),
      ],
    }),
  ],
});

const mainElement = createElement('main', {
  childElements: [
    createElement('div', {
      className: 'coinContainer',
      childElements: coins.map((coins) => createCoinCard(coins)),
    }),
  ],
});
document.querySelector<HTMLDivElement>('#app')?.append(header, mainElement);
