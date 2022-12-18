import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component, useState} from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Results from './components/Results'
import Trailer from './components/Trailer';
import url from './services/request'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    

function App() {
  const [selectedGenreURL, setSelectedGenreURL] = useState(url.trendingMovies)

  return (
    <div className="App">
      <Router>

      <Header />
      <Nav setSelectedGenre={setSelectedGenreURL}/>
      

      <Routes>
            <Route index element={<Results selectedGenre={selectedGenreURL}/>} />
            <Route path='/trailer/:id' element={<Trailer />} />
          </Routes>
      </Router>
    
    </div>
  );
}

export default App;