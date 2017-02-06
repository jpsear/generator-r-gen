import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { observer } from 'react-mobx'
import s from './Component.scss'

@observer
@CSSModules(s)
class Component extends Component {
  render() {
    return (
      <div styleName="wrapper">
        Hi.
      </div>
    );
  }
}

Component.propTypes = {

}

Component.defaultProps = {
  
}

export default Component
