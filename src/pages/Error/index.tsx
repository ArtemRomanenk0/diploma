import React from 'react'
import routeMain from './routes'
import ErrorImg from 'assets/img/ErrorImg.jpg'

import './styles.scss'

const Error = () => {
  return (
    <div className='404'>
      <img className='image' src={ErrorImg} alt={ErrorImg} />
    </div>
  )
}
export { routeMain }
export default Error
