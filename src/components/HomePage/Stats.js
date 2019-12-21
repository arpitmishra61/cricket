import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Stats extends Component {
    constructor() {

        super();
        this.playerList = []
    }

    render() {

        if (this.props.player)
            this.playerList.push(this.props.player)

        console.log(this.props.id, 'child rendering')
        if (this.props.id <= 2 && !this.props.scheduleCheck)
            return (
                this.stats()

            )
        else

            if (this.props.schedule) {
                console.log('Working...')
                if (this.props.sid == 4)
                    return (<div className="text-center"> <Link to='/Fixtures' className='nav-link'><button className='btn btn-info mt-2'> Show More</button></Link></div>)
                else

                    return (<li className="list-group-item list-group-item-light mt-1">{this.props.schedule.name}
                        <p><strong>{this.props.schedule.date}</strong></p></li>)

            }
            else
                return null;
    }


    stats = () => {
        console.log('working..st')
        let player = this.props.player;
        console.log(this.props.id)

        return player.data ?

            (<div className="p-1  mb-1 mt-2">
                <li className='list-group-item bg-dark text-white list-group-item-active ' style={{ cursor: 'pointer' }}>
                    <Link to={{ pathname: '/Profile', state: { player: this.props.player.data } }} className='text-white'>{
                        player.data.fullName
                    }

                        <span style={{ fontSize: '12px', fontStyle: 'italic', marginLeft: '5px' }}>{player.data.country}</span>

                    </Link></li>
                {this.props.id == 2 ? <div className='text-center '><button>Show More</button></div> : null}

            </div >) : (<div>
                <div className="col mt-2">
                    <div className="row p-2">
                        <div className="card p-4 ml-2 stats">
                            <p className="lead ">Get your favourite player statastics.</p>


                        </div>
                    </div>

                </div>

            </div >)




    }




}



export default Stats;