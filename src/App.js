import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import tests from './test/dummyData';
import makeDummyTest from './test/makeDummyTest';

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
      <div className="RootContainer">
        <h1>Test Runner</h1>

        <div className="testsList">
          {(this.state.tests).map(test => {

            return (
              <div key={test.description}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>{test.description}</p>
                  {!clicked && <span style={{background:'grey'}}>Test did not run yet</span>}
                  {clicked && testStatus === 'running' && <span style={{background:'limegreen'}}>Test is running</span>}
                  {testStatus === 'passed' && <span style={{background:'green'}}>Test passed</span>}
                  {testStatus === 'failed' && <span style={{background:'darkred'}}>Test failed</span>}
                </div>
              </div>
            );
          })}
        </div>
        <button className="testRunner" onClick={this.handleClick}>Run these tests</button>
      </div>
    );
  }
}

export default App;
