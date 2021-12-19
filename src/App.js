function App() {
  return (
    <div className="wrapper">

      <header className="header">
        <div className="header__inner">
          <a className="logo" href="/">
            <img className="logo__image" src="img/logo.svg" alt="Logo react Sneakers" width={245} height={41}/>
          </a>
          <div className="header__user">
            <button className="header__btn header__btn--cart" aria-label="Link on cart">
              <svg className="header__icon">
                <use xlinkHref="img/sprite.svg#cart"></use>
              </svg>
              {/* <span className="header__text">
                1205 руб.
              </span> */}
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

      <main className="content">
        <h1 className="sr-only">
          REACT SNEAKERS - Магазин лучших кроссовок
        </h1>

        <div className="content__top">
          <h2 className="content__title">
            Все кроссовки
          </h2>
          <label className="content__search-label">
            <img className="content__search-icon" src="img/search.svg" alt="Search icon" aria-hidden="true" />
            <input className="content__search" type="search" name="search" id="search" placeholder="Поиск..." />
          </label>
        </div>

        <ul className="content__block">
          <li className="content__item">
            <article className="card">
              <div className="card__img">
                <img src="img/1.jpg" alt="Мужские Кроссовки Nike Blazer Mid Suede" width={133} height={112} />
              </div>
              <h3 className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <span className="card__price">
                Цена:
              </span>
              <span className="card__price-text">
                12999 руб.
              </span>

              <button className="card__btn card__btn--fav" aria-label="Add to favorites">
                <svg className="card__icon card__icon--fav">
                  <use xlinkHref="img/sprite.svg#fav2"></use>
                </svg>
              </button>
              <button className="card__btn card__btn--add" aria-label="Add to cart">
                <svg className="card__icon card__icon--add">
                  <use xlinkHref="img/sprite.svg#plus"></use>
                </svg>
              </button>
            </article>
          </li>
          <li className="content__item">
            <article className="card">
              <div className="card__img">
                <img src="img/1.jpg" alt="Мужские Кроссовки Nike Blazer Mid Suede" width={133} height={112} />
              </div>
              <h3 className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <span className="card__price">
                Цена:
              </span>
              <span className="card__price-text">
                12999 руб.
              </span>

              <button className="card__btn card__btn--fav" aria-label="Add to favorites">
                <svg className="card__icon card__icon--fav">
                  <use xlinkHref="img/sprite.svg#fav2"></use>
                </svg>
              </button>
              <button className="card__btn card__btn--add" aria-label="Add to cart">
                <svg className="card__icon card__icon--add">
                  <use xlinkHref="img/sprite.svg#plus"></use>
                </svg>
              </button>
            </article>
          </li>
          <li className="content__item">
            <article className="card">
              <div className="card__img">
                <img src="img/1.jpg" alt="Мужские Кроссовки Nike Blazer Mid Suede" width={133} height={112} />
              </div>
              <h3 className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <span className="card__price">
                Цена:
              </span>
              <span className="card__price-text">
                12999 руб.
              </span>

              <button className="card__btn card__btn--fav" aria-label="Add to favorites">
                <svg className="card__icon card__icon--fav">
                  <use xlinkHref="img/sprite.svg#fav2"></use>
                </svg>
              </button>
              <button className="card__btn card__btn--add" aria-label="Add to cart">
                <svg className="card__icon card__icon--add">
                  <use xlinkHref="img/sprite.svg#plus"></use>
                </svg>
              </button>
            </article>
          </li>
          <li className="content__item">
            <article className="card">
              <div className="card__img">
                <img src="img/1.jpg" alt="Мужские Кроссовки Nike Blazer Mid Suede" width={133} height={112} />
              </div>
              <h3 className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <span className="card__price">
                Цена:
              </span>
              <span className="card__price-text">
                12999 руб.
              </span>

              <button className="card__btn card__btn--fav" aria-label="Add to favorites">
                <svg className="card__icon card__icon--fav">
                  <use xlinkHref="img/sprite.svg#fav2"></use>
                </svg>
              </button>
              <button className="card__btn card__btn--add" aria-label="Add to cart">
                <svg className="card__icon card__icon--add">
                  <use xlinkHref="img/sprite.svg#plus"></use>
                </svg>
              </button>
            </article>
          </li>
        </ul>
      </main>

    </div>
  );
}

export default App;
