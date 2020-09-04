import Link from 'next/link'

const Socials = () =>{
    return(
        <>
            <div className="text">
                <p>You can find me in any of the following social networks, feel free to send a DM.</p>
            </div>
            <div className="icons">
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
                            <img src="icons/linkedin.png"></img>
                        </a>
                    </li>
                    <li><a href="https://www.youtube.com/channel/UC64xKrk8Xgxp46qePo__GPA?view_as=subscriber">
                            <img src="icons/youtube.png"></img>
                        </a>
                    </li>
                </ul>
            </div>
    <style jsx>{`
        .text p{
            color: #000000;
            text-align:center;
            margin-top: 10%;
            margin-left:10%;
            width:80%;
            font: 20px bold;
            font-family:Helvetica;
        }
        .icons li a img{
            width: 100px;
        }
        .icons li{
            padding-top:3%;
            display:inline-flex;
            margin: 5%;
            list-style-type: none;
        }
    `}</style>
        </>
    );
}
export default Socials