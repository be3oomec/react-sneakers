import React from 'react';
import ContentLoader from "react-content-loader";

import AppContext from '../../context';
import styles from './Card.scss';

function Card({ id,
  imgUrl,
  title,
  price,
  addToFav,
  addToCart,
  favorited = false,
  isAdded = false,
  loading = false }) {

  const { isAddedItems } = React.useContext(AppContext);
  const [favorites, setFavorites] = React.useState(favorited);

  const onClickPlus = () => {
    addToCart({ id, title, price, imgUrl });
  };

  const onClickFav = () => {
    addToFav({ id, title, price, imgUrl });
    setFavorites(!favorites);
  };

  return (
    <li className="content__item">
      {
        loading
          ? <ContentLoader viewBox="0 0 210 280" height={280} width={210} >
            <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
            <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
            <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
            <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
          </ContentLoader>

          : <article className="card">
            <div className="card__img">
              <img src={imgUrl} alt={title} width={133} height={112} />
            </div>
            <h3 className="card__title">
              {title}
            </h3>
            <span className="card__price">
              Цена:
            </span>
            <span className="card__price-text">
              {`${price} rub.`}
            </span>

            <button className={favorites ? "card__btn card__btn--fav card__btn--fav-active" : "card__btn card__btn--fav"} aria-label="Add to favorites"
              onClick={onClickFav}>
              <svg className="card__icon card__icon--fav">
                <use xlinkHref="img/sprite.svg#fav2"></use>
              </svg>
            </button>
            <button className={isAddedItems(id) ? "card__btn card__btn--add card__btn--cheaked" : "card__btn card__btn--add"} aria-label="Add to cart"
              onClick={onClickPlus}>
              <svg className="card__icon card__icon--add">
                <use xlinkHref={isAddedItems(id) ? "img/sprite.svg#check" : "img/sprite.svg#plus"}></use>
              </svg>
            </button>
          </article>
      }
    </li>
  );
}

export default Card;