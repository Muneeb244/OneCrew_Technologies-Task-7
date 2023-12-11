import { useEffect } from "react";
import "./App.css";
import GreetingCard from "./components/GreetingCard ";

function App() {
  

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <GreetingCard occasion="Birthday" recipient="John" />
      
      <GreetingCard />
    </div>
  );
}

export default App;
