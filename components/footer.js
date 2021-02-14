import Link from "next/link";
const Footers = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/projects">
                        <a className="btn">Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className="btn">Contact</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                @media (min-width: 2560px) {
                    div {
                        margin-top: 0%;
                        margin-left: 5%;
                        text-align: center;
                    }
                    ul li {
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
                        font: 35px bold;
                        font-family: Helvetica;
                    }
                    .btn:hover {
                        background-color: #535353;
                    }
                }
                @media (max-width: 2559px) {
                    div {
                        margin-top: 0%;
                        margin-left: 5%;
                        text-align: center;
                    }
                    ul li {
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
                        font: 35px bold;
                        font-family: Helvetica;
                    }
                    .btn:hover {
                        background-color: #535353;
                    }
                }
                @media (max-width: 1440px) {
                    div {
                        margin-top: 0%;
                        margin-left: -5%;
                        text-align: center;
                    }
                    ul li {
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
                        font: 15px bold;
                        font-family: Helvetica;
                    }
                    .btn:hover {
                        background-color: #535353;
                    }
                }
                @media (max-width: 425px) {
                    div {
                        margin-top: 0%;
                        margin-left: -10%;
                        text-align: center;
                        padding-bottom: 50px;
                    }
                    ul li {
                        list-style-type: none;
                        text-align: center;
                        display: inline-flex;
                        flex-direction: row;
                        margin: 3% 6%;
                    }
                    .btn {
                        background-color: #202020;
                        color: white;
                        margin-bottom: 3%;
                        border-radius: 5%;
                        width: fit-content;
                        font: 15px bold;
                        font-family: Helvetica;
                    }
                    .btn:hover {
                        background-color: #535353;
                    }
                }
            `}</style>
        </div>
    );
};

export default Footers;
