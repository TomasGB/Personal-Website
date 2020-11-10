import Head from 'next/head'
import Container from '../components/container'
import Footers from '../components/footer'
import Photo from '../components/foto'


const Index = () =>{
    return (
        <div>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Home</title>
                </Head>
            </Container>
            <style jsx>{`
                .introduction{
                    padding: 5%;
                    }
                h1{
                    text-align:center;
                    margin-top: 6%;
                    }
                h4{
                    text-align:center;
                    margin: 5%;
                    }
                .introduction p {
                    color: #000000;
                    font: 20px bold;
                    font-family:Helvetica;
                    display: inline-block;
                    text-align:center;
                    width: 80%;
                    margin-left:10%;
                    margin-right:10%;
                    padding: 20px;
                }
                h2{
                    color:#FFFFFF
                }
                .tec-stack{
                    background-color: #202020;
                    color: #FFFFFF;
                    text-align: justify;
                    padding: 8% 5%;
                    font: 18px bold;
                    font-family:Helvetica;
                }
                .tec-stack div{
                    padding: 5% 0%;
                    align-items:justify;
                    display:inline-flex;
                    flex-direction: row;
                    flex-wrap:wrap;
                    margin:3%;
                }
                .tec-stack li{
                    list-style-type: none;
                    margin: 10%;
                }
                .Interests{
                    padding:5%;
                    font-family:Helvetica;
                }
                .Interests div{
                    display: inline-flex;
                    flex-wrap:wrap;
                }
                .Interests p{
                    color: #000000;
                    font: 24px bold;
                    font-family:Helvetica;
                    text-align: center;
                    padding: 4%;
                }
                .Interests li{
                    text-align:justify;
                    margin: 3%;
                    color: #000000;
                    font: 20px bold;
                    font-family:Helvetica;
                }
                
            `}</style>
            <body>
            <h1>Tomas Gomez Bermudez</h1>
            <h4>Electronic Engineering Student</h4>
            <Photo></Photo>
            <div className="introduction">
                    <p>I'm Tomás, a second year electronic engineering student 
                    who loves to learn about electronic devices, programming
                    and  it's applications in automation and control systems.
                    </p>
            </div>
            <div className="tec-stack">
                <h2>Technologies</h2>
                <div>
                    <ul>
                    Languages:
                        <li>Python</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>Javascript</li>
                        <li>Node js</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    Frameworks:
                        <li>Flask</li>
                        <li>Selenium</li>
                        <li>Next.js</li>
                        <li>Express</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    Version Control:
                        <li>Git</li>
                        <li>Github</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    Electronic Engineering:
                        <li>Matlab</li>
                        <li>Simulink</li>
                    </ul>
                </div>
            </div>
            <div className="Interests">
                <p>
                    Some of the topics that I would like to learn in the future are:
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
        </div>
    )
}

export default Index
