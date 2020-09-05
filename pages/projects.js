import Head from 'next/head'
import Container from '../components/container'
import Footers from '../components/footer'
import Socials from '../components/socials'


const Projects = () =>{
    return (
        <div>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Projects</title>
                </Head>
                    <div className="text">
                        <p>Here is a list of some of the projects I've made
                        throught the years, some of them were class projects
                        and others I made them on my spare time.
                        All projects can be found on my Github profile.</p>
                    </div>
                    <div className="repos">
                        <div>
                            <div>Automatic Timelapse Processor</div>
                            <p>The goal of this project was to automate the process of making a timelapse, that includes taking the pictures, apply color correction when needed, histogram equalization and finally export an mp4 file with the timelapse with and without processing.</p>
                        </div>
                        <div>
                            <div>Next js Website</div>
                            <p>Website built Next js for the front-end and Node js with Express for the backend.</p>
                        </div>
                        <div>
                            <div>Flask Website</div>
                            <p>Website built using HTML5 and 
                            CSS3 for the front-end and for the backend I used Python with the framework Flask.</p>
                        </div>
                        <div>
                            <div>Polygon Surface Calculator</div>
                            <p>This was a class project, the goal was to develop a script able to calculate the area of any 2-D polygon with three diferent methods on MATLAB. </p>
                        </div>
                    </div>
            </Container>
            <Socials></Socials>
    <style jsx>{`
        .text {
            text-align:center;
            margin-top:8%;
            margin-bottom:8%;
            margin-left:10%;
            width:80%
        }
        .text p{
            color: #000000;
            font: 20px bold;
            font-family:Helvetica;
        }
        .repos{
            background-color:#404040;
            text-align:center;
            margin:3% 0% 0% 0% ;
            padding: 3%;
        }
        .repos div div{
            color:#000000;
            font: 30px bold;
            font-family:Helvetica;
        }
        .repos p{
            color:#FFFFFF;
            margin:5% 10%;
        }
    `}</style>
        </div>
    )
}
export default Projects