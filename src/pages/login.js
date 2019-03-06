import React, { Component } from 'react';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}
  hrll = () => {
    console.log(1)
  };
  render () {
    return (
      <div onClick={this.hrll}>
        Login
      </div>
    );
  }
}
export default Login;
