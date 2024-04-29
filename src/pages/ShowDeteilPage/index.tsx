import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import routeMain from './routes'

import './styles.scss'

import { useAppDispatch, useAppSelector } from 'hooks'

import { loadDetail } from 'store/detail/actions'
import { selectDetail } from 'store/detail/selectors'
import ShowDetail from 'components/ShowDetail'
import Preloader from 'utils/Preloader'

const ShowDetailPage = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()
  const showById = useAppSelector(selectDetail)

  useEffect(() => {
    dispatch(loadDetail('/' + id))
  }, [id, dispatch])

  return (
    <section className='container'>
      {showById ? <ShowDetail show={showById} /> : <Preloader />}
    </section>
  )
}

export { routeMain }
export default ShowDetailPage
