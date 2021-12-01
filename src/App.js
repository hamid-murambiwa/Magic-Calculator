import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
