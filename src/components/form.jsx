import meme from "../assets/meme.png";

export default function (props) {
  return (
    <>
      <form className="memeform">
        <label htmlFor="toptext">
          Top Text
          <input type="text" placeholder="Stayed Home" name="top" className="toptext" value={props.top} onChange={props.fn} />
        </label>
        <label htmlFor="bottext">
          Bottom Text
          <input type="text" placeholder="Saved Lives" name="bot" className="bottext" value={props.bot} onChange={props.fn} />
        </label>
        <button type="submit" className="generate" onClick={props.handleClick}>
          Generate Meme
        </button>
      </form>
      <div className="txt">
        <div className="bot">{props.bot}</div>
        <div className="top">{props.top}</div>
      </div>
      <img src={props.img.url} alt="memeimage" className="memeimage" />
    </>
  );
}
