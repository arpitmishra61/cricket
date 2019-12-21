import React from 'react'

export default function ImageGallary() {
    return (
        <React.Fragment>

            <img
                src={`http://p.imgci.com/db/PICTURES/CMS/286200/286277.jpg`}
                alt="" style={{ height: '560px', width: '100%' }} />
            <div className="row mt-3">
                <div className="col-lg-3 pl-3  "><img
                    src={`http://p.imgci.com/db/PICTURES/CMS/286200/286276.jpg`}
                    alt="" style={{ height: '160px', width: '100%' }} /></div>
                <div className="col-lg-3 p-1  "><img
                    src={`http://p.imgci.com/db/PICTURES/CMS/286200/286275.jpg`}
                    alt="" style={{ height: '160px', width: '100%' }} /></div>
                <div className="col-lg-3  p-1"><img
                    src={`http://p.imgci.com/db/PICTURES/CMS/286200/286274.jpg`}
                    alt="" style={{ height: '160px', width: '100%' }} /></div>
                <div className="col-lg-3  p-1"><img
                    src={`http://p.imgci.com/db/PICTURES/CMS/286200/286279.jpg`}
                    alt="" style={{ height: '160px', width: '100%' }} /></div>
            </div>

        </React.Fragment>
    )
}
