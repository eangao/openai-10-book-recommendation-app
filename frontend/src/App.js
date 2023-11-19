import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import "./styles/bootstrap-custom.scss";
import Chat from "./screens/Chat";
import Chatbot from "./screens/Chatbot/Chatbot";
import Similarity from "./screens/Similarity";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/chatbot" element={<Chatbot />}></Route>
          <Route path="/similarity" element={<Similarity />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
