import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/main/index";
import Community from "./component/community";
import Meeting from "./component/meeting";
import Note from "./component/note";

import MeetingInfo from "component/meeting/MeetingInfo";
import ArticleView from "component/meeting/board/ArticleView";
import ArticleWrite from "component/meeting/board/ArticleWrite";
import ArticleModiForm from "component/meeting/board/ArticleModiForm";
import LoginPage from "component/user/Login";
import Join from "component/user/Join";
import Booknote from "component/booknote/Booknote";
import Writebook from "./component/booknote/Writebook";
import Booknoteno from "./component/booknote/Booknoteno";
import MeetingCreate from "component/meeting/MeetingCreate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="meeting">
          <Route index element={<Meeting />} />
          <Route path=":no" element={<MeetingInfo />} />
          <Route path=":no/:id" element={<ArticleView />} />
          <Route path="write" element={<ArticleWrite />} />
          <Route path=":no/:id/modi" element={<ArticleModiForm />} />
          <Route path="createmeeting" element={<MeetingCreate />} />
        </Route>
        <Route path="community" element={<Community />} />
        <Route path="booknote">
          <Route index element={<Booknote />} />
          <Route path="mynote" element={<Note />} />

          <Route path="writebook" element={<Writebook />} />
          <Route path=":no" element={<Booknoteno></Booknoteno>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
