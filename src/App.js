import React, { useEffect, useState } from 'react';
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

function App() {
  const [themeName, setThemeName] = useState('main');
  const theme = useTheme();

  useEffect(() => {
    // Your theme name determining logic
    setThemeName('light');
  }, [themeName]);
  return (
    <ThemeProvider value={themeName}>
      <div className="App" style={{ backgroundColor: theme.background }}>
        <Header />
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
