import React, { Component } from 'react';
import Script from 'react-load-script'

class SquareAppointment extends Component {

  render() {
    return (

      <Script
        url="https://squareup.com/appointments/buyer/widget/ce96cbad-437c-40b8-9978-9685f88c8493/0RM6MYM9QZJY3.js"
        onCreate={this.handleScriptCreate.bind(this)}
        onError={this.handleScriptError.bind(this)}
        onLoad={this.handleScriptLoad.bind(this)}
      />
    )
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

}

export default SquareAppointment;
