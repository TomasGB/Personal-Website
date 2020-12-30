import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => {
    return (
        <div>
            <Head>
                <title>Tomas Gomez Bermudez</title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css"
                />
            </Head>
            <Navigation />
            <div>{props.children}</div>
        </div>
    );
};

export default Container;
