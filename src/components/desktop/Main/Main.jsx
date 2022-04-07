import React from 'react'
import OwlCarouselSlider from './OwlCarouselSlider/OwlCarouselSlider'
import TopMainSquareImage from './TopMainImages/TopMainSquareImage/TopMainSquareImage'


function Main() {
  return (
    <div className={"mainLayout"}>
      <div className='row p-0 m-0 my-5'>

        <div className='row p-0 m-0 d-flex col-12 mb-4'>
          <div className='col-4'>
            <TopMainSquareImage src={"/assets/images/mainImages/1.jpg"} />
          </div>
          <div className='col-8'>
            <OwlCarouselSlider />
          </div>
        </div>

        <div className='row p-0 m-0 d-flex col-12'>
          <div className='col-4'>
          <TopMainSquareImage src={"assets/images/mainImages/2.jpg"} />
          </div>
          <div className='col-4'>
          <TopMainSquareImage src={"assets/images/mainImages/3.jpg"} />
          </div>
          <div className='col-4'>
          <TopMainSquareImage src={"assets/images/mainImages/4.jpg"}  />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Main