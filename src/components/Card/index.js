import React, {useState} from 'react';

import styles from './Card.scss';

function Card({imgUrl, title, price, addToFav, addToCart}) {

  const [added, setAdded] = useState(false);
  const [favorites, setFavorites] = useState(false);

  const onClickPlus = () => {
    addToCart({title, price, imgUrl});
    setAdded(!added);
  };

  const onClickFav = () => {
    addToFav();
    setFavorites(!favorites);
  };

  return (
    <li className="content__item">
      <article className="card">
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
          {price} руб.
        </span>

        <button className={favorites ? "card__btn card__btn--fav card__btn--fav-active" : "card__btn card__btn--fav"} aria-label="Add to favorites" 
                onClick={onClickFav}>
          <svg className="card__icon card__icon--fav">
            <use xlinkHref="img/sprite.svg#fav2"></use>
          </svg>
        </button>
        <button className={added ? "card__btn card__btn--add card__btn--cheaked" : "card__btn card__btn--add"} aria-label="Add to cart" 
                onClick={onClickPlus}>
          <svg className="card__icon card__icon--add">
            <use xlinkHref={added ? "img/sprite.svg#check" : "img/sprite.svg#plus"}></use>
          </svg>
        </button>
      </article>
    </li>
  );
}

export default Card;