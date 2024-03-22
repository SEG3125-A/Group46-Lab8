import React from 'react';
import { Navigate } from 'react-router-dom';
import './styles/MainCSS.css';

function Main() {
    const [goToOptions, setGoToOptions] = React.useState(false);

    if (goToOptions) {
        return <Navigate to="/options" />;
    }

    return (
        <div className="container">
            <h2 className="title" style={{ color: '#000000', fontSize: '3rem' }}>Welcome to GiftABouquet!</h2>
            <button
            className="btn btn-primary"
            type="start"
            onClick={() => {
                setGoToOptions(true);
            }}
            >
            {" "}
            Start Shopping
            </button>
        </div>
    );
}

export default Main;
