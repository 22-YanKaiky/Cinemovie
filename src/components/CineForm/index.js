import React, { useState } from "react";
// import AnimesAPI from "../../services/AnimesAPI";
// import MoviesAPI from "../../services/MoviesAPI";
import SeriesAPI from "../../services/SeriesAPI";
import styled from "styled-components";
import axios from "axios";

export default function CineForm() {
    const videoObj = {
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

    const setInput = (event) => {
        const { name, value } = event.target;
        const newVideo = {
            ...video,
            [name]: value,
        };

        setVideo(newVideo)

        console.log(event.target)
    }

    const [sending, setSending] = useState(false);

    const sendRequest = async () => {
        if (sending) return;
        setSending(true);
        const videoReq = {
            ...video,
        };

        await axios.post(SeriesAPI, videoReq);

        setSending(false);
    }

    return (
        <form
            onChange={setInput}
            onSubmit={(e) => {
                e.preventDefault();
                sendRequest();
            }}
        >
            <Select onChange={setInput} value={video.type} name="type">
                <option disabled>Selecione</option>
                <option value="anime">Anime</option>
                <option value="movies">Filmes</option>
                <option value="series">Series</option>
            </Select>

            <Input onChange={setInput} value={video.name} name="name" placeholder="Nome" />
            <Input onChange={setInput} value={video.src} name="src" placeholder="Link da Imagem" />
            <Input onChange={setInput} value={video.year} name="year" placeholder="Ano" />
            <Input onChange={setInput} value={video.genre} name="genre" placeholder="Genero" />
            <Input onChange={setInput} value={video.seasons} name="seasons" placeholder="Temporadas" />
            <Input onChange={setInput} value={video.episodes} name="episodes" placeholder="Episodios" />
            <Input onChange={setInput} value={video.folder} name="folder" placeholder="Folder" />
            <Input onChange={setInput} value={video.direction} name="direction" placeholder="Direcao" />
            <Input onChange={setInput} value={video.synopsis} name="synopsis" placeholder="Sinopse" />
            <Input onChange={setInput} value={video.trailer} name="trailer" placeholder="Trailer" />
            <Input onChange={setInput} value={video.link} name="link" placeholder="Link do Video" />

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
