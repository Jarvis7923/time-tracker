import React from "react";
import {Tabs, Tab, Button, Row, Col, Form, Nav} from "react-bootstrap";



const LegendRow = (props)=>{
  return (
    <Row noGutters>
      <Col>Event</Col>
      <Col>Time</Col>
      <Col>Note</Col>
    </Row>
  );
}

const DataRow = (props) => {
  /* {Object.entries(props.data).map((x,i) => <Col key={i}>{x[1]}</Col>)} */
  var data = props.data;
  return (
    <Row noGutters>
      <Col>{data.event}</Col>
      <Col>{data.time}</Col>
      <Col>{data.note}</Col>
    </Row>
  );
};

const DataTabular = (props) => {
  const rows = props.rows;
  return (
    <div>
      <LegendRow />
      {rows.map((x, i) => (
        <DataRow key={i} data={x} />
      ))}
    </div>
  );
};

const SummaryCard = (props) =>  {
  const data = props.data;
  return (
    <div>
      <p>
        <span>{data.category}</span> {data.time}
      </p>
      <DataTabular rows={data.events}/>
      <br/>
    </div>
  );
}

const SummaryBody = (props) => {
  const span = props.data.span;
  const d = props.data.d;
  console.log(d);
  // Drop down box
  return (
    <div>
      <p>Time Span: {span}</p>
      {d.map((x, i) => (
        <SummaryCard key={i} data={x} />
      ))}
    </div>
  );
};

export default function SummaryPage() {
  const res = {
    day: {
      span: "Sep.06, 00:00 - Sep.06 23:59",
      d: [
        {
          category: "work",
          time: "10 hours 51 min",
          events: [
            { event: "thesis", note: "i donw know", time: "2 hours 2 min" },
            {
              event: "build robot",
              note: "i donw know",
              time: "3 hours 2 min",
            },
          ],
        },
        {
          category: "life",
          time: "2 hours 51 min",
          events: [
            { event: "eating", note: "i donw know", time: "2 hours 2 min" },
            { event: "sleeping", note: "i donw know", time: "3 hours 2 min" },
          ],
        },
      ]
    },
    week: {
      span: "Sep.06, 00:00 - Sep.12 23:59",
      d: []
    },
    month: {
      span: "Sep.01, 00:00 - Sep.30 23:59",
      d: []
    },
  };
  return (
    <div>
      <Tabs defaultActiveKey='day' id='uncontrolled-tab-example'>
        <Tab eventKey='day' title='Today'>
          <SummaryBody data={res.day} />
        </Tab>
        <Tab eventKey='week' title='This Week'>
          <SummaryBody data={res.week} />
        </Tab>
        <Tab eventKey='month' title='This Month'>
          <SummaryBody data={res.month} />
        </Tab>
      </Tabs>
    </div>
  );
}


