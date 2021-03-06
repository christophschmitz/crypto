import styles from './coin.module.css';
import { createElement } from '../../utils/createElement';
import { Coins } from '../../types';

export function createCoinCard({
  rank,
  icon,
  name,
  symbol,
  price,
  priceChange1d,
}: Coins): HTMLElement {
  return createElement('div', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.cardImage,
        src: icon,
      }),
      createElement('div', {
        className: styles.number,
        childElements: [
          createElement('h2', {
            innerText: rank,
          }),
        ],
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
            innerText: price.toFixed(2) + ' €',
          }),
          createElement('h5', {
            className: styles.subheading,
            innerText: 'Pricechange 24h:',
          }),
          createElement('p', {
            className: styles.cardText,
            innerText: priceChange1d + '%',
          }),
        ],
      }),
    ],
  });
}
// createElement('p', {
//   className: styles.cardText,
//   innerText: price + ' €',
// }),
