import React from "react";
import { Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import HistoryDetail from "./body/history-detail";
import NewDetail from "./body/new-detail";

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
            <Route path='/detail/new'>
              <NewDetail />
            </Route>
            <Route path='/detail/history'>
              <HistoryDetail />
            </Route>
            <Route path='/detail/'>
              <NewDetail />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
}
