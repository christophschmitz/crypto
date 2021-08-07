import styles from './coin.module.css';
import { createElement } from '../../utils/createElement';
import { Coins } from '../../types';

export function createCoinCard({
  icon,
  name,
  symbol,
  price,
}: Coins): HTMLElement {
  return createElement('div', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.cardImage,
        src: icon,
      }),
      createElement('article', {
        className: styles.cardInfo,
        childElements: [
          createElement('h2', { className: styles.heading, innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h5', {
                className: styles.subheading,
                innerText: 'Symbol:',
              }),
              createElement('p', {
                className: styles.cardText,
                innerText: symbol,
              }),
            ],
          }),
          createElement('h5', {
            className: styles.subheading,
            innerText: 'Price:',
          }),
          createElement('p', {
            className: styles.cardText,
            innerText: price + ' €',
          }),
        ],
      }),
    ],
  });
}
