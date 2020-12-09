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
                            <h4>Technologies used:</h4>
                             <ul>
                                 <li>Python</li>
                                <li>OpenCV</li>
                                <li>Pillow</li>
                                <li>Tkinter</li>
                             </ul>
                             
                            </p>
                            <div className='captures'>
                                <div className="captures-desktop">
                                    <img src="projects captures/timelapse-processor.png"
                                            alt="timelapse-processor-view"/>
                                </div>
                            </div>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Automatic-Timelapse-Processing-App">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Voice Assistant</div>
                            <p>Python Assistant capable of taking voice commands and interact with different third party APIs (Google calendar, Twitch, Twitter).
                                 The goal it's to automate daily tasks such as: ask for the time, open websites, events on google calendar, check what streamers are currently live, etc.<br></br>
                            <br></br>
                            <h4>Technologies used:</h4>
                             <ul>
                                <li>Python</li>
                                <li>Selenium</li>
                                <li>PyAudio</li>
                                <li>Pyttsx3</li>
                                <li>APIs</li>
                             </ul>
                            </p>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Voice-Assistant">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Next.js + Express.js  Website</div>
                            <p>This website is built using the Next.js framework and styled with jsx for the frontend and the backend runs a Node JS server throught Express.js .<br></br>
                            <br></br>
                            <h4>Technologies used:</h4>
                            <ul>
                                <li>Javascript</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>Next.js</li>
                             </ul>
                            </p>
                            <div className='captures'>
                                <div className="captures-web">
                                    <img src="projects captures/portfolio-webview.png"
                                            alt="portfolio-webview"/>
                                </div>
                                <div className="captures-mobile">
                                    <img src="projects captures/portfolio-mobileview.png"
                                            alt="portfolio-mobileview"/>
                                </div>
                            </div>
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/Website-Next.js">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Track my money App</div>
                            <p>Budget App made with JavaScript and React to keep track of all incomes and expenses and calculate the final balance.<br></br>
                            <br></br>
                            <h4>Technologies used:</h4>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                             </ul>
                            </p>
                            <div className='captures'>
                                <div className="captures-web">
                                    <img src="projects captures/trackmymoney-webview.png"
                                            alt="trackmymoney-webview"/>
                                </div>
                                <div className="captures-mobile">
                                    <img src="projects captures/trackmymoney-mobileview.png"
                                            alt="trackmymoney-mobileview"/>
                                </div>
                            </div>
                            
                            <div className="repo-link">
                                <a href="https://github.com/TomasGB/React-Budget-App">
                                    <img src="icons/github.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Polygon Surface Calculator</div>
                            <p>This was a class project, the goal was to develop a script able to calculate the area of any 2-D polygon with three diferent methods on MATLAB.<br></br>
                            <br></br>
                            <h4>Technologies used:</h4>
                            <ul>
                                <li>MATLAB</li>
                             </ul>
                                 </p>
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
            border-radius:50%;
        }
        .repo-link a img:hover{
            border: 5px solid #000000;
        }
        h3{
            margin:5% 0% 0% 0%;
            text-align:center;
        }
        .footer{
            justify-content:center;
        }
        .social-icons{
            text-align:center;
            margin-top:4%;
            margin-left:-7%;
        }

        .social-icons li a img{
            width: 49px;
        }
        .social-icons li{
            display:inline-flex;
            list-style-type: none;
            margin: 0% 2.5%;
        }
        .social-icons a img:hover{
            border-radius:50%;
            border: 3px solid #000000;
        }
        .card p{
            font-family:Helvetica,Arial;
        }
        .card h4{
            margin:1% 0%;
            
        }
        .card ul{
            padding:1%;
        }
        .card ul li{
            font-size:80%;
            margin-top:2%;
            margin-right:2%;
            padding:5px;
            font-family: Consolas;
            background-color: rgba(178, 177, 177, 0.5);
            width:fit-content;
            border-radius:0.5rem;
            display:inline-flex;
            justify-content:left;
        }
        .captures{
            width:95%;
            display:inline-block;
            justify-content:center;
        }
        .captures-web img{
            box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1), 0 6px 50px 0 rgba(0, 0, 0, 0.4);
            border-radius:0.5rem;
            width:90%;
            height:70%;
            margin-bottom:2%;
            margin-left:5%
        }
        .captures-mobile img{
            width:25%;
            height:35%;
            margin-top:3%;
            margin-left:5%
        }
        .captures-desktop img{
            box-shadow: 0 6px 50px 0 rgba(0, 0, 0, 0.1), 0 6px 40px 0 rgba(0, 0, 0, 0.4);
            border-radius:0.5rem;
            width:50%;
            height:25%;
            margin-bottom:6%;
            margin-left:5%
        }
    `}</style>
    </div>
    )
}
export default Projects