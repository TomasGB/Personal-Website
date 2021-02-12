import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="navbar-nav">
            <div>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
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
                    padding: 40px;
                }
                .navbar-nav div ul li a {
                    font: 25px bold;
                    font-family: Helvetica;
                    color: #ffffff;
                    text-decoration: none;
                }
                .navbar-nav div ul li:hover {
                    background-color: #535353;
                    text-decoration: none;
                }
                @media (min-width: 2560px) {
                    .navbar-nav div {
                        background-color: #202020;
                        margin-bottom: 15px;
                    }
                    .navbar-nav div ul {
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 0%;
                    }
                    .navbar-nav div ul li {
                        list-style-type: none;
                        display: inline-block;
                        padding: 50px;
                    }
                    .navbar-nav div ul li a {
                        font: 35px bold;
                        font-family: Helvetica;
                        color: #ffffff;
                        text-decoration: none;
                    }
                    .navbar-nav div ul li:hover {
                        background-color: #535353;
                        text-decoration: none;
                    }
                }
                @media (max-width: 1440px) {
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
                        font: 15px bold;
                        font-family: Helvetica;
                        color: #ffffff;
                        text-decoration: none;
                    }
                    .navbar-nav div ul li:hover {
                        background-color: #535353;
                        text-decoration: none;
                    }
                }
                @media (max-width: 768px) {
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
                        padding: 15px;
                        margin-left: 20px;
                    }
                    .navbar-nav div ul li a {
                        font: 14px bold;
                        font-family: Helvetica;
                        color: #ffffff;
                        text-decoration: none;
                    }
                    .navbar-nav div ul li:hover {
                        background-color: #535353;
                        text-decoration: none;
                    }
                }
                @media (max-width: 375px) {
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
                        padding: 15px;
                        margin-left: 10px;
                    }
                    .navbar-nav div ul li a {
                        font: 14px bold;
                        font-family: Helvetica;
                        color: #ffffff;
                        text-decoration: none;
                    }
                    .navbar-nav div ul li:hover {
                        background-color: #535353;
                        text-decoration: none;
                    }
                }
                @media (max-width: 321px) {
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
                        padding: 10px;
                    }
                    .navbar-nav div ul li a {
                        font: 14px bold;
                        font-family: Helvetica;
                        color: #ffffff;
                        text-decoration: none;
                    }
                    .navbar-nav div ul li:hover {
                        background-color: #535353;
                        text-decoration: none;
                    }
                }
                @media (max-width: 281px) {
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
                        padding: 15px 5px;
                    }
                    .navbar-nav div ul li a {
                        font: 12px bold;
                        font-family: Helvetica;
                        color: #ffffff;
                        text-decoration: none;
                    }
                    .navbar-nav div ul li:hover {
                        background-color: #535353;
                        text-decoration: none;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navigation;
