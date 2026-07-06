export default function () {
  return (
    <form className="memeform">
      <label htmlFor="toptext">
        Top Text
        <input type="text" placeholder="Stayed Home" className="toptext" />
      </label>
      <label htmlFor="bottext">
        Bottom Text
        <input type="text" placeholder="Saved Lives" className="bottext" />
      </label>
      <button type="submit" className="generate">
        Generate Meme
      </button>
    </form>
  );
}
