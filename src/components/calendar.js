import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css';
import CalendarFooter from './calendar-footer';

export default class Calendar extends Component {
    constructor(){
        super();
        this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.state = {
            currentDay: new Date(),
    }
}

    changeCurrentDay = (day) => {
        this.setState({
            currentDay: new Date(day.year, day.month, day.number)
        })
    }

    nextDay = () => {
        this.setState({
            currentDay: new Date(this.state.currentDay.setDate(this.state.currentDate.getDate()+1))
        })
    }

    previousDay = () => {
        this.setState({
            currentDay: new Date(this.state.currentDay.setDate(this.state.currentDate.getDate()-1))
        })
    }
    
    render() {
        return ( 
        <div className='calendar'>
            <div className='calendar-header'>
                <h2>{this.weekdays[this.state.currentDay.getDay()]} {this.state.currentDay.getDate()} { this.months[this.state.currentDay.getMonth()] } {this.state.currentDay.getFullYear()}</h2>
            </div>

            <div className='calendar-body'>
                <div className='table-header'>
                    {/* Obtenir tous les elements de weekdays et afficher dans une div */}
                    {this.weekdays.map((weekday) => {
                        return <div className='weekday'><p>{weekday}</p></div>
                    })}
                </div>
                <div className='calendar-table'>
                    <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}/>
                </div>
                {/* <div className='calendar-footer'>
                    <CalendarFooter nextDay={this.nextDay} previousDay={this.previousDay}/>
                </div> */}
            </div>
        </div>
        )
    }

}