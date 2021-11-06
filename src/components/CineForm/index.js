import React from "react";
import Navbar from "../Navbar";
import "./cineform.css";

export default function CineForm() {
    return (
        <>
            <Navbar />

            <form>
                <div>
                <label>
                    Nome <br/>
                    <input />
                </label>
                </div>
            </form>
        </>
    )
}