import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Footer />
    <div className="copyright">
      <p>© 2022 Metaverse Pets, All rights reserved.</p>
    </div>
  </React.StrictMode>
);
