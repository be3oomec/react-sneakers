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
      try {
        const [shoesResponse, cartResponse, favResponse] = await Promise.all([
          axios.get("https://61c721e79031850017547308.mockapi.io/shoes"),
          axios.get("https://61c721e79031850017547308.mockapi.io/cartItems"),
          axios.get("https://61c721e79031850017547308.mockapi.io/favoritesItems"),
        ]);

        setIsReady(false);

        setCartItems(cartResponse.data);
        setFavorites(favResponse.data);
        setShoes(shoesResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
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

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => item.parentId === obj.id)
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => item.parentId !== obj.id));
        axios.delete(`https://61c721e79031850017547308.mockapi.io/cartItems/${findItem.id}`);
      }
      else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://61c721e79031850017547308.mockapi.io/cartItems", obj);
        setCartItems((prev) => prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          }
          return item;
        }));
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://61c721e79031850017547308.mockapi.io/cartItems/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
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
      console.error(error);
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isAddedItems = (id) => {
    return cartItems.some(obj => obj.parentId === id);
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
