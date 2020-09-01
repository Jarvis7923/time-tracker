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

const DataRow = (props)=>{
  return (
    <Row noGutters>
      <Col>18:00 </Col>
      <Col>Work</Col>
      <Col>Writing thesis</Col>
      <Col>literature survey of the jumping system in the field</Col>
      <Col>completed 3 papers and wrote notes</Col>
      <Col>Tag1 Tag2</Col>
    </Row>
  );
};

const InputRow = (props) => {
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
            <option>category 1</option>
            <option>category 2</option>
            <option>category 3</option>
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
          <Form.Control type='text' placeholder='fancy dropdown box' />
        </Form.Group>
        {/* <Form.Group as={Col} controlId='time-tracking-item-project'>
          <Form.Control type='text' placeholder='Dropdown box' />
        </Form.Group> */}
        <Form.Group controlId='time-tracking-item-description'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='text' placeholder='descripton' />
        </Form.Group>
        <Form.Group controlId='time-tracking-item-note'>
          <Form.Label>Note</Form.Label>
          <Form.Control type='text' placeholder='Note' />
        </Form.Group>
    </Form>
  );
};

export default function HistoryDetail() {
  return (
    <Row noGutters>
      <Col>
        <LegendRow />
        <br />
        <DataRow />
        <DataRow />
        <DataRow />
        <br />
        {/* <LegendRow />
        <br /> */}
        <h3>Add a new record</h3>
        <InputRow />

        <Button>Update</Button>
      </Col>
    </Row>
  );
}

