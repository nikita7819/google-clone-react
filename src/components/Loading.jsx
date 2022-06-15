import React from 'react'
import {TailSpin} from 'react-loader-spinner';


const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <TailSpin color='#6082B6' height={400} width={50}/>
    </div>
  )
}

export default Loading