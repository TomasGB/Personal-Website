function Photo() {
    return <div>
        <img src="./foto.jpg" alt="photo" className="pic" />
        <style jsx>{`
            .pic{
                display:flex;
                margin:auto;
                width: 225px;
                height: 225px;
                border-radius: 50%;
                margin-top: 3%;
            }
        `}
        </style>
    </div>
  }
  
  export default Photo