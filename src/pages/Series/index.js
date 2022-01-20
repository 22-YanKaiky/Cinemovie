import React, { useState, useEffect } from "react";
import SERIESAPI from "../../services/SeriesAPI";
import Series from "../../components/Series";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Footer from "../../components/Footer";

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
        <>
            <Navbar />

            <div>
                {series.map((serie) => (
                    <Series
                        link={serie.link}
                        name={serie.name}
                        folder={serie.folder}
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

            <Footer />
        </>
    )
}