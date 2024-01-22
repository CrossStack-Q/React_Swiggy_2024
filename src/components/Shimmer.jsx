import React from 'react'

function Shimmer() {
  const numq = [1,2,3,4,5,6];
  return (
    <div className='ShimmerBody'>
      {
        numq.map(item=>(
          <div className='ShimmerContainer'>
        <div className='ShimmerImage'>

        </div>
        <div className='ShimmerText'>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
        ))
      }
      
      
    </div>
  )
}

export default Shimmer