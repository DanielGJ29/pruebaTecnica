import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [fact, setfact] = useState();
  useEffect(() => {
    try {
      const handleFetch = async () => {
        const request = await fetch("https://catfact.ninja/fact");
        const result = await request.json();
        const word = result.fact.split(" ");
        const words = word[0] + " " + word[1] + " " + word[2];
        //console.log(words);
        setfact(words);
      };
      handleFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Funtions
  const handleChange = () => {
    const handleFetch = async () => {
      const request = await fetch("https://catfact.ninja/fact");
      const result = await request.json();
      const word = result.fact.split(" ");
      const words = word[0] + " " + word[1] + " " + word[2];
      setfact(words);
    };
    handleFetch();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="card">
        <img
          src={`https://cataas.com/cat/says/${fact}`}
          className="card-img-top "
          alt="..."
        />
        <div className="card-body">
          <button className="btn btn-primary" onClick={handleChange}>
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
}
