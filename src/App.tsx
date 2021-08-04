import React from 'react';

import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Nav } from "./components/Nav";
import { LoginPage } from "./views/LoginPage";
import { EnrollPage } from "./views/EnrollPage";
import { HomePage } from "./views/HomePage";
import { BuskerPage } from "./views/BuskerPage";
import { ChatroomPage } from "./views/ChatroomPage";
import { BuskerRecordPage } from "./views/BuskerRecordPage";
import { BuskerInfoPage } from "./views/BuskerInfoPage";
import { BuskerApplyPage } from "./views/BuskerApplyPage";
import { BuskerDataPage } from "./views/BuskerDataPage";
import { BuskerApplyPerformancePage } from "./views/BuskerApplyPerformancePage";
import { BuskerCommentBoardPage } from "./views/BuskerCommentBoardPage";
import { path } from "./modules/routerPath";

import './public/css/main.css'
import './public/css/normalize.css'
const App = () => {
  return (
    <HashRouter>
      <div className='container'>
        <Nav />
        <Switch>
          <Route path={path.busker_comment_board} component={BuskerCommentBoardPage} />
          <Route path={path.busker_apply_performance} component={BuskerApplyPerformancePage} />
          <Route path={path.busker_data} component={BuskerDataPage} />
          <Route path={path.busker_apply} component={BuskerApplyPage} />
          <Route path={path.busker_info} component={BuskerInfoPage} />
          <Route path={path.busker_record} component={BuskerRecordPage} />
          <Route path={path.chatroom} component={ChatroomPage} />
          <Route path={path.busker} component={BuskerPage} />
          <Route path={path.enroll} component={EnrollPage} />
          <Route path={path.login} component={LoginPage} />
          <Route path={path.index} component={HomePage} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App;
