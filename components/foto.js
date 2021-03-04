function Photo() {
    return (
        <div>
            <img src="./foto.jpg" alt="photo" className="pic" />
            <style jsx>
                {`
                    .pic {
                        display: flex;
                        margin: auto;
                        width: 225px;
                        height: 225px;
                        border-radius: 50%;
                        margin-top: 5%;
                        margin-bottom: -2%;
                        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.8),
                            0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }
                    @media (min-width: 1441px) {
                        .pic {
                            display: flex;
                            margin: auto;
                            width: 425px;
                            height: 425px;
                            border-radius: 50%;
                            margin-top: 5%;
                            box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.8),
                                0 6px 20px 0 rgba(0, 0, 0, 0.19);
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default Photo;
