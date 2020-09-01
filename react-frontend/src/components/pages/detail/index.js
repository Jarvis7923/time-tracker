import React from "react";
import { Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import HistoryDetail from "./body/history-detail";
import NewDetail from "./body/new-detail";
import ProjectDetail from "./body/project-detail";
import SettingsPage from "./body/settings";

import SideNav from "./SideNav";
import MainNav from "../../MainNav";

export default function Detail() {
  return (
    <div className='detail-page'>
      <MainNav />
      <Row noGutters>
        <Col sm="1">
          <SideNav />
        </Col>
        <Col>
          <Switch>
            <Route path='/detail/new'>
              <NewDetail />
            </Route>
            <Route path='/detail/history'>
              <HistoryDetail />
            </Route>
            <Route path='/detail/project'>
              <ProjectDetail />
            </Route>
            <Route path='/detail/'>
              <NewDetail />
            </Route>
            <Route path='/detail/settings'>
              <SettingsPage />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
}
