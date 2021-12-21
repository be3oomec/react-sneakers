import styles from './Card.scss';

function Card(props) {
  return (
    <li className="content__item">
      <article className="card">
        <div className="card__img">
          <img src={props.imgUrl} alt={props.title} width={133} height={112} />
        </div>
        <h3 className="card__title">
          {props.title}
        </h3>
        <span className="card__price">
          Цена:
        </span>
        <span className="card__price-text">
          {props.price} руб.
        </span>

        <button className="card__btn card__btn--fav" aria-label="Add to favorites">
          <svg className="card__icon card__icon--fav">
            <use xlinkHref="img/sprite.svg#fav2"></use>
          </svg>
        </button>
        <button className="card__btn card__btn--add" aria-label="Add to cart" onClick={props.onClick}>
          <svg className="card__icon card__icon--add">
            <use xlinkHref="img/sprite.svg#plus"></use>
          </svg>
        </button>
      </article>
    </li>
  );
}

export default Card;