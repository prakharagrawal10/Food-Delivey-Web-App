import Navbar from './Navbar.js';
import Home from './Home.js';
import AccountPage from './AccountPage';
import CartPage from './CartPage';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/login" element={<LoginPage />} />   
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
