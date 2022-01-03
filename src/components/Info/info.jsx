import React from 'react';
import AppContext from '../../context';

import styles from './info.scss'

const Info = ({ title, img, descr }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="empty-items d-flex flex-column align-center">
      <div className="empty-items__image">
        <img src={img} alt="image container" width={120} height={120} />
      </div>
      <h2 className="empty-items__title">
        {title}
      </h2>
      <p className="empty-items__descr">
        {descr}
      </p>
      <button className="empty-items__btn button"
        onClick={() => setCartOpened(false)}>
        Вернуться назад
      </button>
    </div>
  )
}

export default Info;