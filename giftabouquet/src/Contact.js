import React, { Suspense, useState } from 'react';
import { Navigate } from 'react-router-dom'
import './styles/ContactCSS.css';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import {useTranslation} from 'react-i18next';
import Loading from './Loading';

function Contact() {
  const[goToCart, setGoToCart] = React.useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [goBackToOptions, setGoBackToOptions] = useState(false);
  const {t} = useTranslation();
  const [goToOptions, setGoToOptions] = React.useState(false);
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng)=> setLocale(i18n.language));

  const handleLanguageChange = (event)=>{
    i18n.changeLanguage(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleMessageChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
  
    // Check if the length of the new message exceeds 100 characters
    if (newMessage.length > 100) {
      // If so, show a warning message
      alert('Warning: Message should not exceed 100 characters.');
    }
  };
  

  if (goBackToOptions) {
    return <Navigate to="/options" />;
  }
  if (goToCart) {
    return <Navigate to="/cart" />;
  }

  return (
    <div>
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Suspense fallback={<Loading />}>
        <div className="contact-progress-bar" style={{textAlign: 'center', fontWeight: 'bold'}}> {t('Shopping Progress')} </div> {}
      <h2 style={{color: '#d63c96'}}> {t('Your Receivers Contact Information')}</h2>
      <h3> {t('*Text fields are required.')}</h3>
      <form>
        <label>
        {t('Name')}: * 
          <input type="text" value={name} onChange={handleNameChange} placeholder={t('Enter Full Name')} />
        </label>
        <br />
        <br />
        <label>
        {t('Address')}: * 
          <input type="text" value={address} onChange={handleAddressChange} placeholder={t('Town/City & Postal Code')}/>
        </label>
        <br />
        <br />
        <label>
        {t('Message (limit 100 characters)')}:
          <textarea value={message} onChange={handleMessageChange} placeholder={t('Do you have any questions/feedback for us?')} />
        </label>
        <br />
        <button
            type="goBackToOptions"
            onClick={() => {
                setGoBackToOptions(true);
            }}
        >
            {" "}
            {t('Back to Options')}
        </button>
        <button
            type="goToCart"
            onClick={() => {
                setGoToCart(true);
            }}
        >
            {" "}
            {t('Go to Cart')}
        </button>
      </form>
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

export default Contact;

