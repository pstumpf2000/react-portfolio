import React from 'react';
import ReactDOM from 'react-dom';

export class About extends React.Component {
  render() {
    return (
      <div>
        This is the about page.
      </div>
    );
  }
}

ReactDOM.render(
  <About />,
  document.getElementById('root')
)
