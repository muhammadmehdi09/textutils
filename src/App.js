import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [myTheme, setMyTheme] = useState({
    class: "App min-h-screen",
    color1: "blue",
    color2: "#e5e7eb",
    toggleText: "Enable"
  })

  const toggleMode = () => {
    if (myTheme.toggleText === "Enable") {
      setMyTheme({
        class: "App bg-gray-900 text-white min-h-screen",
        color1: "green",
        color2: "#3d3f45",
        toggleText: "Disable"
      })
    }

    else {
      setMyTheme({
        class: "App min-h-screen",
        color1: "blue",
        color2: "#e5e7eb",
        toggleText: "Enable"
      })
    }
  }

  return (
    <div className={myTheme.class} id="white">
      <Navbar title="TextUtils" color={myTheme.color2} toggleMode={toggleMode} toggleText={myTheme.toggleText} />
      <TextForm heading="Enter Text below" color={myTheme.color1} color2={myTheme.color2} />
    </div>
  );
}

export default App;
