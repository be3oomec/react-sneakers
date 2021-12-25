import styles from './Header.scss'

function Header(props) {
  return (
    <header className="header">
      <div className="header__inner d-flex align-center justify-between">
        <a className="logo" href="/">
          <img className="logo__image" src="img/logo.svg" alt="Logo react Sneakers" width={245} height={41}/>
        </a>

        <div className="header__user d-flex align-start">
          <button className="header__btn header__btn--cart d-flex align-end" 
                  aria-label="Link on cart" 
                  onClick={props.onClickCart}>
            <svg className="header__icon">
              <use xlinkHref="img/sprite.svg#cart"></use>
            </svg>
            <span className="header__btn-text">
              12999 руб.
            </span>
          </button>

          <button className="header__btn header__btn--fav" aria-label="Link on favorite">
            <svg className="header__icon">
              <use xlinkHref="img/sprite.svg#fav"></use>
            </svg>
          </button>

          <button className="header__btn header__btn--acc" aria-label="Link on login">
            <svg className="header__icon">
              <use xlinkHref="img/sprite.svg#user"></use>
            </svg>
          </button>
        </div>        
      </div>
    </header>
  );
}

export default Header;