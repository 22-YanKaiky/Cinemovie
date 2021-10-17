import React, { useState, useEffect } from "react";
import SERIESAPI from "../../services/SeriesAPI";
import Series from "../../components/Series";
import Navbar from "../../components/Navbar";
import Avatar from "../../icons/avatar.jpg";
import axios from "axios";

export default function PageSeries() {
    const [series, setSeries] = useState([])

    useEffect(() => {
        async function Series() {
            let results = await axios.get(SERIESAPI)
            setSeries(results.data)
        }

        Series()
    }, []);

    return (
        <div>
            <Navbar
                src={Avatar}
            />

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