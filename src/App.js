import "./assets/css/App.css";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Main from "./component/main/index";
import Community from "./component/community";
import Meeting from "./component/meeting";
import axios from "axios";
import MeetingCreate from "component/meeting/MeetingCreate";

import MeetingInfo from "component/meeting/MeetingInfo";
import ArticleView from "component/meeting/board/ArticleView";
import ArticleWrite from "component/meeting/board/ArticleWrite";
import ArticleModiForm from "component/meeting/board/ArticleModiForm";
import LoginPage from "component/user/Login";
import Join from "component/user/Join";
import Booknote from "component/booknote/Booknote";
import Writebook from "./component/booknote/Writebook";
import Booknoteno from "./component/booknote/Booknoteno";
import MeetingGroup from "component/meeting/MeetingGroup";
import Booknoteupdate from "component/booknote/Booknoteupdate";
import Chat from "components/chat";
import Jofrom from "components/jofrom";
import { Member } from './component/user/Member';
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/jo" element={<Jofrom />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<Join />} />
      <Route path="/user" element={<Member/>}/>
      <Route path="meeting">
        <Route index element={<Meeting />} />
        <Route path="info/:no" element={<MeetingInfo />} />
        <Route path="info/:no/:id" element={<ArticleView />} />
        <Route path="info/:no/modi/:id" element={<ArticleModiForm />} />

        <Route path="write" element={<ArticleWrite />} />
        <Route path="createmeeting" element={<MeetingCreate />} />
      </Route>
      <Route path="community" element={<Community />} />
      <Route path="booknote">
        <Route index element={<Booknote />} />
        <Route path="writebook" element={<Writebook />} />
        <Route path=":no" element={<Booknoteno></Booknoteno>} />
        <Route path=":no/edit" element={<Booknoteupdate />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
