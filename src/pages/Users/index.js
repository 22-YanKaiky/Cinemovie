import React from "react";
import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import Avatar from "../../images/avatar.jpg";
import { Div, Section, Card } from './styles';

export default function PageUser() {
    return (
        <>
            <NavbarUser />

            <Div>
                <Card>
                    <img src={Avatar} />

                    <h1>Yan Kaiky</h1>
                </Card>

                <Section>
                    <img src={Avatar} />

                    <h1>Yan Kaiky</h1>
                </Section>
            </Div>

            <Footer />
        </>
    )
}