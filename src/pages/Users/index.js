import React from "react";
import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import Avatar from "../../images/avatar.jpg";
import "./users.css";

export default function PageUser() {
    return (
        <>
            <NavbarUser />

            <div className="img">
                <section>
                    <img src={Avatar} />
                </section>
            </div>

            <div className="information">
                <h1>Yan Kaiky</h1>
            </div>

            <Footer />
        </>
    )
}