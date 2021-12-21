import Card from './components/Card'; 
import Header from './components/Header'; 
import Drawer from './components/Drawer'; 

const sneakersInfo = [
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imgUrl: "img/1.jpg"},
  {title: "Мужские Кроссовки Nike Air Max 270", price: 12999, imgUrl: "img/2.jpg"},
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8999, imgUrl: "img/3.jpg"},
  {title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imgUrl: "img/4.jpg"},
];

function App() {
  return (
    <div className="wrapper">

      <Header />
      <Drawer />

      <main className="content">
        <h1 className="sr-only">
          REACT SNEAKERS - Магазин лучших кроссовок
        </h1>

        <div className="content__top d-flex align-center justify-between">
          <h2 className="content__title">
            Все кроссовки
          </h2>
          <label className="content__search-label">
            <img className="content__search-icon" src="img/search.svg" alt="Search icon" aria-hidden="true" />
            <input className="content__search" type="search" name="search" id="search" placeholder="Поиск..." />
          </label>
        </div>

        <ul className="content__block">          
          {sneakersInfo.map(obj => 
            <Card 
              title={obj.title} 
              price={obj.price} 
              imgUrl={obj.imgUrl} 
              onClick={() => {console.log(obj)}} />
          )}
        </ul>
      </main>

    </div>
  );
}

export default App;
