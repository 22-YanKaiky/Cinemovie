import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styled from "styled-components";

export default function Input({ name, ...rest }) {

    const Input = styled.input`
        color: rgb(155, 154, 154);
        border-radius: 8px;
        border: 3px solid red;
        background-color: transparent;
        font-size: 16pt;
        margin-top: 2rem;
        padding: 15px;
    `;

    const inputRef = useRef(null)
    const { fieldName, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <div>
            <Input ref={inputRef} {...rest} />
            <br/>

            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    )
}