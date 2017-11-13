import React, { Component } from 'react';
import Script from 'react-load-script'

function SquareAppointmentWidget(props) {

  if (!props.widget) {
    return null;
  }

  return (
    <Script
      url="https://squareup.com/appointments/buyer/widget/ce96cbad-437c-40b8-9978-9685f88c8493/0RM6MYM9QZJY3.js"
    />
  );
}

class SquareAppointment2 extends Component {

  constructor(props) {
    super(props);
    this.state = {showAppointmentWidget: true}
  }

  render() {
    return (
      <div>
        <SquareAppointmentWidget widget={this.state.showAppointmentWidget} />
      </div>
    );
  }
}

export default SquareAppointment2;
