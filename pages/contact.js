import Head from "next/head";
import Container from "../components/container";
import Socials from "../components/socials";
import ContactForm from "../components/contactForm";

const Contact = () => {
    return (
        <div>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Contact me</title>
                </Head>
                <body>
                    <div>
                        <div className="text">
                            <p>
                                Send an email and follow me on my social media.
                            </p>
                        </div>
                        <ContactForm />
                        <Socials />
                    </div>
                </body>
            </Container>
            <style jsx>{`
                @media (max-width: 2560px) {
                    .text p {
                        color: #000000;
                        text-align: center;
                        margin-top: 10%;
                        margin-left: 10%;
                        margin-bottom: 4%;
                        width: 80%;
                        font: 30px bold;
                        font-family: Helvetica;
                    }
                }
                @media (max-width: 1024px) {
                    .text p {
                        font: 25px bold;
                        font-family: Helvetica;
                    }
                }
                @media (max-width: 768px) {
                    .text p {
                        font: 25px bold;
                        font-family: Helvetica;
                        margin-bottom: 50px;
                    }
                }
            `}</style>
        </div>
    );
};
export default Contact;
