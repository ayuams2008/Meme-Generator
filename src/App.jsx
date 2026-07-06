import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Form />
    </>
  );
}

export default App;
