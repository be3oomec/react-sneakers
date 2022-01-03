import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';

import AppContext from './context';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';



function App() {

  const [shoes, setShoes] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isReady, setIsReady] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const shoesResponse = await axios.get("https://61c721e79031850017547308.mockapi.io/shoes");
      const cartResponse = await axios.get("https://61c721e79031850017547308.mockapi.io/cartItems");
      const favResponse = await axios.get("https://61c721e79031850017547308.mockapi.io/favoritesItems");

      setIsReady(false);

      setCartItems(cartResponse.data);
      setFavorites(favResponse.data);
      setShoes(shoesResponse.data);
    }

    fetchData();
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
    console.log(obj);

    if (cartItems.find((item) => item.id === obj.id)) {
      axios.delete(`https://61c721e79031850017547308.mockapi.io/cartItems/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    }
    else {
      axios.post("https://61c721e79031850017547308.mockapi.io/cartItems", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61c721e79031850017547308.mockapi.io/cartItems/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    console.log(obj);

    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://61c721e79031850017547308.mockapi.io/favoritesItems/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      }
      else {
        const { data } = await axios.post("https://61c721e79031850017547308.mockapi.io/favoritesItems", obj);
        setFavorites(prev => [...prev, data]);
      }
    }
    catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isAddedItems = (id) => {
    return cartItems.some(obj => obj.id === id);
  }

  return (
    <AppContext.Provider value={{
      shoes,
      cartItems,
      setCartItems,
      favorites,
      isAddedItems,
      onAddToFavorite,
      onAddToCart,
      setCartOpened
    }} >
      <div className="wrapper">

        <Header onClickCart={() => setCartOpened(true)} />

        {cartOpened && <Drawer items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem} />}

        <Routes>
          <Route path="/" exact element={
            <Home shoes={shoes}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isReady={isReady}
            />
          }>
          </Route>

          <Route path="/favorites" exact element={
            <Favorites />
          }>
          </Route>

          <Route path="/orders" exact element={
            <Orders />
          }>
          </Route>
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
