import "./App.css";
import Navbar from "./components/Navbar";

import {todos} from "./data.json";


console.log(todos);
function App() {

  return (
    <>
      <Navbar />
      <h1 class="text-3xl	">Home</h1>
    </>
  )
}

export default App
