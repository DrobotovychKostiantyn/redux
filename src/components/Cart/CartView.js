import React from 'react';
import s from './Cart.module.css';

const Cart = ({ products = [], removeFromCart, increment, decrement }) =>
  products.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              {amount > 1 && (
                <button type="button" onClick={() => decrement(id)}>
                  -
                </button>
              )}
              {amount}
              <button type="button" onClick={() => increment(id)}>
                +
              </button>
            </td>
            <td>
              <button onClick={() => removeFromCart(id)} type="button">
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default Cart;
