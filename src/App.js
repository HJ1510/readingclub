import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./component/main/index";
import Community from "./component/community";
import Meeting from "./component/meeting";
import Note from "./component/note";

import MeetingInfo from "component/meeting/MeetinfInfo";
import ArticleView from "component/meeting/board/ArticleView";
import ArticleWrite from "component/meeting/board/ArticleWrite";
import ArticleModiForm from "component/meeting/board/ArticleModiForm";
import LoginPage from "component/user/Login";
import Join from "component/user/Join";
import Booknote from "component/booknote/Booknote";
import Writebook from "./component/booknote/Writebook";
import Booknoteno from "./component/booknote/Booknoteno";
import MeetingCreate from "component/meeting/MeetingCreate";
import MeetingCreate2 from "component/meeting/MeetingCreate2";
import MeetingGroup from "component/meeting/MeetingGroup";
import MeetingAdmin from "component/meeting/MeetingAdmin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<Join />} />
      <Route path="meeting">
        <Route index element={<Meeting />} />
        <Route path="info/:no" element={<MeetingInfo />} />
        <Route path="info/:no/:id" element={<ArticleView />} />
        <Route path="info/:no/modi/:id" element={<ArticleModiForm />} />
        <Route path="group/:no" element={<MeetingGroup />} />
        <Route path="admin/:no" element={<MeetingAdmin />} />
        <Route path="write" element={<ArticleWrite />} />
        <Route path="createmeeting" element={<MeetingCreate2 />} />
      </Route>
      <Route path="community" element={<Community />} />
      <Route path="booknote">
        <Route index element={<Booknote />} />
        <Route path="mynote" element={<Note />} />
        <Route path="writebook" element={<Writebook />} />
        <Route path=":no" element={<Booknoteno></Booknoteno>} />
      </Route>
    </Routes>
  );
};

export default App;
