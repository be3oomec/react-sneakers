import React from 'react';

import Card from '../components/Card';

function Home({ shoes, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite, isReady }) {


  const renderItems = () => {
    const filteredItems = shoes.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isReady ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        addToCart={(obj) => onAddToCart(obj)}
        addToFav={(obj) => onAddToFavorite(obj)}
        loading={isReady}
        {...item}
      />
    ));
  };

  return (
    <main className="content">
      <h1 className="sr-only">
        REACT SNEAKERS - Магазин лучших кроссовок
      </h1>

      <div className="content__top d-flex align-center justify-between">
        <h2 className="content__title">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h2>
        <label className="content__search-label">
          <img className="content__search-icon" src="img/search.svg" alt="Search icon" aria-hidden="true" />
          <input className="content__search"
            type="search"
            name="search"
            id="search"
            placeholder="Поиск..."
            onChange={onChangeSearchInput} />
        </label>
      </div>

      <ul className="content__block">
        {renderItems()}
      </ul>
    </main>
  );
}

export default Home;