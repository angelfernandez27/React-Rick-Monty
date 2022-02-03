import React, { useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import imgRickMorty from "./img/rick-morty.png";

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="title">Rick and Morty</h1>
          {characters ? (
            <Characters characters={characters} setCharacters={setCharacters} />
          ) : (
            <>
              <img src={imgRickMorty} alt="RickAndMorty" className="img-home" />
              <p className="title">Characters</p>
              <button onClick={() => reqApi()} className="btn-search">
                Search<i className="fas fa-search"></i>
              </button>
            </>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
