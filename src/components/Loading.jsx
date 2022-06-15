import React from 'react'
import {BallTriangle, Circles, Hearts, Oval, Rings, TailSpin, ThreeDots} from 'react-loader-spinner';


const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <TailSpin color='#6082B6' height={400} width={50}/>
    </div>
  )
}

export default Loading