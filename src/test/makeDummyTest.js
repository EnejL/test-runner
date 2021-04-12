const makeDummyTest = () => {
    const delay = 7000 + Math.random() * 7000;
    const testPassed = Math.random() > 0.5;
  
    return callback => {
      window.setTimeout(() => callback(testPassed), delay);
    };
  };

  export default makeDummyTest;