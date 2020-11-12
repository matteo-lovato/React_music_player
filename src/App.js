import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./data";

function App() {
  // state
  const [songs, setSongs] = useState(data());
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
