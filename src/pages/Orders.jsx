import React from 'react';
import axios from 'axios';

import AppContext from '../context'
import Card from '../components/Card';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isReady, setIsReady] = React.useState(true);
  const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://61c721e79031850017547308.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsReady(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

  return (
    <main className="content">
      <h1 className="sr-only">
        REACT SNEAKERS - Магазин лучших кроссовок
      </h1>

      <div className="content__top d-flex align-center justify-between">
        <h2 className="content__title">
          Заказы
        </h2>
      </div>

      <ul className="content__block">
        {(isReady ? [...Array(8)] : orders)
          .map((item, index) =>
            <Card
              key={index}
              loading={isReady}
              {...item}
            />
          )}
      </ul>
    </main>
  );
}

export default Orders;