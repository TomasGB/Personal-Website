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
                    text-align:justify-left;
                    width: 80%;
                    margin-left:10%;
                    margin-right:10%;
                    padding: 20px;
                }
                .tec-stack{
                    background-color: #202020;
                    color: #FFFFFF;
                    text-align: center;
                    padding: 10%;
                    font: 18px bold;
                    font-family:Helvetica;
                }
                .tec-stack div{
                    text-align:justify;
                    display: inline-flex;
                    flex-wrap:wrap;
                    margin:5%;
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
                    <p>Hi I'm Tomás, a second year computer engineering student 
                    who loves to learn about electronic devices, programming
                    and  it's applications related to music, as I love to
                    make it in my free time.
                    </p>
            </div>
            <div className="tec-stack">
                <div>
                    <ul>
                    Languages:
                        <li>Python</li>
                        <li>Matlab</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Node js</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    Web Frameworks:
                        <li>Flask</li>
                        <li>Next js</li>
                        <li>Express js</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    Version Control:
                        <li>Git</li>
                        <li>Github</li>
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
                    <li>IoT</li>
                </ul>
            </div>
            </body>
            <Footers></Footers>
        </div>
    )
}

export default Index

//npm run dev