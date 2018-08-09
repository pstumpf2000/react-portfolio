import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Row, Col } from 'react-materialize';

export class Contact extends React.Component {
  render() {
    var show = this.props.show;
    let styles = {
      display: show
    }
    return (
      <div style={styles}>
        <h1 className='section-header'>Contact Me</h1>
        <Row className='center'>
          <Col s={3}>
            <Icon large href='http://www.google.com'>insert_chart</Icon>
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
