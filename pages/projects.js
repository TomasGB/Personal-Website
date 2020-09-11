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
                            <p>The goal of this project was to automate the process of making a timelapse, that includes taking the pictures, apply color correction when needed, histogram equalization and finally export an mp4 file with the timelapse with and without processing to compare the results. To make this project I used OpenCV and Pillow.</p>
                        </div>
                        <div className="repo-link">
                            <a href="https://github.com/TomasGB/Automatic-Timelapse-Processing-App">
                                <img src="icons/github.png"></img>
                            </a>
                        </div>
                        <div>
                            <div>Next js + Express js Website</div>
                            <p>Website built using Next js and styled with jsx for the front-end and Node js with Express for the backend.</p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Website-Next.js">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>Flask Website</div>
                            <p>Website built using HTML5 and 
                            CSS3 for the front-end and for the backend I used the Python framework Flask.</p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Flask-Webapp">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>Polygon Surface Calculator</div>
                            <p>This was a class project, the goal was to develop a script able to calculate the area of any 2-D polygon with three diferent methods on MATLAB. </p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Polygon-surface-calculator">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                    </div>
            </Container>
            <h3>Stay connected</h3>
            <div className="social-icons">
                <ul>
                    <li><a href="https://twitter.com/TomasGB_98">
                            <img src="icons/twitter.png"></img>
                        </a>
                    </li>
                    <li><a href="https://www.instagram.com/gmz.tomas">
                            <img src="icons/instagram.png"></img>
                        </a>
                    </li>
                    <li><a href="https://github.com/TomasGB">
                            <img src="icons/github.png"></img>
                        </a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/tomasgomezbermudez/">
                            <img src="icons/linkedIn.png"></img>
                        </a>
                    </li>
                </ul>
            </div>
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
            margin:5% 0% 0% 0% ;
            padding: 10% 8% 0% 8%;
        }
        .repos div div{
            color:#000000;
            font: 30px bold;
            font-family:Helvetica;
        }
        .repos p{
            color:#FFFFFF;
            margin:8% 10%;
            text-align:justify;
        }
        .repo-link a img{
            width:50px;
            margin-top:2%;
            margin-bottom:10%;
        }
        .repo-link a img:hover{
            border-radius:50%;
            border: 5px solid #000000;
        }
        h3{
            margin:5% 0% 0% 0%;
            text-align:center;
        }
        .social-icons{
            text-align:center;
            margin:5%;
        }
        .social-icons li a img{
            width: 49px;
        }
        .social-icons li{
            display:inline-flex;
            list-style-type: none;
            margin: 0% 2%;
        }
        .social-icons a img:hover{
            border-radius:50%;
            border: 3px solid #000000;
        }
    `}</style>
    </div>
    )
}
export default Projects