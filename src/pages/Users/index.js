import React from "react";
import Navbar from "../../components/Navbar";

export default function PageUser() {
    return (
        <>
            <Navbar />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>Usuários</h1>
            </div>
        </>
    )
}