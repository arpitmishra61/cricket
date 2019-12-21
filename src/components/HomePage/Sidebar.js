import React, { Component } from 'react'
import Stats from './Stats'
import axios from 'axios'


export default class Sidebar extends Component {
    constructor() {
        super()
        this.state = { player: [], schedule: false }
        this.statShow = true
        this.tempPlayer = [];
        this.count = 0;
        this.scheduleList = [];
    }
    render() {
        console.log(this.state.schedule)

        return (<React.Fragment>
            <div className="col-lg-4 bg-light pt-3">
                <div className="bg-primary pb-4">
                    <nav className="navbar bg-primary navbar-dark navbar-expand-lg">
                        <ul className="navbar-nav">

                            <li className="nav-item"><a className="nav-link active" style={{ cursor: 'pointer' }} onClick={() => { this.statShow = true; this.setState({ schedule: false }) }}>Stats</a></li>
                            <li className="nav-item"> <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => { this.getSchedule(); this.statShow = false }}>Schedule</a></li>
                        </ul>
                        <br />

                    </nav>
                    {(this.statShow) ? (<div className=" row p-1">
                        <div className="col-lg-8 m-0  ">
                            <input type="text" className=" input form-control bg-light ml-4" placeholder="Enter Player Name" />
                        </div>
                        <div className="col-lg-4">
                            <button className="btn btn-dark  " onClick={(e) => {
                                this.tempPlayer = [];

                                e.preventDefault();
                                let player = document.querySelector(".input").value
                                this.getPid(player)




                            }}>go</button>
                        </div>


                    </div>
                    ) : null}</div>

                {(this.state.player.length) ? (this.state.player.map((m, i) => <Stats player={m} key={i} id={i} />)) : (<Stats player={''} id={1} scheduleCheck={this.state.schedule} />)}

                {(this.state.schedule) ? (this.scheduleList.map((m, i) => { console.log('hhh'); if (i <= 4) return <Stats schedule={m} key={i} sid={i} /> })) : null}

            </div>
        </React.Fragment>
        )
    }

    getPid = (player) => {
        axios
            .get(
                `https://cricapi.com/api/playerFinder?apikey=NjNc6NjOMqPwQQVDe7grybjTRNz2&name=${player}`
            )
            .then(m => {
                console.log(m, 'iam m')
                let players = m.data.data;
                players.map(player => this.getStats(player));
            });
    };
    getSchedule = () => {
        axios.get('https://cricapi.com/api/matchCalendar?apikey=ZQCmSHSK1CbMr8SCoTHf8wyfNIX2').then((schedule) => {
            this.scheduleList = schedule.data.data;

            this.setState({
                schedule: true,
                player: []
            })

        })
    }

    getStats = player => {
        axios
            .get(
                `https://cricapi.com/api/playerStats?apikey=NjNc6NjOMqPwQQVDe7grybjTRNz2&pid=${
                player.pid
                }`
            )
            .then(m => {

                this.tempPlayer.push(m)
                this.setState({ player: this.tempPlayer }

                )


            });
    };


}
