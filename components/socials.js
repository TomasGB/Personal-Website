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
            `}</style>
        </>
    );
};
export default Socials;
