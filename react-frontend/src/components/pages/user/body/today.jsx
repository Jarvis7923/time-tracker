import React from "react";
import {Button, Row, Col, Form} from "react-bootstrap";

const LegendRow = (props)=>{
  return (
    <Row noGutters>
      <Col>Finish Time</Col>
      <Col>Category</Col>
      <Col>Event</Col>
      <Col>Description</Col>
      <Col>Note</Col>
      <Col>Tag</Col>
    </Row>
  );
}

const DataRow = (props) => {
  /* {Object.entries(props.data).map((x,i) => <Col key={i}>{x[1]}</Col>)} */
  var data = props.data;
  return (
    <Row noGutters>
      <Col>{data.time}</Col>
      <Col>{data.category}</Col>
      <Col>{data.event}</Col>
      <Col>{data.description}</Col>
      <Col>{data.note}</Col>
      <Col>
        {data.tag.map((x, i) => (
          <span key={i}>{x} </span>
        ))}
      </Col>
    </Row>
  );
};

const InputGroup = (props) => {
  const categories = props.categories;
  const tags = props.tags;
  return (
    <Form>
      <Row noGutters>
        <Form.Group as={Col} controlId='time-tracking-item-time'>
          <Form.Label>Finish Time</Form.Label>
          <Form.Control type='text' placeholder='Finish Time' />
        </Form.Group>
        <Form.Group as={Col} controlId='time-tracking-item-category'>
          <Form.Label>Category</Form.Label>
          <Form.Control as='select'>
            {categories.map((x, i) => (
              <option key={i}>{x.category}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId='time-tracking-item-event'>
          <Form.Label>Event</Form.Label>
          <Form.Control as='select'>
            <option>event 1</option>
            <option>event 2</option>
            <option>event 3</option>
          </Form.Control>
        </Form.Group>
      </Row>

      <Form.Group controlId='time-tracking-item-tag'>
        <Form.Label>Tags</Form.Label>
          <Form.Control as='select'>
            {tags.map((x, i) => (
              <option key={i}>{x}</option>
            ))}
          </Form.Control>
      </Form.Group>
      <Form.Group controlId='time-tracking-item-description'>
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' placeholder='descripton' />
      </Form.Group>
      <Form.Group controlId='time-tracking-item-note'>
        <Form.Label>Note</Form.Label>
        <Form.Control type='text' placeholder='Note' />
      </Form.Group>
    <Button>Update</Button>
    </Form>
  );
};

export default function HistoryDetail() {
  const categories = [
    { category: "work", event: ['thesis', 'time tracker', 'job hunting'] },
  ];

  const tags = [
    'headache',
    'depressed',
    'sick'
  ]
  const data = [
    {
      time: "18:00",
      category: "work",
      event: "thesis",
      description: "5 pages words and equations",
      note: "i donw know",
      tag: ["headache", "depressed"],
    },
    {
      time: "18:00",
      category: "other",
      event: "eating",
      description: "dish washing",
      note: "i donw know",
      tag: ["headache", "depressed", "sad", "happy"],
    },
    {
      time: "18:00",
      category: "work",
      event: "thesis",
      description: "5 pages words and equations",
      note: "i donw know",
      tag: ["headache", "depressed"],
    },
    {
      time: "18:00",
      category: "work",
      event: "thesis",
      description: "5 pages words and equations",
      note: "i donw know",
      tag: ["headache", "depressed"],
    },
  ];
  return (
    <Row noGutters>
      <Col>
        <LegendRow />
        <br />
        {data.map((x, i) => (
          <DataRow key={i} data={x}></DataRow>
        ))}
        <br />
        {/* <LegendRow />
        <br /> */}
        <h3>Add a new record</h3>
        <InputGroup categories={categories} tags={tags}/>

      </Col>
    </Row>
  );
}

