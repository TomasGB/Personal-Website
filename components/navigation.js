const Navigation = () => {
    return (
        <nav className="navbar-nav">
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <style jsx global>{`
                .navbar-nav div {
                    background-color: #202020;
                }
                .navbar-nav div ul {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 0%;
                }
                .navbar-nav div ul li {
                    list-style-type: none;
                    display: inline-block;
                    padding: 20px;
                }
                .navbar-nav div ul li a {
                    font: Helvetica 18px bold;
                    color: #ffffff;
                    text-decoration: none;
                }
                .navbar-nav div ul li:hover {
                    background-color: #535353;
                    text-decoration: none;
                }
            `}</style>
        </nav>
    );
};

export default Navigation;
