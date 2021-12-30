
import Card from '../components/Card'; 

function Favorites({ shoes, onAddToFavorite }) {
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
        {shoes
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