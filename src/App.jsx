import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
function App() {
  const [count, setCount] = useState(0);
  const [meme, setMeme] = useState();
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dat) => setMeme(dat.data.memes));
  }, []);
  let onClick = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Header />
      <Form img={meme ? meme[count] : ""} handleClick={onClick} />
    </>
  );
}

export default App;
