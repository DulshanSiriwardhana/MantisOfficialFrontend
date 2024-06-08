import React from "react";
import './footer.css'
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'

const Footer =()=>{

    return(
        <div className="footercontainer">
            <footer className="footer">
                <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="https://web.facebook.com/dulshan.siriwardhana/">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/DulshanSiriwardhana">
                    <ion-icon name="logo-github"></ion-icon>
                    </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/dulshan-siriwardhana-17b77521a/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/dulshansiriwardhana/">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>
                <ul className="menu">
                <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
                <li className="menu__item"><a className="menu__link" href="/about">About</a></li>
                <li className="menu__item"><a className="menu__link" href="/articles">Projects</a></li>
                <li className="menu__item"><a className="menu__link" href="https://drive.google.com/file/d/1x6IbrGWE5qMCXJTUfxwhhYgEZW1uydz9/view?usp=sharing">CV</a></li>
                <li className="menu__item"><a className="menu__link" href="/contact">Contact</a></li>

                </ul>
                <p>&copy;{new Date().getFullYear()} MantisOfficial | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Footer;