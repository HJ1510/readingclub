import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./component/main/index";
import Community from "./component/community";
import Meeting from "./component/meeting";
import Note from "./component/note";
import NoteList from "component/note/NoteList";
import NoteBookmark from "component/note/NoteBookmark";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/community" element={<Community />} />
      <Route path="/note">
        <Route index element={<Note />} />
        <Route path="/note/mynote" element={<Note />} />
        <Route path="/note/notelist" element={<NoteList />} />
        <Route path="/note/notebookmark" element={<NoteBookmark />} />
      </Route>
    </Routes>
  );
};

export default App;
