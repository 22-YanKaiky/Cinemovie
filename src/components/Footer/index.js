import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <p className="all-rights">
                &copy; 2021 Cinemovie, Inc. All rights reserveds <a href="https://www.linkedin.com/in/yan-kaiky-augusto-dos-santos-652418186/" rel="noreferrer" target="_blank">Yan Kaiky</a>
            </p>

            <div className="social-media">
                <a href="https://web.whatsapp.com/send?phone=5547999556723" rel="noreferrer" target="_blank">WhatsApp</a>

                <a href="mailto:yankaikys@gmail.com" rel="noreferrer" target="_blank">Email</a>

                <a href="tel:47999556723" rel="noreferrer" target="_blank">Telefone</a>

                <a href="https://github.com/22-YanKaiky" rel="noreferrer" target="_blank">GitHub</a>

                <a href="https://www.linkedin.com/in/yan-kaiky-augusto-dos-santos-652418186/" rel="noreferrer" target="_blank">LinkedIn</a>
            </div>
        </footer>
    )
}