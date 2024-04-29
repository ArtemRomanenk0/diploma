import React from 'react'

import { IShowDetail } from 'types/IShowDetail'

import prepareDate from 'utils/PrepareDate/prepareDate'
import prepareCountry from 'utils/PrepareCountry'
import prepareRating from 'utils/PrepareRating'
import prepareText from 'utils/PrepareText'
import './styles.scss'
import ErrorImg from 'assets/img/ErrorImg.jpg'

interface IShowListParams {
  show: IShowDetail
}
const ShowDetail: React.FC<IShowListParams> = ({ show }) => {
  const showImage = (imgUrl: string | undefined) => {
    return imgUrl ? (
      <img className='detail-img' src={imgUrl} alt='show_images' />
    ) : (
      <img className='detail-img' src={ErrorImg} alt='show_images' />
    )
  }
  return (
    <div className='container'>
      <div className='name'>
        <span>{show.name}</span>
      </div>
      <div className='row row-cols-3'>
        <div className='card'>{showImage(show.image?.original)}</div>

        <div className=' show-detail__info'>
          <div className='card-intro'>
            <p className='p'>Год выхода: </p>
            <p className='p'>Рейтинг: </p>
            <p className='p'>Страна: </p>
            <p className='p'>Жанр: </p>
            <p className='p'>Описание: </p>
          </div>
        </div>
        <div className='col'>
          <p> {prepareDate(show.premiered)} </p>
          <p> {prepareRating(show.rating?.average)}/10 </p>
          <p> {prepareCountry(show.network?.country.name)}</p>
          <p> {show.genres ? <p>{show.genres?.join(', ')}</p> : <p>n\a</p>}</p>
          <p>{prepareText(show.summary)}</p>
        </div>
      </div>
    </div>
  )
}
export default ShowDetail
