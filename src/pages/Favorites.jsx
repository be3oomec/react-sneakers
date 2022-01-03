import React from 'react';

import Card from '../components/Card';
import AppContext from '../context';

function Favorites() {

  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <main className="content">
      <h1 className="sr-only">
        REACT SNEAKERS - Магазин лучших кроссовок
      </h1>

      <div className="content__top d-flex align-center justify-between">
        <h2 className="content__title">
          Избранное
        </h2>
      </div>

      <ul className="content__block">
        {favorites
          .map((item, index) =>
            <Card
              key={index}
              favorited={true}
              addToFav={onAddToFavorite}
              {...item}
            />
          )}
      </ul>
    </main>
  );
}

export default Favorites;