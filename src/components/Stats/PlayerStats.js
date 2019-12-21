import React from 'react'
import { Link } from 'react-router-dom'



export default function PlayerStats() {
    return (
        <div class="card p-1 bg-info mt-5 container">
            <div class="row bg-dark p-4  m-0 mb-1 ">
                <div class="col-lg-9 p-0">

                    <input type="text" class="form-control" placeholder="Scahin Temdulkar" /></div>
                <div class="col-lg-1">
                    <button class="btn btn-primary">GO</button>
                </div>
                <div class="col-lg-2 p-0">
                    <img src="https://img.icons8.com/flat_round/64/000000/positive-dynamic.png" />
                    <img src="https://img.icons8.com/flat_round/64/000000/combo-chart.png" />
                </div>
            </div>
            <div class="jumbotron text-center m-0">
                <h1 class="display-4 mb-3">Get Perzonalized Stats Of Your Favourite Players</h1>
                <div class="text-center pt-3">

                    <img src="https://img.icons8.com/color/48/000000/australia.png" />
                    <img src="https://img.icons8.com/color/48/000000/sri-lanka.png" />
                    <img src="https://img.icons8.com/color/48/000000/bangladesh.png" />
                    <img src="https://img.icons8.com/color/48/000000/india.png" />
                    <img src="https://img.icons8.com/color/48/000000/south-africa.png" />

                    <img src="https://img.icons8.com/color/48/000000/netherlands.png" />

                </div>
            </div>

            <button ><Link to='/Profile'>click</Link></button>


        </div>
    )
}
