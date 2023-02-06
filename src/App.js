import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./component/main/index";
import Community from "./component/community";
import Meeting from "./component/meeting";
import Note from "./component/note";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/note" element={<Note />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  );
};

export default App;
