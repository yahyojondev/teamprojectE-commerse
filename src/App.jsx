import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </>
  );
}

export default App;
