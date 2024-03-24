import React, { Suspense, useState} from 'react';
import { Navigate } from 'react-router-dom';
import './styles/MainCSS.css';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import {useTranslation} from 'react-i18next';
import Loading from './Loading';

function Main() {
    const {t} = useTranslation();
    const [goToOptions, setGoToOptions] = React.useState(false);
    const [locale, setLocale] = useState(i18n.language);
    i18n.on('languageChanged', (lng)=> setLocale(i18n.language));

    const handleLanguageChange = (event)=>{
        i18n.changeLanguage(event.target.value);
    }

    if (goToOptions) {
        return <Navigate to="/options" />;
    }

    return (
        <div className="container">
            <LocaleContext.Provider value={{locale, setLocale}}>
                <Suspense fallback={<Loading />}> 
                    <h2 className="title" style={{ color: '#000000', fontSize: '3rem' }}>{t('Welcome to GiftABouquet!')}</h2>
                    <button
                    className="btn btn-primary"
                    type="start"
                    onClick={() => {
                        setGoToOptions(true);
                    }}
                    >
                        {" "}
                        {t('Start Shopping')}
                    </button>
                    <label className="language-selector1" style={{ fontWeight: 'bold' }}>{t('Change Language')}</label>
                    <select className="language-selector2" value={locale} onChange={handleLanguageChange}>
                        <option value='en'>EN</option>
                        <option value='fr'>FR</option>
                    </select>
                </Suspense>
            </LocaleContext.Provider>
        </div>
    );
}

export default Main;
