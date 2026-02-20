
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import About from '../src/components/pages/About';
import Home from './components/pages/Home';
import SuccessStories from './components/pages/SuccessStories';
import Product from '../src/components/pages/Product';
import Login from './components/Login';
import Footer from './components/pages/Footer';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
