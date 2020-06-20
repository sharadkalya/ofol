import React, { Component } from 'react';

class App extends Component {

  state = {
    password: '',
    username: ''
  };

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    fetch('/login')
      .then(res => res.json())
      .then(res => alert(res.message));
  }

  render() {
    return (
      <div className='App'>
        <h1>Login to ofol</h1>
        <form
          onSubmit={this.onSubmit}
        >
          <input
            type='string'
            name='username'
            value={this.state.username}
            placeholder='username'
            onChange={this.changeUsername}
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.changePassword}
          />
          <input
            type='submit'
            onSubmit={this.submit}
          />
        </form>
      </div>
    );
  }
}

export default App;
