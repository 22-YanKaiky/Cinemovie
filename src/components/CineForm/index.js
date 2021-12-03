import React, { useState, useEffect } from "react";
// import AnimesAPI from "../../services/AnimesAPI";
// import MoviesAPI from "../../services/MoviesAPI";
import SeriesAPI from "../../services/SeriesAPI";
import styled from "styled-components";
import axios from "axios";

export default function CineForm() {
    let videoObj = {
        type: '',
        name: '',
        src: '',
        year: '',
        genre: '',
        seasons: '',
        episodes: '',
        folder: '',
        direction: '',
        synopsis: '',
        trailer: '',
        link: ''
    }

    const [video, setVideo] = useState(videoObj);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post(SeriesAPI, video);
                
                console.log(response.data);
            } catch (e) {
                console.log(e.message)
            }
        }
        fetchData();
    }, [video]);

    function handleChange(event) {
        const { name, value } = event.target;
        setVideo((video) => {
            return {
                ...video,
                [name]: value,
            };
        });

        console.log(event.target)
    }


    return (
        <form>
            <Select onChange={handleChange} value={video.type} name="type">
                <option disabled>Selecione</option>
                <option value="anime">Anime</option>
                <option value="movies">Filmes</option>
                <option value="series">Series</option>
            </Select>

            <Input onChange={handleChange} value={video.name} name="name" placeholder="Nome" />
            <Input onChange={handleChange} value={video.src} name="src" placeholder="Link da Imagem" />
            <Input onChange={handleChange} value={video.year} name="year" placeholder="Ano" />
            <Input onChange={handleChange} value={video.genre} name="genre" placeholder="Genero" />
            <Input onChange={handleChange} value={video.seasons} name="seasons" placeholder="Temporadas" />
            <Input onChange={handleChange} value={video.episodes} name="episodes" placeholder="Episodios" />
            <Input onChange={handleChange} value={video.folder} name="folder" placeholder="Folder" />
            <Input onChange={handleChange} value={video.direction} name="direction" placeholder="Direcao" />
            <Input onChange={handleChange} value={video.synopsis} name="synopsis" placeholder="Sinopse" />
            <Input onChange={handleChange} value={video.trailer} name="trailer" placeholder="Trailer" />
            <Input onChange={handleChange} value={video.link} name="link" placeholder="Link do Video" />

            <Button onSubmit={setVideo} type="submit">Enviar</Button>
        </form>
    )
}

const Input = styled.input`
    padding: 16px;
`;

const Select = styled.select`
    padding: 16px;
`;

const Button = styled.button`
    padding: 16px;
`;
