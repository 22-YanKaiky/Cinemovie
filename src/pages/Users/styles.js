import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    img {
        width: 45%;
        border: 4px solid red;
        border-radius: 50%;
    }

    h1 {
        padding: 3rem;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    img {
        width: 45%;
        border: 4px solid red;
        border-radius: 50%;
    }

    h1 {
        padding: 3rem;
    }
`;
