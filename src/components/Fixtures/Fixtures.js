
import axios from 'axios'

import React, { Component } from 'react'

export default class Fixtures extends Component {
    state = {
        schedule: []
    }
    getSchedule = () => {
        axios.get('https://cricapi.com/api/matchCalendar?apikey=ZQCmSHSK1CbMr8SCoTHf8wyfNIX2').then((data) => {

            this.setState({
                schedule: data
            })

        })
    }

    scheduleDisplay = () => {
        let schedules = this.state.schedule.data.data;
        return schedules.map((schedule, i) => (<li className="list-group-item p-2 mb-2" key={i}><h5>{schedule.name}</h5> <p>{schedule.date}</p> </li>))
    }
    render() {
        console.log(this.state.schedule)


        return (<div className='container my-4'>
            <h3 className=" bg-info p-2 m-0 text-white">Cricket Schedule</h3>
            <nav className=" navbar navbar-dark  bg-dark navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className="nav-link active">Date</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Team</a></li>
                </ul>
            </nav>
            <div className="card bg-light p-2 mt-3">
                {(this.state.schedule.status == 200 ? <div className="mt-2">{this.scheduleDisplay()} </div> : <h1>Loading..</h1>)}


            </div></div>
        )
    }

    componentWillMount() {
        this.getSchedule();


    }
}




