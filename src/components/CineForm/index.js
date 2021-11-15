import React, { useRef } from "react";
import Navbar from "../Navbar";
import { Form } from "@unform/web"
import Input from "../Form/Input";
import styled from "styled-components";
import "./cineform.css";
import Select from "../Form/Select";

export default function CineForm() {
    const Button = styled.button`
        color: #fff;
        background-color: #11e828;
        border: none;
        border-radius: 8px;
        padding: 15px;
        cursor: pointer;
        font-size: 15pt;
        margin-top: 2rem;
        font-weight: 700;
        width: 20%;
    `;

    const formRef = useRef(null);

    function handleSubmit(data) {
        if (data.name === '') {
            formRef.current.setErrors({
                type: 'Tipo de Video não pode ser nulo',
                name: 'Nome não pode ser nulo',
                src: 'Imagem não pode ser nula',
                year: 'Ano não pode ser nulo',
                genre: 'Genero não pode ser nulo',
                seasons: 'Temporadas não pode ser nula',
                episodes: 'Episodios não pode ser nulo',
                direction: 'Direcao não pode ser nulo',
                synopsis: 'Sinopse não pode ser nula',
                trailer: 'Trailer não pode ser nulo'
            })
        }

        console.log(data);
    }

    return (
        <>
            <Navbar />

            <Form style={{ margin: "3rem" }} ref={formRef} onSubmit={handleSubmit}>
                <Select name="type" />

                <Input name="name" placeholder="Nome" />
                <Input name="src" placeholder="Imagem" />
                <Input name="year" placeholder="Ano" type="number" />
                <Input name="genre" placeholder="Genero" />
                <Input name="seasons" placeholder="Temporadas" type="number" />
                <Input name="episodes" placeholder="Episodios" type="number" />
                <Input name="direction" placeholder="Direcao" />
                <Input name="synopsis" placeholder="Sinopse" />
                <Input name="trailer" placeholder="Trailer" />

                <Button type="submit">Salvar</Button>
            </Form>
        </>
    )
}