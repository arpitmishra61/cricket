import React, { Component } from 'react'
import axios from 'axios';

export default class LiveScore extends Component {
    constructor() {
        super()
        this.state = {
            matches: [],
            internationalTeams: ['India', 'England', 'Sri Lanka', 'Bangladesh', 'South Africa', 'New Zeland', 'West Indies', 'Zimbabwe', 'Australia', 'Pakistan']
        }
        this.matches = [];
    }

    render() {
        let matches = this.state.matches;

        console.log('renderning', matches)




        return (
            <div>
                <div class="  mt-5 rounded pb-3 mx-3 ">
                    <h1 class=" display-5 bg-dark text-white p-2 m-0">Live Score</h1>
                    {(this.matches.length) ? (<div class="p-4 card">

                        <div class="row">
                            {(matches[0]) ? (
                                <div class="col-lg-4 ">
                                    <div class=" card p-2 score">
                                        <h4>{matches[0]['team-1']} vs {matches[0]['team-2']} </h4>
                                        <hr />
                                        <h3>{matches[0].score}</h3>

                                    </div>
                                </div>) : null}
                            {(matches[1]) ? (
                                <div class="col-lg-4 ">
                                    <div class=" card p-2"> <h4>{matches[1]['team-1']} vs {matches[1]['team-2']} </h4>
                                        <hr />
                                        <h3>{matches[1].score}</h3></div>
                                </div>) : null}
                            {(matches[2]) ? (
                                <div class="col-lg-4 ">
                                    <div class=" card p-2"><h4>{matches[2]['team-1']} vs {matches[2]['team-2']} </h4>
                                        <hr />
                                        <h3>{matches[2].score}</h3></div>
                                </div>) : null}


                            <div class="mt-4 d-block"><button class="btn btn-info text-center ">More Matches</button></div>
                        </div></div>) : <div className="card"><h1>Loading...</h1></div>}




                </div>


            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://cricapi.com/api/matches?apikey=ZQCmSHSK1CbMr8SCoTHf8wyfNIX2`).then((m) => {
            console.log(m)

            let currentMatchesId = []
            let currentMatches = []

            m.data.matches.forEach((m) => {


                if (m['team-1'] == 'India' || m['team-2'] == 'India') {
                    currentMatchesId.unshift(m.unique_id)


                }
                else {
                    this.state.internationalTeams.forEach(team => {
                        if (m['team-1'] == team || m['team-2'] == team)
                            currentMatchesId.push(m.unique_id)
                    })
                }




            }
            )

            currentMatchesId.forEach((id, i) => {
                axios.get(`https://cricapi.com/api/cricketScore?apikey=ZQCmSHSK1CbMr8SCoTHf8wyfNIX2&unique_id=${id}`).then((m) => {
                    currentMatches.push(m.data);


                    this.matches = currentMatches
                    this.setState({ matches: currentMatches })
                })
            })




        }
        ).catch(err => console.log(err))



    }
}