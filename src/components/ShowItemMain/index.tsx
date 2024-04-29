import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeMain as routeNewsDetail } from 'pages/ShowDeteilPage'

import './styles.scss'
import prepareCountry from 'utils/PrepareCountry'
import prepareDate from 'utils/PrepareDate/prepareDate'
import { IShowDetail } from 'types/IShowDetail'
import Racoon from 'assets/gif/Racoon.gif'

interface IShowItemParams {
  item: IShowDetail
}

const ShowItemMain: React.FC<IShowItemParams> = ({ item }) => {
  const showImage = (imgUrl: string | undefined) => {
    return imgUrl ? (
      <img className='show-item__img' src={imgUrl} alt='show_images' />
    ) : (
      <img className='show-item__img' src={Racoon} alt='show_images' />
    )
  }

  return (
    <NavLink className='col-3 show-item' to={routeNewsDetail(item.id?.toString())}>
      <div className='show-item__wrapp'>
        {showImage(item.image?.medium)}
        <div className='show-item__info'>
          <div className='show-item__info-title'>{item.name}</div>
          <div className='show-item__info-subtitle'>
            {prepareDate(item.premiered)} ({prepareCountry(item.network?.country.name)})<br />
            {item.genres?.join(', ')}
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default ShowItemMain
