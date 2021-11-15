import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styled from "styled-components";

export default function Select({ name, ...rest }) {

    const Select = styled.select`
        color: rgb(155, 154, 154);
        border-radius: 8px;
        width: 100%;
        border: 3px solid red;
        background-color: transparent;
        font-size: 16pt;
        padding: 15px;
        appearance: none;
    `;

    const selectRef = useRef(null)
    const { fieldName, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <div>
            <Select ref={selectRef} {...rest}>
                <option disabled selected>Selecione...</option>
                <option>Anime</option>
                <option>Filme</option>
                <option>Séries</option>
            </Select>
            <br/>

            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    )
}