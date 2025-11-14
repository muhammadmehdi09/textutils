import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [myClass, setMyClass] = useState("App h-[100vh]")
  const [myColor, setMyColor] = useState({
    color1: "green",
    color2: "blue",
    color3: "#e5e7eb"
  })

  const toggleMode = () => {
    if (myClass === "App h-[100vh]") {
      setMyClass("App bg-gray-900 text-white h-[100vh]")
      setMyColor({
        color1: "blue",
        color2: "green",
        color3: "#3d3f45"
      })
    }

    else {
      setMyClass("App h-[100vh]")
      setMyColor({
        color1: "green",
        color2: "blue",
        color3: "#e5e7eb"
      })
    }
  }

  return (
    <div className={myClass} id="white">
      <Navbar title="TextUtils" color={myColor} />
      <TextForm heading="Enter Text below" color={myColor.color2} />
      <button onClick={toggleMode} className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">Enable Dark Mode</button>
    </div>
  );
}

export default App;
