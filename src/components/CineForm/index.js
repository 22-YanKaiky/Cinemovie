import React, { useState } from "react";
// import AnimesAPI from "../../services/AnimesAPI";
// import MoviesAPI from "../../services/MoviesAPI";
import SeriesAPI from "../../services/SeriesAPI";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";
import {videoPost} from '../../services/SeriesAPI' 
export default function CineForm() {
    const listObj = {
        type: "",
        name: "",
        src: "",
        year: 0,
        genre: "",
        seasons: 0,
        episodes: 0,
        direction: "",
        synopsis: "",
        trailer: "",
        link: ""
    }

    const [video, setVideo] = useState(listObj)
    
    useEffect(async () => {
        const response = await videoPost(video)
        console.log(response); 
    }, [video])

    function handleChange(event) {
        const {name, value} = event.target;

        setVideo({...video,
            [name]: value
        })

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

            <Input onChange={handleChange} value={video.name} name="name" placeholder="Nome"/>
            <Input onChange={handleChange} value={video.src} name="src" placeholder="Link da Imagem"/>
            <Input onChange={handleChange} value={video.year} name="year" placeholder="Ano"/>
            <Input onChange={handleChange} value={video.genre} name="genre" placeholder="Genero"/>
            <Input onChange={handleChange} value={video.seasons} name="seasons" placeholder="Temporadas"/>
            <Input onChange={handleChange} value={video.episodes} name="episodes" placeholder="Episodios"/>
            <Input onChange={handleChange} value={video.direction} name="direction" placeholder="Direcao"/>
            <Input onChange={handleChange} value={video.synopsis} name="synopsis" placeholder="Sinopse"/>
            <Input onChange={handleChange} value={video.trailer} name="trailer" placeholder="Trailer"/>
            <Input onChange={handleChange} value={video.link} name="link" placeholder="Link do Video"/>

            <Button type="submit">Enviar</Button>
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