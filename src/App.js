import React, { useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/features/theme';
import Header from './components/header';
import Footer from './components/footer';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './styling/app.css';

const STATUS_STATES = ['LIGHT', 'MEDIUM', 'DARK'];

function App() {
  const [themeName, setThemeName] = useState('light');
  const theme = useTheme(themeName);
  const [status, setStatus] = useState(0);
  const [position, setPosition] = useState(1);

  const handleClick = () => {
    const newStatus = (status + 1) % STATUS_STATES.length;
    setStatus(newStatus);
    if (position < 3) {
      if (position === 0) {
        setThemeName('light');
      } else if (position === 1) {
        setThemeName('medium');
      } else if (position === 2) {
        setThemeName('dark');
      }
      const newposition = (position + 1);
      setPosition(newposition);
    }
    if (position === 2) {
      const newposition = 0;
      setPosition(newposition);
    }
  };

  const text = STATUS_STATES[status];

  return (
    <ThemeProvider value={themeName}>
      <div id="App" className="App" style={{ backgroundColor: theme.background }}>
        <Header />
        <section className="theme">
          <h4>CLICK TO CHANGE THEME &#8680; </h4>
          <div aria-hidden="true" onClick={handleClick} id="theme-btn"><p>{text}</p></div>
        </section>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
