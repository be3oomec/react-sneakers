import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

import styles from './Header.scss'

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="header">
      <div className="header__inner d-flex align-center justify-between">
        <Link to="/">
          <img className="logo__image" src="img/logo.svg" alt="Logo react Sneakers" width={245} height={41} />
        </Link>

        <ul className="header__list d-flex align-start">
          <li className="header__item">
            <button className="header__btn header__btn--cart d-flex align-end"
              aria-label="Link on cart"
              onClick={props.onClickCart}>
              <svg className="header__icon">
                <use xlinkHref="img/sprite.svg#cart"></use>
              </svg>
              <span className="header__btn-text">
                {totalPrice} rub.
              </span>
            </button>
          </li>
          <li className="header__item">
            <Link to="/favorites">
              <button className="header__btn header__btn--fav" aria-label="Link on favorite" type="button">
                <svg className="header__icon">
                  <use xlinkHref="img/sprite.svg#fav"></use>
                </svg>
              </button>
            </Link>
          </li>
          <li className="header__item">
            <Link to="/orders">
              <button className="header__btn header__btn--acc" aria-label="Link on login" type='button'>
                <svg className="header__icon">
                  <use xlinkHref="img/sprite.svg#user"></use>
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;