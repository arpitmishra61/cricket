import React, { Component } from 'react'
import SideBar from './Sidebar'
import LiveScore from './LiveScore';
import ImageGallary from './ImageGallary';

export default class Showcase extends Component {
  state = {
    player: ''
  }
  render() {
    return (
      <div>
        <LiveScore />
        <div className="card mx-4  px-2 pr-4 py-3 mb-3 bg-dark">

          <div className="row">
            <div className="col-lg-8">
              <ImageGallary />


            </div>

            <SideBar />



          </div>
        </div>
      </div>

    )
  }
}
