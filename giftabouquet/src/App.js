import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Options from './Options';
import Contact from './Contact';
import Cart from './Cart';
import Main from './Main';


function App() { 
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/options' element={<Options />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

