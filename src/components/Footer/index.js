import React from "react";
import { Link } from "react-router-dom"
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";
import { BsWhatsapp, BsTelephoneFill } from "react-icons/bs";

import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <p className="all-rights">
                &copy; 2021&nbsp; 
                <Link className="cinemovie-inc" exact to="/">
                Cinemovie, Inc.
                </Link>
                &nbsp;All rights reserveds <a href="https://www.linkedin.com/in/yan-kaiky-augusto-dos-santos-652418186/" rel="noreferrer" target="_blank">Yan Kaiky.</a>
            </p>

            <div className="social-media">
                <a href="https://web.whatsapp.com/send?phone=5547999556723" rel="noreferrer" target="_blank"><BsWhatsapp /></a>

                <a href="mailto:yankaikys@gmail.com" rel="noreferrer" target="_blank"><AiOutlineMail /></a>

                <a href="tel:47999556723" rel="noreferrer" target="_blank"><BsTelephoneFill /></a>

                <a href="https://www.instagram.com/yank.a.s.12/" rel="noreferrer" target="_blank"><SiInstagram /></a>

                <a href="https://www.facebook.com/yankaikyaugusto.dossantos" rel="noreferrer" target="_blank"><SiFacebook /></a>

                <a href="https://github.com/22-YanKaiky" rel="noreferrer" target="_blank"><GoMarkGithub /></a>

                <a href="https://www.linkedin.com/in/yan-kaiky-augusto-dos-santos-652418186/" rel="noreferrer" target="_blank"><SiLinkedin /></a>
            </div>
        </footer>
    )
}