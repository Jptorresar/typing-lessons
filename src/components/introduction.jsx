import '../styles/introduction.css'
function Introduction(props) {
    return (
      <><div className="introduction">
            <div className='text-box'>
                <h1 className='title'>{props.img}</h1>
                <p className="text">{props.text}</p>
            </div>
        </div></>
    );
  }
  export default Introduction;
  