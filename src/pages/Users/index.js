import React from "react";
import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import Avatar from "../../images/avatar.jpg";
import "./users.css";

export default function PageUser() {
    return (
        <>
            <NavbarUser />

            <div className="container-users">
                <div className="div-avatar ">
                    <img src={Avatar} alt="Avatar" title="Avatar" />
                </div>
            </div>


            <Footer />      
        </>
    )
}