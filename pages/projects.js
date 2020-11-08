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
                        <h2>Projects</h2>
                        <p>Here is a list of some of the projects I've made
                        throught the years, some of them were class projects
                        and others I made them on my spare time.
                        All projects can be found on my Github profile.</p>
                    </div>
                    <div className="repos">
                        <div className="card">
                            <div className="card-title">Automatic Timelapse Processor</div>
                            <p>The goal of this project was to automate the process of making a timelapse, that includes taking the pictures, apply color correction when needed, histogram equalization and finally export an mp4 file with the timelapse with and without processing to compare the results. <br></br>
                            <br></br>
                            Technologies used: Python - OpenCV - Pillow.</p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Automatic-Timelapse-Processing-App">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Voice Assistant - Hanna</div>
                            <p>Python Assistant capable of take voice commands and interact with different third party API's (Google calendar, Twitch, OpenWeather). The goal it's to automate daily tasks such as: ask for the time, open websites, events on google calendar, check what streamers are currently live, etc.<br></br>
                            <br></br>
                            Technologies used: Python - Selenium - PyAudio - Pyttsx3 - API's
                            </p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Voice-Assistant">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Next js + Express js Website</div>
                            <p>Website built using Next js and styled with jsx for the frontend and Node js with Express for the backend.</p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Website-Next.js">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Polygon Surface Calculator</div>
                            <p>This was a class project, the goal was to develop a script able to calculate the area of any 2-D polygon with three diferent methods on MATLAB. </p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Polygon-surface-calculator">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                    </div>
            </Container>
            <div className= "footer">
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
            </div>
    <style jsx>{`
        .text {
            text-align:center;
            margin-top:8%;
            margin-bottom:8%;
            margin-left:10%;
            width:80%
        }
        .text h2{
            margin-bottom:5%;
        }
        .text p{
            color: #000000;
            font: 20px bold;
            font-family:Helvetica;
        }
        .repos{
            background-color:#454545;
            text-align:center;
            margin:5% 0% 0% 0% ;
            padding: 10% 8% 5% 8%;
            
        }
        .repos .card{
            margin-bottom:5%;
            margin-left:5%;
            width:90%;
            box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.9), 0 6px 50px 0 rgba(0, 0, 0, 0.5);
        }
        .repos .card .card-title{
            padding: 3%;
            background-color:#202020;
            color:white;
            font: 30px bold;
            font-family:Helvetica;
        }
        .repos p{
            background-color:#FFFFFF;
            color:#000000;
            margin:8% 5%;
            text-align:left;
            font: 18px bold
        }
        .repo-link a img{
            border: 1px solid #FFFFFF;
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