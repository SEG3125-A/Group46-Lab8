import React, { Suspense, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './styles/OptionsCSS.css';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import {useTranslation} from 'react-i18next';
import Loading from './Loading';

function Options() {
  const [goToContact, setGoToContact] = useState(false);
  const [goBackToHomepage, setGoBackToHomepage] = useState(false);
  const [cart, setCart] = useState([]);
  const [personalizedMessage, setPersonalizedMessage] = useState('');
  const [deliveryOption, setDeliveryOption] = useState(true);
  const {t} = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng)=> setLocale(i18n.language));
  
  const handleLanguageChange = (event)=>{
    i18n.changeLanguage(event.target.value);
  }

  if (goToContact) {
    return <Navigate to="/contact" />;
  }

  if (goBackToHomepage) {
    return <Navigate to="/" />;
  }

  const flowers = [
    { id: 1, name: t('Rose'), price: 10 },
    { id: 2, name: t('Tulip'), price: 8 },
    { id: 3, name: t('Sunflower'), price: 12 },
  ];

  const handleCheckboxChange = (flower) => {
    const isFlowerInCart = cart.some(item => item.id === flower.id);
    if (isFlowerInCart) {
      setCart(cart.filter(item => item.id !== flower.id));
    } else {
      setCart([...cart, flower]);
    }
  };

  const handlePersonalizedMessageChange = (e) => {
    setPersonalizedMessage(e.target.value);
  };

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value === 'delivery');
  };

  return (
    <div>
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Suspense fallback = {<Loading />}>
        <div className="options-progress-bar" style={{textAlign: 'center', fontWeight: 'bold'}}> {t('Shopping Progress')} </div> {}
      <div className="titles">
      {t('Customize Your Bouquet')}
      </div>
      <br />
      <br />
      <div>
        <div className="flower-options">
          <h2 className="heading2" style={{color:'black', fontWeight: 'bold'}}>{t('Flower Options')}</h2>
          <div className="outlined-box">
            {flowers.map(flower => (
              <div key={flower.id}>
                <h3>{flower.name}</h3>
                <p>{t('Price')} ${flower.price}</p>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(flower)}
                  />
                  {t('Add to Cart')}
                </label>
              </div>
            ))}
          </div>
        </div>

        <br />

        <div className="personalized-message">
          <h2 className="heading2" style={{color:'black', fontWeight: 'bold'}}>{t('Personalized Message')}</h2>
          <textarea
            rows="4"
            cols="50"
            placeholder={t('What would you like to tell the receiver?')}
            value={personalizedMessage}
            onChange={handlePersonalizedMessageChange}
          />
        </div>

        <br />

        <div className="delivery-options">
          <h2 className="heading2" style={{color:'black', fontWeight: 'bold'}}>{t('Delivery Options')}</h2>
          <label>
            <input
              type="radio"
              value="delivery"
              checked={deliveryOption}
              onChange={handleDeliveryOptionChange}
            />
            {t('Delivery')}
          </label>
          <label>
            <input
              type="radio"
              value="pickup"
              checked={!deliveryOption}
              onChange={handleDeliveryOptionChange}
            />
            {t('Pickup')}
          </label>
        </div>
      </div>
      <br />
      <button
            type="goBackToHomepage"
            onClick={() => {
                setGoBackToHomepage(true);
            }}
        >
            {" "}
            {t('Back to Homepage')}
      </button>
      <button
            type="goToContact"
            onClick={() => {
                setGoToContact(true);
            }}
        >
            {" "}
            {t('Go to Contact Information')}
        </button>
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

export default Options;
