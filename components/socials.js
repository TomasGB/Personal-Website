const Socials = () => {
    return (
        <>
            <div className="icons">
                <ul>
                    <li>
                        <a href="https://twitter.com/TomasGB_98">
                            <img src="icons/twitter.png"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gmz.tomas">
                            <img src="icons/instagram.png"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/TomasGB">
                            <img src="icons/github.png"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tomasgomezbermudez/">
                            <img src="icons/linkedIn.png"></img>
                        </a>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                .icons {
                    margin-left: 10%;
                }
                .icons li a img {
                    width: 90px;
                }
                .icons li {
                    display: inline-flex;
                    margin: 8%;
                    list-style-type: none;
                }
                .icons li:hover {
                    transform: translateY(-10px);
                }
                @media (max-width: 1024px) {
                    .icons {
                        margin-left: 8%;
                    }
                    .icons li a img {
                        width: 90px;
                    }
                    .icons li {
                        display: inline-flex;
                        margin: 5%;
                        list-style-type: none;
                    }
                    .icons li:hover {
                        transform: translateY(-10px);
                    }
                }
                @media (max-width: 768px) {
                    .icons {
                        margin-left: 7%;
                        margin-top: 5%;
                    }
                    .icons li a img {
                        width: 90px;
                    }
                    .icons li {
                        display: inline-flex;
                        margin: 5%;
                        list-style-type: none;
                    }
                    .icons li:hover {
                        transform: translateY(-10px);
                    }
                }
                @media (max-width: 425px) {
                    .icons {
                        margin-left: 8%;
                        margin-top: 5%;
                    }
                    .icons li a img {
                        width: 90px;
                    }
                    .icons li {
                        display: inline-flex;
                        margin: 5%;
                        list-style-type: none;
                    }
                    .icons li:hover {
                        transform: translateY(-10px);
                    }
                }
                @media (max-width: 320px) {
                    .icons {
                        margin-left: 3%;
                        margin-top: 15%;
                    }
                    .icons li a img {
                        width: 90px;
                    }
                    .icons li {
                        display: inline-flex;
                        margin: 5%;
                        list-style-type: none;
                    }
                    .icons li:hover {
                        transform: translateY(-10px);
                    }
                }
                @media (max-width: 280px) {
                    ..icons {
                        margin-left: 3%;
                        margin-top: 15%;
                    }
                    .icons li a img {
                        width: 90px;
                    }
                    .icons li {
                        display: inline-flex;
                        margin: 10px 3px;
                        list-style-type: none;
                    }
                    .icons li:hover {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </>
    );
};
export default Socials;
