import styles from './Drawer.scss'
import styleCard from './Mini-card.scss'

function Drawer({ items = [], onClose }) {
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

        <ul className="drawer__items">
          {items.map((obj) => 
            <li className="drawer__item">
              <article className="mini-card d-flex align-center justify-between">
                <div className="mini-card__img">
                  <img src={obj.imgUrl} alt="Sneakers image" width={70} height={70} />
                </div>
                <div className="mini-card__info">
                  <h3 className="mini-card__title">
                    {obj.title}
                  </h3>
                  <span className="mini-card__price">
                   {obj.price}
                  </span>
                </div>
                <button className="mini-card__btn" aria-label="delete item">
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
          <button className="drawer__btn button">
            Оформить заказ
            <svg className="drawer__icon">
              <use xlinkHref="./img/sprite.svg#arrowRight"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
