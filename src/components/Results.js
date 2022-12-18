import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios, { searchMovie } from "../services/axios";
import FlipMove from "react-flip-move";
import SearchIcon from "@material-ui/icons/Search";

const Results = ({ selectedGenre }) => {
  const SORT_BY_AZ = "AZ"
  const SORT_BY_ZA = "ZA"
  const [movies, setMovies] = useState([]);
  const [sortby, setSortBy] = useState(SORT_BY_AZ);

  useEffect(() => {
    setSortBy(SORT_BY_AZ)
    setDefaultBtnSort()
    axios
      .get(selectedGenre)
      .then((result) => {
        setMovies(result.data.results.sort((a, b) => (a.title > b.title)? 1: -1));
      })
      .catch(() => {
        setMovies(undefined);
      });
  }, [selectedGenre]);

  const setDefaultBtnSort =() =>{
    const btnChildren = document.querySelector('.btn-group').children
    for (const child of btnChildren) {
      child.style.opacity = '0.7'
      child.style.transform = 'scale(1.0)'
    }
  }

  const handleSort = (select, e) => {
    const btnChildren = document.querySelector('.btn-group').children
    for (const child of btnChildren) {
        child.style.opacity = '0.7'
        child.style.transform = 'scale(1.0)'
        child.addEventListener('mouseover', (e) => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'scale(1.2)'
        })
        child.addEventListener('mouseleave', (e) => {
            e.target.style.opacity = '0.7'
            e.target.style.transform = 'scale(1.0)'
        })
    }
    setSortBy(select)
    setMovies(movies.sort((a, b) => 
    {
      switch(sortby) {
      case SORT_BY_AZ:
        return (a.title > b.title) || (a.name > b.name) || (a.original_name > b.original_name)? -1: 1;
      case SORT_BY_ZA:
        return (a.title > b.title) || (a.name > b.name) || (a.original_name > b.original_name)? 1: -1;
      default:
        return 0;
    }
  }));
    e.target.style.opacity = '1'
    e.target.style.transform = 'scale(1.2)'
    e.target.addEventListener('mouseleave', (e) => {
        e.target.style.opacity = '1'
        e.target.style.transform = 'scale(1.2)'
    })
}
   const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setMovies(query.results)
    }
  }
   
  return (
    <div className="mt-3">
        <div className="d-flex justify-content-between">
            <div>
                <div className="input-group">
                    <span className="input-group-text border-0"><SearchIcon /></span>
                    <input 
                    placeholder="Cari disini ..."  
                    className="searchMovie"
                    onChange={({ target }) => search(target.value)}
                    />
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="btn-group" role="group" aria-label="sort">
                    <button type="button" className="btn btn-default" onClick={(e) => handleSort(SORT_BY_AZ, e)}> A to Z</button>
                    <button type="button" className="btn btn-default" onClick={(e) => handleSort(SORT_BY_ZA, e)}> Z to A</button>
                </div>
            </div>
      </div>
      <div className="results">
        <FlipMove>
          {movies ? (
            movies
            .map((movie) => <VideoCard key={movie.id} movie={movie} />)
          ) : (
            <p>No Movie Found, Check Your Internet Connection.</p>
          )}
        </FlipMove>
      </div>
    </div>
  );
};

export default Results;
