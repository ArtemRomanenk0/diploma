import React, { useEffect } from 'react'
import routeMain from './routes'

import { loadShow } from 'store/show/actions'
import { selectShow } from 'store/show/selectors'

import { useAppDispatch, useAppSelector } from 'hooks'

import ShowMain from 'components/ShowMain'

import './styles.scss'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const showGirls = useAppSelector(selectShow)
  useEffect(() => {
    dispatch(loadShow())
  }, [dispatch])

  return (
    <section>
      <div className='main-title'>Best Films</div>
      <ShowMain list={showGirls.slice(0, 8)} />
    </section>
  )
}

export { routeMain }
export default MainPage
