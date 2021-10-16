import React, { useState, useEffect } from "react";
import Movies from "../Movies";
import Series from "../Series";
import MOVIESAPI from "../../services/MoviesAPI";
import SERIESAPI from "../../services/SeriesAPI";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    async function Movies() {
      let results = await axios.get(MOVIESAPI)
      setMovies(results.data)
      console.log(results.data)
    }

    Movies()
  }, []);

  useEffect(() => {
    async function Series() {
      let results = await axios.get(SERIESAPI)
      setSeries(results.data)
      console.log(results.data)
    }

    Series()
  }, []);

  return (
    <div className="App">
      {movies.map((movie) => (
        <Movies
          name={movie.name}
          src={movie.folder}
          genre={movie.genre}
          time={movie.time}
          year={movie.year}
          synopsis={movie.synopsis}
          trailer={movie.trailer}
        />
      ))}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <hr style={{ width: "95%" }} />
      </div>

      {series.map((serie) => (
        <Series
          name={serie.name}
          src={serie.folder}
          year={serie.year}
          genre={serie.genre}
          seasons={serie.seasons}
          episodes={serie.episodes}
          synopsis={serie.synopsis}
          trailer={serie.trailer}
        />
      ))}
    </div>
  )
}