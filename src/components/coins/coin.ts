import './coin.module.css';
import { createElement } from '../../utils/createElement';
import { Coins } from '../../types';

export function createCoinCard({
  icon,
  name,
  symbol,
  price,
}: Coins): HTMLElement {
  return createElement('div', {
    className: 'styles.card',
    childElements: [
      createElement('img', {
        className: 'styles.cardImage',
        src: icon,
      }),
      createElement('article', {
        className: 'styles.cardInfo',
        childElements: [
          createElement('h2', { innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Symbol:' }),
              createElement('p', { innerText: symbol }),
            ],
          }),
          createElement('h5', { innerText: 'Price:' }),
          createElement('p', { innerText: price }),
        ],
      }),
    ],
  });
}
