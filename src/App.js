import React from 'react';
 
import Card from './components/Card'; 
import Header from './components/Header'; 
import Drawer from './components/Drawer'; 


function App() {

  const [shoes, setShoes] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => { 
    fetch("https://61c721e79031850017547308.mockapi.io/shoes")
      .then(res => { return res.json();})
      .then(json => { setShoes(json);});
  }, []);
  
  React.useEffect(() => {
    if (cartOpened) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
    }
  }, [cartOpened]);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };
  
  return (
    <div className="wrapper">

      <Header onClickCart={() => setCartOpened(true)}/>
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

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
          {shoes.map(obj => 
            <Card 
              title={obj.title} 
              price={obj.price} 
              imgUrl={obj.imgUrl}
              addToCart={(obj) => onAddToCart(obj)}
              addToFav={() => console.log("Добавили в избранное")}
            />
          )}
        </ul>
      </main>

    </div>
  );
}

export default App;
