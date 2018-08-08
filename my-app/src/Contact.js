import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Row, Col } from 'react-materialize';

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact Me</h1>
        <Row className='center'>
          <Col s={3}>
            <Icon large href='http://www.google.com'><i class="fab fa-github"></i></Icon>
          </Col>
          <Col s={3}>
            <Icon large href='http://www.google.com'>insert_chart</Icon>
          </Col>
          <Col s={3}>
            <Icon large href='http://www.google.com'>insert_chart</Icon>
          </Col>
          <Col s={3}>
            <Icon large href='http://www.google.com'>insert_chart</Icon>
          </Col>
        </Row>
      </div>
    );
  }
}
