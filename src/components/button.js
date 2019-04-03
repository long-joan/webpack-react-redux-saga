import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './button.less';

class Button extends Component {
  constructor (prop) {
    super(prop);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <div styleName="test">{ this.props.text }</div>
      </div>
    )
  }
}

export default CSSModules(Button, styles);
