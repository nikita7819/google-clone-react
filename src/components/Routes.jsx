import React from 'react'
import {Routes as Router, Route, Navigate} from 'react-router-dom'
import Results from './Results'

const Routes = () => {
  return (
    <div className='p-4'>
      <Router>
        <Route exact path='/' element={<Navigate to='/search' />} />
        <Route exact path={'/search'} element={<Results/>} />
        <Route exact path={'/image'} element={<Results/>} />
        <Route exact path={'/news'} element={<Results/>} />
        <Route exact path={'/video'} element={<Results/>} />
      </Router>
    </div>
  )
}

export default Routes