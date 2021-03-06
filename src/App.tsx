import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from "./store/store";
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { LoginPage } from "./views/LoginPage";
import { EnrollPage } from "./views/EnrollPage";
import { HomePage } from "./views/HomePage";
import { BuskerPage } from "./views/BuskerPage";
import { ChatroomPage } from "./views/ChatroomPage";
import { CommentsRecordPage } from "./views/CommentRecordPage";
import { MemberInfoPage } from "./views/MemberInfoPage";
import { MemberPasswordPage } from "./views/MemberPasswordPage";
import { BuskerApplyPage } from "./views/BuskerApplyPage";
import { BuskerDataPage } from "./views/BuskerDataPage";
import { BuskerApplyPerformancePage } from "./views/BuskerApplyPerformancePage";
import { BuskerCommentBoardPage } from "./views/BuskerCommentBoardPage";
import { LinePayDonatePage } from "./views/LinePayDonatePage";
import { DonateResultPage } from "./views/DonateResultPage";
import { ForgotPasswordPage } from "./views/ForgotPasswordPage";

import { path } from "./modules/routerPath";
import './public/css/main.css'
import './public/css/normalize.css'

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>

          <div className='container'>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDv-qTdhtRt8GnEPSNiGppH308o2oQINbU&callback=init"
              async defer></script>
            <Nav />
            <Switch>
              <Route path={path.busker_comment_board} component={BuskerCommentBoardPage} />
              <Route path={path.busker_apply_performance} component={BuskerApplyPerformancePage} />
              <Route path={path.busker_data} component={BuskerDataPage} />
              <Route path={path.busker_apply} component={BuskerApplyPage} />
              <Route path={path.member_info} component={MemberInfoPage} />
              <Route path={path.member_password} component={MemberPasswordPage} />
              <Route path={path.comments_record} component={CommentsRecordPage} />
              <Route path={path.chatroom} component={ChatroomPage} />
              <Route path={path.busker} component={BuskerPage} />
              <Route path={path.enroll} component={EnrollPage} />
              <Route path={path.login} component={LoginPage} />
              <Route path={path.index} component={HomePage} />
              <Route path={path.donateResult} component={DonateResultPage} />
              <Route path={path.forgotPassword} component={ForgotPasswordPage} />
              <Route path={path.linePayDonatePage} component={LinePayDonatePage} />
              <Route path={path.others} component={LoginPage} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>

        {/* <HashRouter>
          <div className='container'>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDv-qTdhtRt8GnEPSNiGppH308o2oQINbU&callback=init"
              async defer></script>
            <Nav />
            <Switch>
              <Route path={path.busker_comment_board} component={BuskerCommentBoardPage} />
              <Route path={path.busker_apply_performance} component={BuskerApplyPerformancePage} />
              <Route path={path.busker_data} component={BuskerDataPage} />
              <Route path={path.busker_apply} component={BuskerApplyPage} />
              <Route path={path.member_info} component={MemberInfoPage} />
              <Route path={path.member_password} component={MemberPasswordPage} />
              <Route path={path.comments_record} component={CommentsRecordPage} />
              <Route path={path.chatroom} component={ChatroomPage} />
              <Route path={path.busker} component={BuskerPage} />
              <Route path={path.enroll} component={EnrollPage} />
              <Route path={path.login} component={LoginPage} />
              <Route path={path.index} component={HomePage} />
              <Route path={path.others} component={LoginPage} />
            </Switch>
            <Footer />
          </div>
        </HashRouter> */}
      </PersistGate>
    </Provider>
  )
}

export default App;
