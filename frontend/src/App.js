import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch('/dummy')
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ofol</h1>
      </div>
    );
  }
}

export default App;
