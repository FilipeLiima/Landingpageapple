import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Mainsection from "./components/Mainsection";
function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
        <hr />
      </header>
      <main>
        <Mainsection />
      </main>
    </div>
  );
}

export default App;
