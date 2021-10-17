import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Animes from "../Animes";
import Movies from "../Movies";
import Series from "../Series";
import Avatar from "../../icons/avatar.jpg"
import ANIMESAPI from "../../services/AnimesAPI";
import MOVIESAPI from "../../services/MoviesAPI";
import SERIESAPI from "../../services/SeriesAPI";
import axios from "axios";

export default function Home() {
  const [animes, setAnimes] = useState([])
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    async function Animes() {
      let results = await axios.get(ANIMESAPI)
      setAnimes(results.data)
    }

    Animes()
  }, []);
  
  useEffect(() => {
    async function Movies() {
      let results = await axios.get(MOVIESAPI)
      setMovies(results.data)
    }

    Movies()
  }, []);

  useEffect(() => {
    async function Series() {
      let results = await axios.get(SERIESAPI)
      setSeries(results.data)
    }

    Series()
  }, []);

  return (
    <div className="App">
      <Navbar 
        src={Avatar}
      />

      {animes.map((anime) => (
        <Animes
          name={anime.name}
          src={anime.folder}
          year={anime.year}
          genre={anime.genre}
          seasons={anime.seasons}
          episodes={anime.episodes}
          direction={anime.direction}
          synopsis={anime.synopsis}
          trailer={anime.trailer}
        />
      ))}

      {movies.map((movie) => (
        <Movies
          name={movie.name}
          src={movie.folder}
          genre={movie.genre}
          time={movie.time}
          year={movie.year}
          direction={movie.direction}
          synopsis={movie.synopsis}
          trailer={movie.trailer}
        />
      ))}

      {series.map((serie) => (
        <Series
          name={serie.name}
          src={serie.folder}
          year={serie.year}
          genre={serie.genre}
          seasons={serie.seasons}
          episodes={serie.episodes}
          direction={serie.direction}
          synopsis={serie.synopsis}
          trailer={serie.trailer}
        />
      ))}
    </div>
  )
}