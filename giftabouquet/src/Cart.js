import React, { Suspense, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './styles/CartCSS.css'
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import {useTranslation} from 'react-i18next';
import Loading from './Loading';

function Cart() {
  const [goBackToContact, setGoBackToContact] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const {t} = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng)=> setLocale(i18n.language));

  const handleLanguageChange = (event)=>{
    i18n.changeLanguage(event.target.value);
  }

  const cartItems = useState([
    { id: 1, name: t('Rose'), price: 10 },
    { id: 2, name: t('Sunflower'), price: 12 },
  ])[0];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  const handleOrderNow = () => {
    setOrderPlaced(true);
  };

  if (goBackToContact) {
    return <Navigate to="/contact" />;
  }

  return (
    <div>
      <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
      <div className="cart-progress-bar" style={{textAlign: 'center', fontWeight: 'bold'}}> {t('Shopping Progress')} </div> {}
      <h1 style={{color: '#d63c96'}}>{t('Your Cart')}</h1>
      <div className="cart-items">
        <h2 className='heading2'>{t('Selected Flowers')}</h2>
        <div className="outlined-box">
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p style={{color: '#d63c96'}}>{t('Total')}: ${totalPrice}</p>
        </div>
      </div>
      <br />
      <button
            type="goBackToContact"
            onClick={() => {
                setGoBackToContact(true);
            }}
      >
            {" "}
            {t('Back to Contact Information')}
      </button>
      <button
            type="order"
            onClick={handleOrderNow}
      >
            {" "}
            {t('Order Now')}
      </button>
      {orderPlaced && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          {t('Your order has been placed successfully.')}
          <br />
          {t('Thank you for shopping with GiftABouquet!')}
        </div>
      )}
      <label className="options-language-selector1" style={{ fontWeight: 'bold' }}>{t('Change Language')}</label>
                    <select className="options-language-selector2" value={locale} onChange={handleLanguageChange}>
                        <option value='en'>EN</option>
                        <option value='fr'>FR</option>
                    </select>
      </Suspense>
      </LocaleContext.Provider>
    </div>
  );
}

export default Cart;
