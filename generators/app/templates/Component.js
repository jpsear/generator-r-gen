import React, { Component } from 'react'
<% if (component.observer) { -%>
import { observer } from 'react-mobx'
<% } -%>
<% if (component.cssModules) { -%>
import CSSModules from 'react-css-modules'
import s from './<%= component.name %>.scss'
<% } -%>

<% if (component.observer) { -%>
@observer
<% } -%>
<% if (component.cssModules) { -%>
@CSSModules(s)
<% } -%>
class <%= component.name %> extends Component {
  render() {
    return (
      <div>
        Hi.
      </div>
    );
  }
}

<% if (component.propTypes) { -%>
<%= component.name %>.propTypes = {

}

<%= component.name %>.defaultProps = {
  
}
<% } -%>

export default <%= component.name %>
