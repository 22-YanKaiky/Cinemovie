import React, { useState } from "react";
import AnimesAPI from "../../services/AnimesAPI";
import MoviesAPI from "../../services/MoviesAPI";
import SeriesAPI from "../../services/SeriesAPI";
import styled from "styled-components";
import axios from "axios";

export default function CineForm() {
    const animeSerieObj = {
        type: '',
        name: '',
        year: '',
        genre: '',
        seasons: '',
        episodes: '',
        folder: '',
        direction: '',
        synopsis: '',
        trailer: '',
        link: '',
    }

    const movieObj = {
        type: '',
        name: '',
        genre: '',
        year: '',
        time: '',
        folder: '',
        direction: '',
        synopsis: '',
        trailer: '',
        link: '',
    }

    const [videoObj, setVideoObj] = useState({});
    const [video, setVideo] = useState(videoObj);
    const [api, setApi] = useState();

    const setInput = (event) => {
        const { name, value } = event.target;
        const newVideo = {
            ...video,
            [name]: value,
        };

        if (value === 'anime') {
            setVideoObj(animeSerieObj)
            console.log(videoObj)
            setApi(AnimesAPI);
        }

        if (value === 'movies') {
            setVideoObj(movieObj)
            console.log(videoObj)
            setApi(MoviesAPI)
        }

        if (value === 'series') {
            setVideoObj(animeSerieObj)
            console.log(videoObj)
            setApi(SeriesAPI);
        }

        setVideo(newVideo)
    }

    const [sending, setSending] = useState(false);

    const sendRequest = async () => {
        if (sending) return;
        setSending(true);
        const videoReq = {
            ...video,
        };

        await axios.post(api, videoReq);

        setSending(false);
    }

    console.log(video.type)

    return (
        <Form
            onChange={setInput}
            onSubmit={(e) => {
                e.preventDefault();
                sendRequest();
            }}
        >
            <Div>
                <Select onChange={setInput} value={video.type} name="type">
                    <option selected>- Selecione -</option>
                    <option value="anime">Anime</option>
                    <option value="movies">Filmes</option>
                    <option value="series">Series</option>
                </Select>
            </Div>

            {(video.type === 'anime') || (video.type === 'series') ?
                <>
                    <Input onChange={setInput} value={video.name} name="name" placeholder="Nome" />

                    <Div>
                        <Input onChange={setInput} value={video.year} name="year" type="number" placeholder="Ano de Lançamento" />
                        <Input onChange={setInput} value={video.genre} name="genre" placeholder="Gênero" />
                    </Div>
                    <Div>
                        <Input onChange={setInput} value={video.seasons} name="seasons" type="number" placeholder="Temporadas" />
                        <Input onChange={setInput} value={video.episodes} name="episodes" type="number" placeholder="Episódios" />
                    </Div>
                    <Div>
                        <Input onChange={setInput} value={video.folder} name="folder" placeholder="Folder" />
                        <Input onChange={setInput} value={video.direction} name="direction" placeholder="Direção" />
                    </Div>
                    <Div>
                        <TextArea rows={4} onChange={setInput} value={video.synopsis} name="synopsis" placeholder="Sinopse" />
                    </Div>
                    <Div>
                        <Input onChange={setInput} value={video.trailer} name="trailer" placeholder="Trailer" />
                        <Input onChange={setInput} value={video.link} name="link" placeholder="Link do Vídeo" />
                    </Div>

                    <Div>
                        <Button type="submit">Enviar</Button>
                    </Div>
                </> : (video.type === 'movies' ?
                    <>
                        <Div>
                            <Input onChange={setInput} value={video.name} name="name" placeholder="Nome" />
                            <Input onChange={setInput} value={video.genre} name="genre" placeholder="Gênero" />
                        </Div>
                        <Div>
                            <Input onChange={setInput} value={video.year} name="year" type="number" placeholder="Ano de Lançamento" />
                            <Input onChange={setInput} value={video.time} name="time" placeholder="Duração - 1h 40m" />
                        </Div>
                        <Div>
                            <Input onChange={setInput} value={video.folder} name="folder" placeholder="Folder" />
                            <Input onChange={setInput} value={video.direction} name="direction" placeholder="Direção" />
                        </Div>
                        <Div>
                            <TextArea rows={4} onChange={setInput} value={video.synopsis} name="synopsis" placeholder="Sinopse" />
                        </Div>
                        <Div>
                            <Input onChange={setInput} value={video.trailer} name="trailer" placeholder="Trailer" />
                            <Input onChange={setInput} value={video.link} name="link" placeholder="Link do Vídeo" />
                        </Div>

                        <Div>
                            <Button type="submit">Enviar</Button>
                        </Div>
                    </>
                    :
                    <></>)
            }
        </Form>
    )
}

const Form = styled.form`
    margin: 15px;
    justify-content: center;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Select = styled.select`
    padding: 16px;
    margin: 6px;
    font-size: 14pt;
    background-color: #282727;
    color: white;
    border: none;
    border-radius: 8px;
    width: 100%;
`;

const Input = styled.input`
    padding: 16px;
    margin: 6px;
    font-size: 14pt;    
    background-color: transparent;
    color: white;
    border: 3px solid red;
    border-radius: 8px;
    width: 96.6%;
`;

const TextArea = styled.textarea`
    padding: 16px;
    margin: 6px;
    font-size: 12pt;    
    background-color: transparent;
    color: white;
    resize: none;
    border: 3px solid red;
    border-radius: 8px;
    width: 100%;
`;

const Button = styled.button`
    padding: 16px;
    margin-top: 2rem;
    font-size: 16pt;    
    background-color: blue;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 40%;
`;
