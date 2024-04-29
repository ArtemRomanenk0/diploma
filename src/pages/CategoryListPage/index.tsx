import React, { useEffect } from 'react'
import routeMain from './routes'

import { useAppDispatch, useAppSelector } from 'hooks'

import './styles.scss'

import { selectCategory } from 'store/category/selectors'
import { loadCategory } from 'store/category/actions'
import ShowCategoru from 'components/ShowCategory'

const CategoryListPage = () => {
  const dispatch = useAppDispatch()
  const categoryList = useAppSelector(selectCategory)
  useEffect(() => {
    dispatch(loadCategory())
  }, [dispatch])

  return (
    <section>
      <section className='main__page'>
        <ShowCategoru list={categoryList} />
      </section>
    </section>
  )
}

export { routeMain }
export default CategoryListPage
