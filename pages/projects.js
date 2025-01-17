import Head from "next/head";
import Container from "../components/container";

const Projects2 = () => {
    return (
        <main>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Projects</title>
                    <meta
                        name="description"
                        content="Tomas Gomez Bermudez-personal-projects-page"></meta>
                    <meta name="theme-color" content="#202020" />
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
                            📷 Automatic Timelapse Processor
                        </div>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>Python</li>
                                <li>OpenCV</li>
                                <li>Pillow</li>
                                <li>Tkinter</li>
                            </ul>
                        </div>
                        <p className="card-description">
                            The goal of this project was to automate the process
                            of making a timelapse, that includes taking
                            pictures, apply gamma correction and histogram
                            equalization when needed and finally export an mp4
                            files with of the timelapse with and without
                            processing to compare the results.
                            <a
                                href="https://timelapsing.vercel.app/"
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
                        <div className="card-title">💵 CashFlow Web App</div>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>NodeJS</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <p className="card-description">
                            Personal finance tracker app developed with React
                            and Next.js for the frontend and Firebase for the
                            backend, Firebase Authentication to register and
                            authenticate users and Firebase Firestore as
                            database.
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
                        <div className="card-title">
                            🚌 Realtime Bus Tracker
                        </div>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>Python</li>
                                <li>Flask</li>
                                <li>Folium</li>
                                <li>APIs</li>
                            </ul>
                        </div>
                        <p className="card-description">
                            Web application to keep track on realtime of
                            different bus lines and display them on a map,
                            utilizing Python, Flask, Folium and city's API.
                            <a
                                href="https://busgpsapi.herokuapp.com/"
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
                        <div className="repo-link">
                            <a
                                href="https://github.com/TomasGB/bus-tracker-web-app"
                                target="_blank">
                                <img
                                    src="icons/github.png"
                                    alt="github-logo"></img>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">🤖 Voice Assistant </div>
                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>Python</li>
                                <li>Selenium Webdriver</li>
                                <li>PyAudio</li>
                                <li>Pyttsx3</li>
                                <li>APIs</li>
                            </ul>
                        </div>
                        <p className="card-description">
                            Python Assistant capable of taking voice commands
                            and interact with different third party APIs (Google
                            calendar, Twitch, Twitter). The goal it's to
                            automate daily tasks such as: ask for the time, open
                            websites, events on google calendar, check what
                            streamers are currently live, etc.
                        </p>
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
                        <div className="card-title">💼 Portfolio Website</div>
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
                        <p className="card-description">
                            This website is built using the Next.js framework
                            and styled with jsx for the frontend and the backend
                            runs a NodeJS server throught Express.js .
                        </p>
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
                    <div className="card">
                        <div className="card-title">
                            🔷 Polygon Surface Calculator
                        </div>

                        <div className="cardTech">
                            <p>Technologies used:</p>
                            <ul>
                                <li>MATLAB</li>
                            </ul>
                        </div>
                        <p className="card-description">
                            This was a class project, the goal was to develop a
                            script able to calculate the area of any 2-D polygon
                            with three diferent methods on MATLAB.
                        </p>
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
                @media (min-width: 2561px) {
                    .text {
                        text-align: center;
                        margin-top: 5%;
                        margin-bottom: 5%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 7%;
                        font: 75px bold;
                        font-family: Helvetica;
                    }
                    .text p {
                        color: #000000;
                        font: 40px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 2% 5% 2%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        width: 100%;
                        justify-content: center;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        padding-bottom: 5%;
                        border-radius: 1rem;
                        width: 600px;
                        height: 900px;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 25px;
                        font-size: 35px;
                    }
                    .repos .card .cardTech ul {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-self: center;
                        margin: 0% 0% 5% 0%;
                        width: 100%;
                    }
                    .repos .card .cardTech li {
                        font-size: 28px;
                    }
                    .repos .card .card-title {
                        padding: 5%;
                        height: 150px;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 42px bold;
                        font-family: Helvetica;
                    }
                    .repos .card-description {
                        background-color: #ffffff;
                        color: #000000;
                        text-align: center;
                        font: 28px bold;
                        font-family: Helvetica;
                        height: fit-content;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5%;
                        text-align: left;
                        font: 50px bold;
                    }
                    .repo-link {
                        margin-top: 5%;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 65px;
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
                        font-size: 45px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 80px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 4%;
                        margin-bottom: 5%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 70px;
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
                        margin-bottom: 20%;
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
                @media (max-width: 2560px) {
                    .text {
                        text-align: center;
                        margin-top: 5%;
                        margin-bottom: 5%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 7%;
                        font: 75px bold;
                        font-family: Helvetica;
                    }
                    .text p {
                        color: #000000;
                        font: 40px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 2% 5% 2%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        width: 100%;
                        justify-content: center;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        padding-bottom: 5%;
                        border-radius: 1rem;
                        width: 600px;
                        height: 900px;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 25px;
                        font-size: 35px;
                    }
                    .repos .card .cardTech ul {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-self: center;
                        margin: 0% 0% 5% 0%;
                        width: 100%;
                    }
                    .repos .card .cardTech li {
                        font-size: 28px;
                    }
                    .repos .card .card-title {
                        padding: 5%;
                        height: 150px;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 42px bold;
                        font-family: Helvetica;
                    }
                    .repos .card-description {
                        background-color: #ffffff;
                        color: #000000;
                        text-align: center;
                        font: 28px bold;
                        font-family: Helvetica;
                        height: fit-content;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5%;
                        text-align: left;
                        font: 50px bold;
                    }
                    .repo-link {
                        margin-top: 5%;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 65px;
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
                        font-size: 45px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 80px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 4%;
                        margin-bottom: 5%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 70px;
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
                        margin-bottom: 20%;
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
                @media (max-width: 1441px) {
                    .text {
                        text-align: center;
                        margin-top: 5%;
                        margin-bottom: 5%;
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
                        font: 16px bold;
                        font-family: Helvetica;
                    }
                    .repos {
                        background-color: #454545;
                        text-align: center;
                        margin: 5% 0% 0% 0%;
                        padding: 10% 2% 5% 2%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        width: 100%;
                        justify-content: center;
                    }
                    .repos .card {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        padding-bottom: 5%;
                        border-radius: 1rem;
                        width: 300px;
                        height: 500px;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 5px;
                        font-size: 18px;
                    }
                    .repos .card .cardTech ul {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-self: center;
                        margin: 0% 0% 5% 0%;
                        width: 100%;
                        min-height: 80px;
                    }
                    .repos .card .cardTech li {
                        font-size: 14px;
                        height: fit-content;
                    }
                    .repos .card .card-title {
                        padding: 5%;
                        height: 70px;
                        background-color: #202020;
                        border-top-left-radius: 1rem;
                        border-top-right-radius: 1rem;
                        color: white;
                        font: 20px bold;
                        font-family: Helvetica;
                        min-height: 80px;
                    }
                    .repos .card-description {
                        color: #000000;
                        text-align: center;
                        font: 14px bold;
                        font-family: Helvetica;
                        min-height: 150px;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 5%;
                        text-align: left;
                        font: 50px bold;
                    }
                    .repo-link {
                        margin-top: 5%;
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
                        font-size: 25px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 50px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 5%;
                        margin-bottom: 2%;
                        margin-left: -7%;
                    }
                    .social-icons li a img {
                        width: 40px;
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
                        margin-bottom: 20%;
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
                @media (max-width: 1024px) {
                    .text {
                        text-align: center;
                        margin-top: 8%;
                        margin-bottom: 8%;
                        margin-left: 10%;
                        width: 80%;
                    }
                    .text h1 {
                        margin-bottom: 7%;
                        font: 40px bold;
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
                        padding-bottom: 5%;
                        border-radius: 1rem;
                        width: 90%;
                        height: fit-content;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 15px;
                        font-size: 30px;
                    }
                    .repos .card .cardTech ul {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-self: center;
                        margin: 2% 0%;
                    }
                    .repos .card .cardTech li {
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
                    .repos .card-description {
                        background-color: #ffffff;
                        color: #000000;
                        text-align: center;
                        font: 24px bold;
                        font-family: Helvetica;
                        height: fit-content;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 2% 5%;
                        text-align: left;
                        font: 50px bold;
                    }
                    .repo-link {
                        margin-top: 5%;
                    }
                    .repo-link a img {
                        border: 1px solid #ffffff;
                        width: 60px;
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
                        font-size: 30px;
                        font-weight: 400;
                        font-family: "Helvetica";
                        color: #000000;
                        margin-top: 50px;
                    }
                    .social-icons {
                        text-align: center;
                        margin-top: 5%;
                        margin-bottom: 10%;
                        margin-left: -7%;
                    }

                    .social-icons li a img {
                        width: 60px;
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
                        margin-bottom: 20%;
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
                        padding-bottom: 5%;
                        border-radius: 1rem;
                        width: 90%;
                        box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9),
                            0 6px 50px 0 rgba(0, 0, 0, 0.5);
                    }
                    .repos .card .cardTech p {
                        margin-top: 5px;
                        font-size: 16px;
                    }
                    .repos .card .cardTech ul {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-self: center;
                        margin: 5% 0%;
                    }
                    .repos .card .cardTech li {
                        font-size: 12px;
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
                    .repos .card-description {
                        background-color: #ffffff;
                        color: #000000;
                        text-align: center;
                        font: 14px bold;
                        font-family: Helvetica;
                        height: fit-content;
                    }
                    .repos p {
                        background-color: #ffffff;
                        color: #000000;
                        margin: 8% 5%;
                        text-align: left;
                        font: 16px bold;
                    }
                    .repo-link {
                        margin-top: 5%;
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
                        margin-bottom: 20%;
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
export default Projects2;
