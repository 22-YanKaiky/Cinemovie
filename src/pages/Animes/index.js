import React from "react";
import ANIMESAPI from "../../services/AnimesAPI";
import Animes from "../../components/Animes";
import Navbar from "../../components/Navbar";
import Avatar from "../../icons/avatar.jpg"
import axios from "axios";

export default function PageAnimes() {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        async function Animes() {
            let results = await axios.get(ANIMESAPI)
            setAnimes(results.data)
        }

        Animes()
    }, []);

    return (
        <div>
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
        </div>
    )
}