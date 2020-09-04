import Head from 'next/head'
import Container from '../components/container'
import Footers from '../components/footer'
import Link from 'next/link'
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
                            <Socials></Socials>
                        </div>
                    </body>
            </Container>
        </div>
    )
}
export default Contact