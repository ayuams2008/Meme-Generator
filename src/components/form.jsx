import meme from "../assets/meme.png";

export default function (props) {
  return (
    <>
      <form className="memeform">
        <label htmlFor="toptext">
          Top Text
          <input type="text" placeholder="Stayed Home" className="toptext" />
        </label>
        <label htmlFor="bottext">
          Bottom Text
          <input type="text" placeholder="Saved Lives" className="bottext" />
        </label>
        <button type="submit" className="generate" onClick={props.handleClick}>
          Generate Meme
        </button>
      </form>
      <img src={props.img.url} alt="memeimage" className="memeimage" />
    </>
  );
}
