import React from 'react'

import { NavLink } from 'react-router-dom'

import { IShowDetail } from 'types/IShowDetail'

import './styles.scss'

import { routeMain as routeNewsDetail } from 'pages/ShowDeteilPage'
import prepareCountry from 'utils/PrepareCountry'
import prepareDate from 'utils/PrepareDate/prepareDate'
import Error from 'assets/img/Error.jpg'

interface IShowItemParams {
  item: IShowDetail
}

const CategoryItem: React.FC<IShowItemParams> = ({ item }) => {
  const showImage = (imgUrl: string | undefined) => {
    return imgUrl ? (
      <img className='category-item__img' src={imgUrl} alt='show_images' />
    ) : (
      <img className='category-item__img' src={Error} alt='show_images' />
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

export default CategoryItem
