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
                        name="description"
                        content="Tomas Gomez Bermudez-personal website-portfolio"></meta>
                    <meta name="theme-color" content="#000000" />
                    <link rel="icon" href="foto.ico" />
                </Head>
            </Container>
            <div>
                <h1>Tomas Gomez Bermudez</h1>
                <h2>Electronic Engineering Student</h2>
                <Photo></Photo>
                <div className="introduction">
                    <p>
                        I'm Tomás, an electronic engineering student who loves
                        to learn about electronic devices, programming and it's
                        applications in automation and control systems.
                    </p>
                </div>
                <div className="tec-stack">
                    <h3>Technologies</h3>
                    <div>
                        <h4>Languages:</h4>
                        <ul>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Frontend:</h4>
                        <ul>
                            <li>React.js</li>
                            <li>React Native</li>
                            <li>Next.js</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Backend:</h4>
                        <ul>
                            <li>Flask</li>
                            <li>NodeJS</li>
                            <li>Express.js</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Version control:</h4>
                        <ul>
                            <li>Git</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Engineering:</h4>
                        <ul>
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
            </div>
            <Footers></Footers>
            <style jsx>{`
                @media (max-width: 2559px) {
                    .introduction {
                        padding: 5%;
                    }
                    h1 {
                        text-align: center;
                        margin-top: 5rem;
                        font: 60px bold;
                        font-family: Helvetica;
                    }
                    h2 {
                        text-align: center;
                        margin: 5%;
                        font: 40px bold;
                        font-family: Helvetica;
                    }
                    .introduction p {
                        color: #000000;
                        font: 40px bold;
                        font-family: Helvetica;
                        display: inline-block;
                        text-align: center;
                        width: 80%;
                        margin-left: 10%;
                        margin-right: 10%;
                        padding: 20px;
                    }
                    .tec-stack {
                        background-color: #202020;
                        color: #ffffff;
                        text-align: justify;
                        padding: 8% 5%;
                        font: 30px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack h3 {
                        color: #ffffff;
                        margin-bottom: 1%;
                        font: 45px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack h4 {
                        color: #ffffff;
                        margin: 0% 2% 5% 0%;
                        font: 40px bold;
                        font-family: Helvetica;
                        text-align: left;
                    }
                    .tec-stack div {
                        padding: 3% 0%;
                        align-items: justify;
                        display: inline-flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    .tec-stack div li {
                        list-style-type: none;
                        margin: 15% 2%;
                        font-size: 35px;
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
                        font: 45px bold;
                        font-family: Helvetica;
                        text-align: center;
                        padding: 4%;
                    }
                    .Interests li {
                        text-align: justify;
                        margin: 3%;
                        color: #000000;
                        font: 40px bold;
                        font-family: Helvetica;
                    }
                }
                @media (max-width: 1440px) {
                    .introduction {
                        padding: 5%;
                    }
                    h1 {
                        text-align: center;
                        margin-top: 5rem;
                        font: 35px bold;
                        font-family: Helvetica;
                    }
                    h2 {
                        text-align: center;
                        margin: 5%;
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
                    .tec-stack {
                        background-color: #202020;
                        color: #ffffff;
                        text-align: justify;
                        padding: 8% 5%;
                        font-family: Helvetica;
                    }
                    .tec-stack h3 {
                        color: #ffffff;
                        margin-bottom: 5%;
                        font: 24px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack h4 {
                        color: #ffffff;
                        margin: 0% 2% 5% 0%;
                        font: 18px bold;
                        font-family: Helvetica;
                        text-align: left;
                    }
                    .tec-stack div {
                        padding: 3% 0%;
                        align-items: justify;
                        display: inline-flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    .tec-stack div li {
                        list-style-type: none;
                        margin: 15% 2%;
                        font-size: 14px;
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
                        font: 22px bold;
                        font-family: Helvetica;
                        text-align: center;
                        padding: 4%;
                    }
                    .Interests li {
                        text-align: justify;
                        margin: 3%;
                        color: #000000;
                        font: 18px bold;
                        font-family: Helvetica;
                    }
                }
                @media (max-width: 768px) {
                    .introduction {
                        padding: 5%;
                    }
                    h1 {
                        text-align: center;
                        margin-top: 3rem;
                        font: 25px bold;
                        font-family: Helvetica;
                    }
                    h2 {
                        text-align: center;
                        margin: 5% 5% 8% 5%;
                        font: 16px bold;
                        font-family: Helvetica;
                    }
                    .introduction p {
                        color: #000000;
                        font: 16px bold;
                        font-family: Helvetica;
                        display: inline-block;
                        text-align: center;
                        width: 80%;
                        margin-left: 10%;
                        margin-right: 10%;
                        padding: 20px;
                    }
                    h4 {
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
                    .tec-stack div h4 {
                        margin-bottom: 3%;
                        font: 16px bold;
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
                    .tec-stack div li {
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
                        font: 24px bold;
                        font-family: Helvetica;
                    }
                    h2 {
                        text-align: center;
                        margin: 5% 5% 10% 5%;
                        font: 15px bold;
                        font-family: Helvetica;
                    }
                    .introduction p {
                        color: #000000;
                        font: 16px bold;
                        font-family: Helvetica;
                        display: inline-block;
                        text-align: center;
                        width: 85%;
                        margin-left: 10%;
                        margin-right: 10%;
                        padding: 20px;
                    }
                    h4 {
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
                    .tec-stack h3 {
                        margin-bottom: 10%;
                    }
                    .tec-stack h4 {
                        margin-bottom: 3%;
                        font: 14px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack div li {
                        padding: 5% 0%;
                        align-items: justify;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        margin: 2% 4%;
                    }
                    .tec-stack li {
                        list-style-type: none;
                        margin: 10% 2%;
                    }
                    .Interests {
                        padding: 5%;
                        margin-bottom: 10%;
                    }
                    .Interests div {
                        display: inline-flex;
                        flex-wrap: wrap;
                    }
                    .Interests p {
                        color: #000000;
                        font: 20px bold;
                        font-family: Helvetica;
                        text-align: center;
                        padding: 4%;
                        margin-bottom: 10%;
                    }
                    .Interests li {
                        text-align: justify;
                        margin: 3%;
                        color: #000000;
                        font: 18px bold;
                        font-family: Helvetica;
                    }
                }
                @media (min-width: 2560px) {
                    .introduction {
                        padding: 5%;
                    }
                    h1 {
                        text-align: center;
                        margin-top: 5rem;
                        font: 60px bold;
                        font-family: Helvetica;
                    }
                    h2 {
                        text-align: center;
                        margin: 5%;
                        font: 40px bold;
                        font-family: Helvetica;
                    }
                    .introduction p {
                        color: #000000;
                        font: 40px bold;
                        font-family: Helvetica;
                        display: inline-block;
                        text-align: center;
                        width: 80%;
                        margin-left: 10%;
                        margin-right: 10%;
                        padding: 20px;
                    }
                    .tec-stack {
                        background-color: #202020;
                        color: #ffffff;
                        text-align: justify;
                        padding: 8% 5%;
                        font: 30px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack h3 {
                        color: #ffffff;
                        margin-bottom: 1%;
                        font: 45px bold;
                        font-family: Helvetica;
                    }
                    .tec-stack h4 {
                        color: #ffffff;
                        margin: 0% 2% 5% 0%;
                        font: 40px bold;
                        font-family: Helvetica;
                        text-align: left;
                    }
                    .tec-stack div {
                        padding: 3% 0%;
                        align-items: justify;
                        display: inline-flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    .tec-stack div li {
                        list-style-type: none;
                        margin: 15% 2%;
                        font-size: 35px;
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
                        font: 45px bold;
                        font-family: Helvetica;
                        text-align: center;
                        padding: 4%;
                    }
                    .Interests li {
                        text-align: justify;
                        margin: 3%;
                        color: #000000;
                        font: 40px bold;
                        font-family: Helvetica;
                    }
                }
            `}</style>
        </div>
    );
};

export default Index;
