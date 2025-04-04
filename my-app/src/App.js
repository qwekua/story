import React, { useState } from 'react';
import { Home } from './components/Home';
import { Music } from './components/Music';
import { Videos } from './components/Videos';
import { Support } from './components/Support';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'music':
        return <Music />;
      case 'videos':
        return <Videos />;
      case 'support':
        return <Support />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
