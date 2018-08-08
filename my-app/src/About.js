import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, Row, Col } from 'react-materialize';


export class About extends React.Component {
  render() {
    return (
      <div>
      <Row>
       <h1>About</h1>
      </Row>
      <Row>
        <Col m={.5} className='grid-example'></Col>
        <Col m={3} className='grid-example'>
        <Card header={<CardTitle reveal image={"https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-0.3.5&s=b3e0bd06da928825554b9f502eb28407&auto=format&fit=crop&w=3021&q=80"} waves='light'/>}
            title="Experience"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        </Card>
        </Col>
        <Col m={.5} className='grid-example'></Col>
        <Col m={3} className='grid-example'>
        <Card header={<CardTitle reveal image={"https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-0.3.5&s=b3e0bd06da928825554b9f502eb28407&auto=format&fit=crop&w=3021&q=80"} waves='light'/>}
            title="Background"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
        </Col>
        <Col m={.5} className='grid-example'></Col>
        <Col m={3} className='grid-example'>
        <Card header={<CardTitle reveal image={"https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-0.3.5&s=b3e0bd06da928825554b9f502eb28407&auto=format&fit=crop&w=3021&q=80"} waves='light'/>}
            title="Hobbies"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
        </Col>
        <Col m={.5} className='grid-example'></Col>
      </Row>
      </div>
    );
  }
}

ReactDOM.render(
  <About />,
  document.getElementById('root')
)
