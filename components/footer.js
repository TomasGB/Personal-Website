const Footers = () => {
    return (
        <div>
            <li>
                <a href="/projects">
                    <button type="button" className="btn">
                        Projects
                    </button>
                </a>
            </li>
            <li>
                <a href="/contact">
                    <button type="button" className="btn">
                        Contact me
                    </button>
                </a>
            </li>
            <style jsx>{`
                div {
                    margin-top: 0%;
                    margin-left: 5%;
                    text-align: center;
                }
                li {
                    list-style-type: none;
                    text-align: center;
                    display: inline-flex;
                    flex-direction: row;
                    margin: 3% 10%;
                }
                .btn {
                    background-color: #202020;
                    color: white;
                    margin-bottom: 3%;
                    border-radius: 5%;
                    width: fit-content;
                }
                .btn:hover {
                    background-color: #535353;
                }
            `}</style>
        </div>
    );
};

export default Footers;
