import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./component/main/index";
import Community from "./component/community";
import Meeting from "./component/meeting";
import Note from "./component/note";
import NoteList from "component/note/NoteList";
import NoteBookmark from "component/note/NoteBookmark";
import MeetingInfo from "component/meeting/MeetingInfo";
import ArticleView from "component/meeting/board/ArticleView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="meeting">
        <Route index element={<Meeting />} />
        <Route path="1" element={<MeetingInfo />} />
        <Route path="1/:no" element={<ArticleView />} />
      </Route>
      <Route path="community" element={<Community />} />
      <Route path="note">
        <Route index element={<Note />} />
        <Route path="mynote" element={<Note />} />
        <Route path="notelist" element={<NoteList />} />
        <Route path="notebookmark" element={<NoteBookmark />} />
      </Route>
    </Routes>
  );
};

export default App;
