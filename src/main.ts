import './style.css';
import { createCoinCard } from './components/coins/coin';
import { createElement } from './utils/createElement';
import { Coins } from './types';
import { getCoins } from './utils/api';

const coins: Coins[] = await getCoins();

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
          innerText: 'Invest in a better future',
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
