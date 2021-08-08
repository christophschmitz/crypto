import './style.css';
import { createCoinCard } from './components/coins/coin';
import { createElement } from './utils/createElement';
import { Coins } from './types';
import { getCoins } from './utils/api';

const coins: Coins[] = await getCoins();

const topbar = createElement('div', {
  className: 'topBar',
  childElements: [
    createElement('h1', {
      className: 'logo',
      innerText: 'COINOLOGIC',
    }),
    createElement('input', {
      placeholder: 'Search your Favourite asset...',
    }),
  ],
});

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
          innerText: 'Invest into a better future',
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
document
  .querySelector<HTMLDivElement>('#app')
  ?.append(topbar, header, mainElement);
