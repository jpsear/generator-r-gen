import React, { Component } from 'react'
<% if (data.observer) { -%>
import { observer } from 'mobx-react'
<% } -%>
<% if (data.cssModules) { -%>
import CSSModules from 'react-css-modules'
import s from './<%= data.name %>.scss'
<% } -%>

<% if (data.observer) { -%>
@observer
<% } -%>
<% if (data.cssModules) { -%>
@CSSModules(s)
<% } -%>
class <%= data.name %> extends Component {
  render() {
    return (
<% if (data.cssModules) { -%>
      <div styleName="wrapper">
<% } else { -%>
      <div>
<% } -%>
        Hi.
      </div>
    );
  }
}

<% if (data.propTypes) { -%>
<%= data.name %>.propTypes = {

}

<%= data.name %>.defaultProps = {
  
}
<% } -%>

export default <%= data.name %>
