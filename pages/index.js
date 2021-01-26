import Head from "next/head";
import Container from "../components/container";
import Footers from "../components/footer";
import Photo from "../components/foto";

const Index = () => {
    return (
        <div>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Home</title>
                    <meta
                        name="Tomas Gomez Bermudez"
                        content="Personal website-portfolio"></meta>
                    <link rel="icon" href="foto.ico" />
                </Head>
            </Container>
            <body>
                <h1>Tomas Gomez Bermudez</h1>
                <h4>Electronic Engineering Student</h4>
                <Photo></Photo>
                <div className="introduction">
                    <p>
                        I'm Tomás, an electronic engineering student who loves
                        to learn about electronic devices, programming and it's
                        applications in automation and control systems.
                    </p>
                </div>
                <div className="tec-stack">
                    <h2>Technologies</h2>
                    <div>
                        <ul>
                            <h5>Languages:</h5>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h5>Frontend:</h5>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Next.js</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h5>Backend:</h5>
                            <li>Flask</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h5>Version control:</h5>
                            <li>Git</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h5>Engineering:</h5>
                            <li>MATLAB</li>
                            <li>Simulink</li>
                        </ul>
                    </div>
                </div>
                <div className="Interests">
                    <p>
                        Some of the topics that I would like to learn in the
                        future are:
                    </p>
                    <ul>
                        <li>Image Processing</li>
                        <li>Machine Learning</li>
                        <li>Embedded Systems</li>
                        <li>Process automation</li>
                        <li>IoT</li>
                    </ul>
                </div>
            </body>
            <Footers></Footers>
            <style jsx>{`
                .introduction {
                    padding: 5%;
                }
                h1 {
                    text-align: center;
                    margin-top: 5rem;
                    font: 40px bold;
                    font-family: Helvetica;
                }
                h4 {
                    text-align: center;
                    margin: 5% 5% 10% 5%;
                    font: 35px bold;
                    font-family: Helvetica;
                }
                .introduction p {
                    color: #000000;
                    font: 30px bold;
                    font-family: Helvetica;
                    display: inline-block;
                    text-align: center;
                    width: 80%;
                    margin-left: 10%;
                    margin-right: 10%;
                    padding: 20px;
                }
                h2,
                h5 {
                    color: #ffffff;
                }
                .tec-stack {
                    background-color: #202020;
                    color: #ffffff;
                    text-align: justify;
                    padding: 8% 5%;
                    font: 25px bold;
                    font-family: Helvetica;
                }
                .tec-stack h2,
                h5 {
                    margin-bottom: 3%;
                    font: 30px bold;
                    font-family: Helvetica;
                }
                .tec-stack div {
                    padding: 3% 0%;
                    align-items: justify;
                    display: inline-flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin: 0% 4%;
                }
                .tec-stack li {
                    list-style-type: none;
                    margin: 10% 2%;
                }
                .Interests {
                    padding: 5%;
                }
                .Interests div {
                    display: inline-flex;
                    flex-wrap: wrap;
                }
                .Interests p {
                    color: #000000;
                    font: 35px bold;
                    font-family: Helvetica;
                    text-align: center;
                    padding: 4%;
                }
                .Interests li {
                    text-align: justify;
                    margin: 3%;
                    color: #000000;
                    font: 30px bold;
                    font-family: Helvetica;
                }
                @media (max-width: 1440px) {
                    .introduction {
                        padding: 5%;
                    }
                    h1 {
                        text-align: center;
                        margin-top: 3rem;
                        font: 30px bold;
                        font-family: Helvetica;
                    }
                    h4 {
                        text-align: center;
                        margin: 5% 5% 10% 5%;
                        font: 25px bold;
                        font-family: Helvetica;
                    }
                    .introduction p {
                        color: #000000;
                        font: 20px bold;
                        font-family: Helvetica;
                        display: inline-block;
                        text-align: center;
                        width: 80%;
                        margin-left: 10%;
                        margin-right: 10%;
                        padding: 20px;
                    }
                    h2,
                    h5 {
                        color: #ffffff;
                    }
                    .tec-stack {
                        background-color: #202020;
                        color: #ffffff;
                        text-align: justify;
                        padding: 8% 5%;
                        font: 14px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack h2,
                    h5 {
                        margin-bottom: 3%;
                        font: 14px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack div {
                        padding: 3% 0%;
                        align-items: justify;
                        display: inline-flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        margin: 0% 4%;
                    }
                    .tec-stack li {
                        list-style-type: none;
                        margin: 10% 2%;
                    }
                    .Interests {
                        padding: 5%;
                    }
                    .Interests div {
                        display: inline-flex;
                        flex-wrap: wrap;
                    }
                    .Interests p {
                        color: #000000;
                        font: 25px bold;
                        font-family: Helvetica;
                        text-align: center;
                        padding: 4%;
                    }
                    .Interests li {
                        text-align: justify;
                        margin: 3%;
                        color: #000000;
                        font: 20px bold;
                        font-family: Helvetica;
                    }
                }
                @media (max-width: 425px) {
                    .introduction {
                        padding: 5%;
                    }
                    h1 {
                        text-align: center;
                        margin-top: 3rem;
                        font: 30px bold;
                        font-family: Helvetica;
                    }
                    h4 {
                        text-align: center;
                        margin: 5% 5% 10% 5%;
                        font: 15px bold;
                        font-family: Helvetica;
                    }
                    .introduction p {
                        color: #000000;
                        font: 20px bold;
                        font-family: Helvetica;
                        display: inline-block;
                        text-align: center;
                        width: 80%;
                        margin-left: 10%;
                        margin-right: 10%;
                        padding: 20px;
                    }
                    h2,
                    h5 {
                        color: #ffffff;
                    }
                    .tec-stack {
                        background-color: #202020;
                        color: #ffffff;
                        text-align: justify;
                        padding: 8% 5%;
                        font: 14px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack h2,
                    h5 {
                        margin-bottom: 3%;
                        font: 14px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack div {
                        padding: 3% 0%;
                        align-items: justify;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        margin: 0% 4%;
                    }
                    .tec-stack li {
                        list-style-type: none;
                        margin: 10% 2%;
                    }
                    .Interests {
                        padding: 5%;
                    }
                    .Interests div {
                        display: inline-flex;
                        flex-wrap: wrap;
                    }
                    .Interests p {
                        color: #000000;
                        font: 25px bold;
                        font-family: Helvetica;
                        text-align: center;
                        padding: 4%;
                    }
                    .Interests li {
                        text-align: justify;
                        margin: 3%;
                        color: #000000;
                        font: 20px bold;
                        font-family: Helvetica;
                    }
                }
            `}</style>
        </div>
    );
};

export default Index;
