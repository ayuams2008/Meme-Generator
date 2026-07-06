import meme from "../assets/meme.png"



export default  function Header(){

    return(
        <header>
            <img src={meme} className="headimg" /> 
            <div className="head">Meme Generator</div>
        </header>
    )
}