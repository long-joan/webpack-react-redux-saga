import React, { Component } from 'react';
import Button from '../components/button';

export default class Detail extends Component {
  constructor (prop) {
    super(prop);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Button text={'Detail'}/>
      </div>
    )
  }
}
