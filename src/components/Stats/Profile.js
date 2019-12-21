import React from 'react'

export default class Profile extends React.Component {
    render() {

        const player = this.props.location.state.player;

        const odiBat = player.data.batting.ODIs;
        const testBat = player.data.batting.tests;
        const ttBat = player.data.batting.T20Is;

        const odiBowl = player.data.bowling.ODIs;
        const testBowl = player.data.bowling.tests;
        const ttBowl = player.data.bowling.T20Is;

        console.log(player)
        return (
            <React.Fragment>
                <div className="basic card p-2 container my-4">
                    <div className="row bg-info m-0">
                        <div className="col-lg-3 pl-5">
                            <img src={player.imageURL} alt="" className='rounded-circle' />

                        </div>



                        <div className="col-lg-6 pt-4 p-0 m-0 text-white"><h1><strong></strong>{player.name}</h1>
                            <p className='lead'>{player.country}</p></div>
                    </div>
                    <div className="row  mt-2">
                        <div className="col-lg-4"><div className="personalInfo  card px-2 py-2 " ><h3>Personal Information</h3>
                            <hr />

                            <p>
                                <p className="mt-2"><span><strong> Born:</strong>     {player.born} </span></p>

                                <p className="mt-2"><span><strong>Role:  </strong>      {player.playingRole}</span></p>
                                <p className="mt-2"><span><strong>Age:  </strong>     {player.currentAge} </span></p>
                                <p className="mt-2"><span><strong>Teams:  </strong>       {player.majorTeams} </span></p>

                            </p>
                        </div>

                        </div>




                        <div className="col-lg-8"><div className="card p-2">
                            <p className="lead" style={{ fontSize: "14px" }}>{player.profile}</p>

                            <h5>Batting Summary</h5>
                            <p><table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Format</th>
                                        <th scope="col">M</th>
                                        <th scope="col">Inn</th>
                                        <th scope="col">NO</th>
                                        <th scope="col">Runs</th><th scope="col">HS</th><th scope="col">Avg</th><th scope="col">BF</th><th scope="col">SR</th><th scope="col">4</th><th scope="col">6</th><th scope="col">50</th><th scope="col">100</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">ODI</th>

                                        <td>{odiBat.Mat}</td>
                                        <td>{odiBat.Inns}</td>
                                        <td>{odiBat.NO}</td>
                                        <td>{odiBat.Runs}</td>
                                        <td>{odiBat.HS}</td>
                                        <td>{odiBat.Ave}</td>
                                        <td>{odiBat.BF}</td>
                                        <td>{odiBat.SR}</td>
                                        <td>{odiBat["4s"]}</td>
                                        <td>{odiBat["6s"]}</td>
                                        <td>{odiBat["50"]}</td>
                                        <td>{odiBat["100"]}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TEST</th>
                                        <td>{testBat.Mat}</td>
                                        <td>{testBat.Inns}</td>
                                        <td>{testBat.NO}</td>
                                        <td>{testBat.Runs}</td>
                                        <td>{testBat.HS}</td>
                                        <td>{testBat.Ave}</td>
                                        <td>{testBat.BF}</td>
                                        <td>{testBat.SR}</td>
                                        <td>{testBat["4s"]}</td>
                                        <td>{testBat["6s"]}</td>
                                        <td>{testBat["50"]}</td>
                                        <td>{testBat["100"]}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">T-20</th>
                                        <td>{ttBat.Mat}</td>
                                        <td>{ttBat.Inns}</td>
                                        <td>{ttBat.NO}</td>
                                        <td>{ttBat.Runs}</td>
                                        <td>{ttBat.HS}</td>
                                        <td>{ttBat.Ave}</td>
                                        <td>{ttBat.BF}</td>
                                        <td>{ttBat.SR}</td>
                                        <td>{ttBat["4s"]}</td>
                                        <td>{ttBat["6s"]}</td>
                                        <td>{ttBat["50"]}</td>
                                        <td>{ttBat["100"]}</td>
                                    </tr>
                                </tbody>
                            </table></p>

                            <h5>Bowling Summary</h5>
                            <p><table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Formats</th>
                                        <th scope="col">M</th>
                                        <th scope="col">Inn</th>
                                        <th scope="col">Wkts</th>
                                        <th scope="col">Balls</th><th scope="col">BBM</th><th scope="col">Avg</th><th scope="col">BBI</th><th scope="col">Eco</th><th scope="col">4w</th><th scope="col">5w</th><th scope="col">10w</th><th scope="col">SR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">ODI</th>
                                        <td>{odiBowl.Mat}</td>
                                        <td>{odiBowl.Inns}</td>
                                        <td>{odiBowl.Wkts}</td>
                                        <td>{odiBowl.Balls}</td>
                                        <td>{odiBowl.BBM}</td>
                                        <td>{odiBowl.Ave}</td>
                                        <td>{odiBowl.BBI}</td>
                                        <td>{odiBowl.Econ}</td>

                                        <td>{odiBowl["4w"]}</td>
                                        <td>{odiBowl["5w"]}</td>
                                        <td>{odiBowl["10w"]}</td>
                                        <td>{odiBowl.SR}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">TEST</th>
                                        <td>{testBowl.Mat}</td>
                                        <td>{testBowl.Inns}</td>
                                        <td>{testBowl.Wkts}</td>
                                        <td>{testBowl.Balls}</td>
                                        <td>{testBowl.BBM}</td>
                                        <td>{testBowl.Ave}</td>
                                        <td>{testBowl.BBI}</td>
                                        <td>{testBowl.Econ}</td>

                                        <td>{testBowl["4w"]}</td>
                                        <td>{testBowl["5w"]}</td>
                                        <td>{testBowl["10w"]}</td>
                                        <td>{testBowl.SR}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">T-20</th>
                                        <td>{ttBowl.Mat}</td>
                                        <td>{ttBowl.Inns}</td>
                                        <td>{ttBowl.Wkts}</td>
                                        <td>{ttBowl.Balls}</td>
                                        <td>{ttBowl.BBM}</td>
                                        <td>{ttBowl.Ave}</td>
                                        <td>{ttBowl.BBI}</td>
                                        <td>{ttBowl.Econ}</td>

                                        <td>{ttBowl["4w"]}</td>
                                        <td>{ttBowl["5w"]}</td>
                                        <td>{ttBowl["10w"]}</td>
                                        <td>{ttBowl.SR}</td>
                                    </tr>
                                </tbody>
                            </table></p>


                        </div></div></div>
                </div>
            </React.Fragment >
        )
    }
}
