import Head from "next/head";
import Container from "../components/container";

const Projects = () => {
    return (
        <main>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Projects</title>
                    <meta
                        name="description"
                        content="Tomas Gomez Bermudez-personal-projects-page"></meta>
                    <meta name="theme-color" content="#000000" />
                    <link rel="icon" href="foto.ico" />
                </Head>
                <div className="text">
                    <h1>Projects</h1>
                    <p>
                        Here is a list of some of the projects I've made
                        throught the years, some of them were class projects and
                        others I made them on my spare time. All projects can be
                        found on my Github profile.
                    </p>
                </div>
                <div className="repos">
                    <div className="card">
                        <div className="card-title">
                            Automatic Timelapse Processor
                        </div>
                        <p>
                            The goal of this project was to automate the process
                            of making a timelapse, that includes taking the
                            pictures, apply color correction when needed,
                            histogram equalization and finally export an mp4
                            file with the timelapse with and without processing
                            to compare the results.
                        </p>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>Python</li>
                                <li>OpenCV</li>
                                <li>Pillow</li>
                                <li>Tkinter</li>
                            </ul>
                        </div>
                        <div className="captures">
                            <div className="captures-desktop">
                                <img
                                    src="projects captures/timelapseUI.gif"
                                    alt="automatic-timelapse-processor-app-view"
                                />
                            </div>
                        </div>
                        <div className="repo-link">
                            <a
                                href="https://github.com/TomasGB/Automatic-Timelapse-Processing-App"
                                target="_blank">
                                <img
                                    src="icons/github.png"
                                    alt="github-logo"></img>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">CashFlow Web App</div>
                        <p>
                            Personal finance tracker app developed with React
                            and Next.js for the frontend and Firebase
                            (Authentication and Firestore) for the backend.
                            <a
                                href="https://cashflow.tomasgb.vercel.app/"
                                target="_blank"
                                style={{
                                    textAlign: "left",
                                    color: "royalblue",
                                    font: "Helvetica",
                                    marginTop: "15px",
                                    marginLeft: "15px",
                                    marginBottom: "15px",
                                }}>
                                Website
                            </a>
                        </p>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div className="captures">
                            <div className="captures-web">
                                <img
                                    src="projects captures/cashflowWeb.gif"
                                    alt="Cashflow-app-preview"
                                />
                            </div>
                        </div>
                        <div className="repo-link">
                            <a
                                href="https://github.com/TomasGB/CashFlow-web"
                                target="_blank">
                                <img
                                    src="icons/github.png"
                                    alt="github-logo"></img>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">Voice Assistant</div>
                        <p>
                            Python Assistant capable of taking voice commands
                            and interact with different third party APIs (Google
                            calendar, Twitch, Twitter). The goal it's to
                            automate daily tasks such as: ask for the time, open
                            websites, events on google calendar, check what
                            streamers are currently live, etc.
                        </p>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>Python</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Eel</li>
                                <li>Selenium</li>
                                <li>PyAudio</li>
                                <li>Pyttsx3</li>
                                <li>APIs</li>
                            </ul>
                        </div>
                        <div className="repo-link">
                            <a
                                href="https://github.com/TomasGB/Voice-Assistant"
                                target="_blank">
                                <img
                                    src="icons/github.png"
                                    alt="github-logo"></img>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">
                            Next.js + Express.js Website
                        </div>
                        <p>
                            This website is built using the Next.js framework
                            and styled with jsx for the frontend and the backend
                            runs a NodeJS server throught Express.js .
                        </p>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>Javascript</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        <div className="captures">
                            <div className="captures-mobile">
                                <img
                                    src="projects captures/webportfolio.gif"
                                    alt="portfolio-mobileview"
                                />
                            </div>
                        </div>
                        <div className="repo-link">
                            <a
                                href="https://github.com/TomasGB/Website-Next.js"
                                target="_blank">
                                <img
                                    src="icons/github.png"
                                    alt="github-logo"></img>
                            </a>
                        </div>
                    </div>
                    {/*<div className="card">
                        <div className="card-title">Cash Flow App</div>
                        <p>
                            Personal finance tracker app developed with the
                            React Native, Redux and Firebase (Authentication and
                            Firestore).{" "}
                        </p>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>React Native</li>
                                <li>Redux</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div className="captures">
                            <div className="captures-mobile">
                                <img
                                    src="projects captures/cashflowapp.gif"
                                    alt="Cashflow-app-preview"
                                />
                            </div>
                        </div>
                        <div className="repo-link">
                            <a href="https://github.com/TomasGB/CashFlow-React-Native-App">
                                <img
                                    src="icons/github.png"
                                    alt="github-logo"></img>
                            </a>
                        </div>
                    </div>*/}
                    <div className="card">
                        <div className="card-title">
                            Polygon Surface Calculator
                        </div>
                        <p>
                            This was a class project, the goal was to develop a
                            script able to calculate the area of any 2-D polygon
                            with three diferent methods on MATLAB.
                        </p>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>MATLAB</li>
                            </ul>
                        </div>
                        <div className="repo-link">
                            <a
                                href="https://github.com/TomasGB/Polygon-surface-calculator"
                                target="_blank">
                                <img
                                    src="icons/github.png"
                                    alt="github-logo"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="footer">
                <p>STAY CONNECTED</p>
                <div className="social-icons">
                    <ul>
                        <li>
                            <a
                                href="https://twitter.com/TomasGB_98"
                                target="_blank">
                                <img src="icons/twitter.png"></img>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/gmz.tomas"
                                target="_blank">
                                <img src="icons/instagram.png"></img>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/TomasGB"
                                target="_blank">
                                <img src="icons/github.png"></img>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/tomasgomezbermudez/"
                                target="_blank">
                                <img src="icons/linkedIn.png"></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 2560px) {
                    .text {
                        text-align: center;
                        margin-top: 8%;
                        margin-bottom: 8%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 5%;
                        font: 60px bold;
                        font-family: Helvetica;
                    }
                    .text p {
                        color: #000000;
                        font: 50px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 8% 5% 8%;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        border-radius: 1rem;
                        width: 90%;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 5px;
                        font-size: 40px;
                    }
                    .repos .card .card-title {
                        padding: 3%;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 50px bold;
                        font-family: Helvetica;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5% 3% 5%;
                        text-align: left;
                        font: 40px bold;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 90px;
                        margin-top: 2%;
                        margin-bottom: 10%;
                        border-radius: 50%;
                    }
                    .repo-link a img:hover {
                        border: 5px solid #000000;
                    }
                    h3 {
                        margin: 5% 0% 0% 0%;
                        text-align: center;
                    }
                    .footer {
                        justify-content: center;
                    }
                    .footer p {
                        text-align: center;
                        font-size: 50px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 70px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 4%;
                        margin-bottom: 4%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 90px;
                    }
                    .social-icons li {
                        display: inline-flex;
                        list-style-type: none;
                        margin: 0% 2.5%;
                    }
                    .social-icons a img:hover {
                        border-radius: 50%;
                        border: 3px solid #000000;
                    }
                    .card p {
                        font-family: Helvetica, Arial;
                    }
                    .card h4 {
                        margin: 1% 0%;
                    }
                    .card ul {
                        padding: 1%;
                        width: 80%;
                        margin-bottom: 50px;
                        display: inline-flex;
                        color: #000000;
                    }
                    .card ul li {
                        color: #000000;
                        font-size: 35px;
                        margin-top: 2%;
                        margin-right: 2%;
                        padding: 5px;
                        font-family: "Consolas";
                        background-color: rgba(178, 177, 177, 0.5);
                        width: fit-content;
                        border-radius: 0.5rem;
                        display: inline-flex;
                        justify-content: left;
                    }
                    .captures {
                        width: 95%;
                        display: inline-block;
                        justify-content: center;
                    }
                    .captures-web img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 50px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 90%;
                        height: 70%;
                        margin-bottom: 2%;
                        margin-left: 5%;
                    }
                    .captures-mobile img {
                        width: 25%;
                        height: 35%;
                        margin-left: 5%;
                        margin-bottom: 3%;
                    }
                    .captures-desktop img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 40px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 50%;
                        height: 25%;
                        margin-bottom: 6%;
                        margin-left: 5%;
                    }
                }
                @media (max-width: 2559px) {
                    .text {
                        text-align: center;
                        margin-top: 8%;
                        margin-bottom: 8%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 5%;
                        font: 60px bold;
                        font-family: Helvetica;
                    }
                    .text p {
                        color: #000000;
                        font: 50px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 8% 5% 8%;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        border-radius: 1rem;
                        width: 90%;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 5px;
                        font-size: 40px;
                    }
                    .repos .card .card-title {
                        padding: 3%;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 50px bold;
                        font-family: Helvetica;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5% 3% 5%;
                        text-align: left;
                        font: 40px bold;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 90px;
                        margin-top: 2%;
                        margin-bottom: 10%;
                        border-radius: 50%;
                    }
                    .repo-link a img:hover {
                        border: 5px solid #000000;
                    }
                    h3 {
                        margin: 5% 0% 0% 0%;
                        text-align: center;
                    }
                    .footer {
                        justify-content: center;
                    }
                    .footer p {
                        text-align: center;
                        font-size: 50px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 70px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 4%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 49px;
                    }
                    .social-icons li {
                        display: inline-flex;
                        list-style-type: none;
                        margin: 0% 2.5%;
                    }
                    .social-icons a img:hover {
                        border-radius: 50%;
                        border: 3px solid #000000;
                    }
                    .card p {
                        font-family: Helvetica, Arial;
                    }
                    .card h4 {
                        margin: 1% 0%;
                    }
                    .card ul {
                        padding: 1%;
                        width: 80%;
                        margin-bottom: 50px;
                        display: inline-flex;
                    }
                    .card ul li {
                        color: #000000;
                        font-size: 35px;
                        margin-top: 2%;
                        margin-right: 2%;
                        padding: 5px;
                        font-family: "Consolas";
                        background-color: rgba(178, 177, 177, 0.5);
                        width: fit-content;
                        border-radius: 0.5rem;
                        display: inline-flex;
                        justify-content: left;
                    }
                    .captures {
                        width: 95%;
                        display: inline-block;
                        justify-content: center;
                    }
                    .captures-web img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 50px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 90%;
                        height: 70%;
                        margin-bottom: 2%;
                        margin-left: 5%;
                    }
                    .captures-mobile img {
                        width: 25%;
                        height: 35%;
                        margin-left: 5%;
                        margin-bottom: 3%;
                    }
                    .captures-desktop img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 40px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 50%;
                        height: 25%;
                        margin-bottom: 6%;
                        margin-left: 5%;
                    }
                }
                @media (max-width: 1440px) {
                    .text {
                        text-align: center;
                        margin-top: 8%;
                        margin-bottom: 8%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 5%;
                        font: 30px bold;
                        font-family: Helvetica;
                    }
                    .text p {
                        color: #000000;
                        font: 20px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 8% 5% 8%;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        border-radius: 1rem;
                        width: 90%;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 5px;
                        font-size: 20px;
                    }
                    .repos .card .card-title {
                        padding: 3%;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 30px bold;
                        font-family: Helvetica;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5% 3% 5%;
                        text-align: left;
                        font: 18px bold;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 50px;
                        margin-top: 2%;
                        margin-bottom: 10%;
                        border-radius: 50%;
                    }
                    .repo-link a img:hover {
                        border: 5px solid #000000;
                    }
                    h3 {
                        margin: 5% 0% 0% 0%;
                        text-align: center;
                    }
                    .footer {
                        justify-content: center;
                    }
                    .footer p {
                        text-align: center;
                        font-size: 24px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 50px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 4%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 49px;
                    }
                    .social-icons li {
                        display: inline-flex;
                        list-style-type: none;
                        margin: 0% 2.5%;
                    }
                    .social-icons a img:hover {
                        border-radius: 50%;
                        border: 3px solid #000000;
                    }
                    .card p {
                        font-family: Helvetica, Arial;
                    }
                    .card h4 {
                        margin: 1% 0%;
                    }
                    .card ul {
                        padding: 1%;
                        width: 80%;
                        margin-bottom: 50px;
                        display: inline-flex;
                    }
                    .card ul li {
                        color: #000000;
                        font-size: 16px;
                        margin-top: 2%;
                        margin-right: 2%;
                        padding: 5px;
                        font-family: "Consolas";
                        background-color: rgba(178, 177, 177, 0.5);
                        width: fit-content;
                        border-radius: 0.5rem;
                        display: inline-flex;
                        justify-content: left;
                    }
                    .captures {
                        width: 95%;
                        display: inline-block;
                        justify-content: center;
                    }
                    .captures-web img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 50px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 90%;
                        height: 70%;
                        margin-bottom: 2%;
                        margin-left: 5%;
                    }
                    .captures-mobile img {
                        width: 25%;
                        height: 35%;
                        margin-left: 5%;
                        margin-bottom: 3%;
                    }
                    .captures-desktop img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 40px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 50%;
                        height: 25%;
                        margin-bottom: 6%;
                        margin-left: 5%;
                    }
                }
                @media (max-width: 768px) {
                    .text {
                        text-align: center;
                        margin-top: 8%;
                        margin-bottom: 8%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 5%;
                        font: 24px bold;
                        font-family: Helvetica;
                    }
                    .text p {
                        color: #000000;
                        font: 18px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 8% 5% 8%;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        border-radius: 1rem;
                        width: 90%;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 5px;
                        font-size: 18px;
                    }
                    .repos .card .card-title {
                        padding: 3%;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 22px bold;
                        font-family: Helvetica;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5% 3% 5%;
                        text-align: left;
                        font: 18px bold;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 40px;
                        margin-top: 2%;
                        margin-bottom: 10%;
                        border-radius: 50%;
                    }
                    .repo-link a img:hover {
                        border: 5px solid #000000;
                    }
                    h3 {
                        margin: 5% 0% 0% 0%;
                        text-align: center;
                    }
                    .footer {
                        justify-content: center;
                    }
                    .footer p {
                        text-align: center;
                        font-size: 20px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 50px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 4%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 49px;
                    }
                    .social-icons li {
                        display: inline-flex;
                        list-style-type: none;
                        margin: 0% 2.5%;
                    }
                    .social-icons a img:hover {
                        border-radius: 50%;
                        border: 3px solid #000000;
                    }
                    .card p {
                        font-family: Helvetica, Arial;
                    }
                    .card h4 {
                        margin: 1% 0%;
                    }
                    .card ul {
                        padding: 1%;
                        width: 80%;
                        margin-bottom: 50px;
                        display: inline-flex;
                        flex-wrap: wrap;
                    }
                    .card ul li {
                        color: #000000;
                        font-size: 14px;
                        margin-top: 2%;
                        margin-right: 2%;
                        padding: 5px;
                        font-family: "Consolas";
                        background-color: rgba(178, 177, 177, 0.5);
                        width: fit-content;
                        border-radius: 0.5rem;
                        display: inline-flex;
                        justify-content: left;
                    }
                    .captures {
                        width: 95%;
                        display: inline-block;
                        justify-content: center;
                    }
                    .captures-web img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 50px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 90%;
                        height: 70%;
                        margin-bottom: 2%;
                        margin-left: 5%;
                    }
                    .captures-mobile img {
                        width: 25%;
                        height: 35%;
                        margin-left: 5%;
                        margin-bottom: 3%;
                    }
                    .captures-desktop img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 40px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 50%;
                        height: 25%;
                        margin-bottom: 6%;
                        margin-left: 5%;
                    }
                }
                @media (max-width: 425px) {
                    .text {
                        text-align: center;
                        margin-top: 8%;
                        margin-bottom: 8%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 7%;
                        font: 20px bold;
                        font-family: Helvetica;
                    }
                    .text p {
                        color: #000000;
                        font: 16px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 8% 5% 8%;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        border-radius: 1rem;
                        width: 90%;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 5px;
                        font-size: 16px;
                    }
                    .repos .card .card-title {
                        padding: 3%;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 22px bold;
                        font-family: Helvetica;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5%;
                        text-align: left;
                        font: 16px bold;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 40px;
                        margin-top: 2%;
                        margin-bottom: 10%;
                        border-radius: 50%;
                    }
                    .repo-link a img:hover {
                        border: 5px solid #000000;
                    }
                    h3 {
                        margin: 5% 0% 0% 0%;
                        text-align: center;
                    }
                    .footer {
                        justify-content: center;
                    }
                    .footer p {
                        text-align: center;
                        font-size: 20px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 50px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 10%;
                        margin-bottom: 10%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 49px;
                    }
                    .social-icons li {
                        display: inline-flex;
                        list-style-type: none;
                        margin: 0% 2.5%;
                    }
                    .social-icons a img:hover {
                        border-radius: 50%;
                        border: 3px solid #000000;
                    }
                    .card p {
                        font-family: Helvetica, Arial;
                    }
                    .card h4 {
                        margin: 1% 0%;
                    }
                    .card ul {
                        padding: 1%;
                        width: 80%;
                        margin-bottom: 50px;
                        display: inline-flex;
                        flex-wrap: wrap;
                    }
                    .card ul li {
                        color: #000000;
                        font-size: 14px;
                        margin-top: 2%;
                        margin-right: 2%;
                        padding: 5px;
                        font-family: "Consolas";
                        background-color: rgba(178, 177, 177, 0.5);
                        width: fit-content;
                        border-radius: 0.5rem;
                        display: inline-flex;
                        justify-content: left;
                    }
                    .captures {
                        width: 95%;
                        display: inline-block;
                        justify-content: center;
                    }
                    .captures-web img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 50px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 90%;
                        height: 70%;
                        margin-bottom: 2%;
                        margin-left: 5%;
                    }
                    .captures-mobile img {
                        width: 25%;
                        height: 35%;
                        margin-left: 5%;
                        margin-bottom: 3%;
                    }
                    .captures-desktop img {
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1),
                            0 6px 40px 0 rgba(0, 0, 0, 0.4);
                        border-radius: 0.5rem;
                        width: 50%;
                        height: 25%;
                        margin-bottom: 6%;
                        margin-left: 5%;
                    }
                }
            `}</style>
        </main>
    );
};
export default Projects;
