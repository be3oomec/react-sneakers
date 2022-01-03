import React from 'react';
import axios from 'axios';

import AppContext from '../../context';
import Info from '../Info/info'
import styles from './Drawer.scss'
import styleCard from './Mini-card.scss'


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderComplete, setOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("https://61c721e79031850017547308.mockapi.io/orders", { items: cartItems });
      setOrderId(data.id);
      setOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://61c721e79031850017547308.mockapi.io/cartItems/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      console.log(error.message);
      alert('Не удалось создать заказ, повторите попытку, пожаааалуйста :)');
    }
    setIsLoading(false);
  }

  return (
    <div className="overlay">
      <div className="overlay__drawer drawer">
        <div className="drawer__top d-flex justify-between">
          <h2 className="drawer__title">
            Корзина
          </h2>
          <button className="drawer__btn-close"
            aria-label="close cart"
            onClick={onClose} >
            <svg className="drawer__btn-icon">
              <use xlinkHref="img/sprite.svg#close"></use>
            </svg>
          </button>
        </div>

        {
          items.length !== 0
            ? (
              <div className="d-flex flex-column flex">
                <ul className="drawer__items">
                  {items.map((obj) =>
                    <li key={obj.id} className="drawer__item">
                      <article className="mini-card d-flex align-center justify-between">
                        <div className="mini-card__img">
                          <img src={obj.imgUrl} alt="Sneakers shoes" width={70} height={70} />
                        </div>
                        <div className="mini-card__info">
                          <h3 className="mini-card__title">
                            {obj.title}
                          </h3>
                          <span className="mini-card__price">
                            {`${obj.price} rub.`}
                          </span>
                        </div>
                        <button className="mini-card__btn"
                          aria-label="delete item"
                          type='button'
                          onClick={() => onRemove(obj.id)}  >
                          <svg className="mini-card__icon">
                            <use xlinkHref="img/sprite.svg#close"></use>
                          </svg>
                        </button>
                      </article>
                    </li>
                  )}
                </ul>

                <div className="drawer__bottom">
                  <div className="drawer__total-block mb-15 d-flex align-end justify-between">
                    <span className="drawer__total">
                      Итого:
                    </span>
                    <span className="drawer__decor"></span>
                    <span className="drawer__cost">
                      21498 руб.
                    </span>
                  </div>

                  <div className="drawer__tax-block mb-25 d-flex align-end justify-between">
                    <span className="drawer__tax">
                      Налог 5%:
                    </span>
                    <span className="drawer__decor"></span>
                    <span className="drawer__tax-value">
                      1074 руб.
                    </span>
                  </div>

                  <button className="drawer__btn button" disabled={isLoading} onClick={onClickOrder}>
                    Оформить заказ
                    <svg className="drawer__icon">
                      <use xlinkHref="./img/sprite.svg#arrowRight"></use>
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <Info title={orderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                descr={orderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                img={orderComplete ? "img/order.png" : "img/cart-empty.png"} />
            )
        }

      </div>
    </div>
  );
}

export default Drawer;
