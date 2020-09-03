import Head from 'next/head'
import Container from '../components/container'
import Footers from '../components/footer'
import Link from 'next/link'

const Contact = () =>{
    return (
        <div>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Contact me</title>
                </Head>
                    <h1>Contact</h1>
                    <body>
                        <div>
                            <p>You can contact me on any of the following social networks.</p>
                        </div>
                           
                    </body>
            </Container>
        </div>
    )
}
export default Contact