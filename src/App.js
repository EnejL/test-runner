import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import tests from './test/dummyData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      testStatus: {},
      tests: tests
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { tests } = this.state;
    this.setState({testStatus: 'running', clicked: true})
    tests.map(test => {
        test.run((x) =>   x === true ? this.setState({testStatus: 'passed'}) : this.setState({testStatus: 'failed'}))
    }) 
  }

  render() {
    const { clicked, testStatus } = this.state;

    return (
      <div className="AppContainer">
        <h1>Automated Test Runner</h1>

        <div className="testList">
          {(this.state.tests).map(test => {

            return (
              <div key={test.description} className="testItem">
                  <p>{test.description}</p>
                  {!clicked && <span style={{background:'grey'}}>Test did not run yet</span>}
                  {clicked && testStatus === 'running' && <span style={{background:'#17a2b8'}}>Test is running</span>}
                  {testStatus === 'passed' && <span style={{background:'green'}}>Test passed</span>}
                  {testStatus === 'failed' && <span style={{background:'darkred'}}>Test failed</span>}
              </div>
            );
          })}
        </div>
        <button className="testRunner" onClick={this.handleClick}>Run tests</button>
      </div>
    );
  }
}

export default App;
