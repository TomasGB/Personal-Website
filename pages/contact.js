import Head from 'next/head'
import Container from '../components/container'
import Socials from '../components/socials'

const Contact = () =>{
    return (
        <div>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Contact me</title>
                </Head>
                    <body>
                        <div>
                        <div className="text">
                            <p>You can find me in any of the following social networks, feel free to send a message.</p>
                        </div>
                            <Socials></Socials>
                        </div>
                    </body>
            </Container>
            <style jsx>{`
                .text p{
                    color: #000000;
                    text-align:center;
                    margin-top: 15%;
                    margin-left:10%;
                    margin-bottom: 7%;
                    width:80%;
                    font: 20px bold;
                    font-family:Helvetica;
                }
            `}</style>
        </div>
    )
}
export default Contact