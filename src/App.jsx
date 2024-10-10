import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import ShowNews from "./Components/Pages/ShowNews";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<ShowNews />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
