import React from "react";
import {Button, Row, Col, Form} from "react-bootstrap";

const LegendRow = (props)=>{
  return (
    <Row noGutters>
      <Col>Date</Col>
      <Col>Finish Time</Col>
      <Col>Project</Col>
      <Col>Description</Col>
      <Col>Note</Col>
      <Col>Tag</Col>
    </Row>
  );
}

const DataRow = (props)=>{
  return (
    <Row noGutters>
      <Col>Jul 06</Col>
      <Col>18:00 </Col>
      <Col>Some Project</Col>
      <Col>description of the work just been done</Col>
      <Col>BlahBlahBlahBlah</Col>
      <Col>Tag1 Tag2</Col>
    </Row>
  );
};


const InputRow = (props) => {
  return (
    <Form>
      <Row noGutters>
        <Form.Group as={Col} controlId='time-tracking-item-date'>
          <Form.Control type='text' placeholder='Date' />
        </Form.Group>
        <Form.Group as={Col} controlId='time-tracking-item-time'>
          <Form.Control type='text' placeholder='Time' />
        </Form.Group>

        <Form.Group as={Col} controlId='time-tracking-item-project'>
          <Form.Control as='select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>
        {/* <Form.Group as={Col} controlId='time-tracking-item-project'>
          <Form.Control type='text' placeholder='Dropdown box' />
        </Form.Group> */}
        <Form.Group as={Col} controlId='time-tracking-item-description'>
          <Form.Control type='text' placeholder='descripton' />
        </Form.Group>
        <Form.Group as={Col} controlId='time-tracking-item-note'>
          <Form.Control type='text' placeholder='Note' />
        </Form.Group>
        <Form.Group as={Col} controlId='time-tracking-item-tag'>
          <Form.Control type='text' placeholder='fancy dropdown box' />
        </Form.Group>
      </Row>
    </Form>
  );
};

const ProjectList = (props) => {
  const project = [
    { key: "0", name: "RLB Lab Research", description: "3333" },
    { key: "1", name: "HIT Part Time Work", description: "3333" },
    { key: "2", name: "Halligan Review", description: "3333" },
  ];
  return (
    <ol>
      {project.map((x) => (
        <li key={x.key}>
          {x.name} : {x.description}
        </li>
      ))}
    </ol>
  );
};

const AddNewProject = (props) => {
  return (
    <Form>
      <Row noGutters>
        <Form.Group controlId='new-project-name'>
          <Form.Label>Project Name</Form.Label>
          <Form.Control type='text' placeholder='Name' />
        </Form.Group>

        <Form.Group controlId='new-project-description'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='text' placeholder='Description' />
        </Form.Group>
      </Row>
      <Button variant='outline-info'>urgent</Button>
      <Button variant='outline-info'>important</Button>

      <Button>Add New Project</Button>
    </Form>
  );
};


const DailySummery = () => {
  return (
    <Row noGutters>
      <Col sm='6'>
        Current Work Summery
      </Col>
      <Col sm='6'>
        Life Summery
      </Col>
    </Row>
    );
}

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
        <LegendRow />
        <br />
        <InputRow />

        <Button>Update</Button>
        <DailySummery />
      </Col>
      {/* <Col sm='5'>
        <ProjectList />
        <AddNewProject />
      </Col> */}
    </Row>
  );
}

