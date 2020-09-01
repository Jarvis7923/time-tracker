import React from "react";
import { Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import HistoryPage from "./body/history";
import TodayPage from "./body/today";
import SettingsPage from "./body/settings";
import SummaryPage from "./body/summary";

import SideNav from "./SideNav";
import MainNav from "../../MainNav";
import Reminder from "./reminder";

export default function UserPage() {
  return (
    <div className='user-page'>
      <MainNav />
      <Row noGutters>
        <Col sm="2">
          <SideNav />
        </Col>
        <Col>
          <Switch>
            <Route path='/user/today'>
              <TodayPage />
            </Route>
            <Route path='/user/history'>
              <HistoryPage />
            </Route>
            <Route path='/user/summery'>
              <SummaryPage />
            </Route>
            <Route path='/user/settings'>
              <SettingsPage />
            </Route>
            <Route path='/user/'>
              <TodayPage />
            </Route>
            <Route path='/user/settings'>
              <SettingsPage />
            </Route>
          </Switch>
        </Col>
        <Col sm="3">
          <Reminder />
        </Col>
      </Row>
    </div>
  );
}
