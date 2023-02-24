import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { Rating } from "./components/Rating";

function App() {
  return (
    <div className="App">
      <Rating />
      <Analytics />
    </div>
  );
}

export default App;
