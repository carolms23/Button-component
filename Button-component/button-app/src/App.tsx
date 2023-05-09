import { useState } from "react";
import "./App.css";
import Button from "./components/Button/button";
import MenuList from "./components/Menu/menu";

function App() {
  const [count, setCount] = useState(0);
  const labelList = ["Default", "Disabled", "Secondary", "Danger"];

  return (
    <div className="main_container">
      <MenuList
        items={["Colors", "Typography", "Spaces", "Buttons", "Inputs", "Grid"]}
      />
      <h1>Buttons</h1>
      <div>
        {labelList.map((label) => (
          <Button label={label} />
        ))}
      </div>
    </div>
  );
}

export default App;
