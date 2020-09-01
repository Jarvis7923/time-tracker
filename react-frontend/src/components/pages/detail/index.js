import React from "react";
import { Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import HistoryPage from "./body/history";
import TodayPage from "./body/today";
import SettingsPage from "./body/settings";
import SummeryPage from "./body/summery";

import SideNav from "./SideNav";
import MainNav from "../../MainNav";

export default function Detail() {
  return (
    <div className='detail-page'>
      <MainNav />
      <Row noGutters>
        <Col sm="2">
          <SideNav />
        </Col>
        <Col>
          <Switch>
            <Route path='/detail/today'>
              <TodayPage />
            </Route>
            <Route path='/detail/history'>
              <HistoryPage />
            </Route>
            <Route path='/detail/summery'>
              <SummeryPage />
            </Route>
            <Route path='/detail/settings'>
              <SettingsPage />
            </Route>
            <Route path='/detail/'>
              <TodayPage />
            </Route>
          </Switch>
        </Col>
        <Col sm="3">
          Reminder
        </Col>
      </Row>
    </div>
  );
}
