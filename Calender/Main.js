import React, { Component } from "react";
import moment from "moment";
import './calendar.css';
class Main extends Component{

  state ={
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  constructor(props){
    super(props);
    this.width = props.width || '350px';
    this.style =props.style || {} ;
  }
  
  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();
year =() =>{
    return this.state.dateContext.format('Y')
};
month =() =>{
  return this.state.dateContext.format('MMMM')
};
daysInMonth =() =>{
  return this.state.dateContext.daysInMonth()
};
currentDate =() =>{
  return this.state.dateContext.get('date')
};
currentDay = () =>{
  return this.state.dateContext.format('D')
};
firstDayofMonth = () =>{
  let dateContext = this.state.dateContext;
  let firstDay = moment(dateContext).startOf('month').format('d')
  return firstDay;
}
  render(){
  return (
    <div>
      <h2>Calendar</h2>
    </div>
  );
  }
};

export default Main;
