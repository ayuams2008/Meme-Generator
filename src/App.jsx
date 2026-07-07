import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
function App() {
  const [count, setCount] = useState(0);
  const [meme, setMeme] = useState();
  const [top, setTop] = useState("haa bhai");
  const [bot, setBot] = useState("aa gya swad");
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dat) => setMeme(dat.data.memes));
  }, []);
  let onClick = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };
  function onChange(e) {
    if (e.target.name == "top") {
      setTop(e.target.value);
    } else {
      setBot(e.target.value);
    }
  }
  return (
    <>
      <Header />
      <Form
        img={meme ? meme[count] : ""}
        handleClick={onClick}
        top={top}
        bot={bot}
        fn={onChange}
      />
    </>
  );
}

export default App;
