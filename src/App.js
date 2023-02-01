import "App.css";
import Header from "component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "component/Home";
import Meeting from "pages/Meeting";
import Note from "pages/Note";
import Community from "pages/Community";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/note" element={<Note />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <footer></footer>
    </div>
  );
};

export default App;
