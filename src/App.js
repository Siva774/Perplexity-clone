// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import ArticleDetails from './pages/ArticleDetails';
import Header from './components/Header';
import './App.css';  // Import your CSS

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
