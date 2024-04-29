import React, { useEffect, useState } from 'react'

import routeMain from './routes'

import { useSelector } from 'react-redux'
import { loadShowSearch } from 'store/searchShow/actions'
import { selectShowSearch } from 'store/searchShow/selectors'

import ShowMain from 'components/ShowMain'

import { useAppDispatch } from 'hooks'
import { useDebounce } from 'hooks/useDebounce'

const SearchShowNamePage = () => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const dispatch = useAppDispatch()
  const showNew = useSelector(selectShowSearch)

  useEffect(() => {
    dispatch(loadShowSearch(debouncedSearch))
  }, [debouncedSearch])

  const getClear = () => {
    setSearch('')
  }

  return (
    <section className='main__page'>
      <div className='search-title'>Поиск по имени шоу</div>
      <div className='row'>
        <input
          className='show-input'
          placeholder='введите название...'
          type='text'
          name='newShow'
          id='newShow'
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
          value={search}
        />

        <div className='btn'>
          <button onClick={() => getClear()} className='btn btn-success'>
            Очистить поиск
          </button>
        </div>
      </div>
      <div className='out-wrapp'>
        {showNew.length > 0 ? (
          <ShowMain list={showNew} />
        ) : (
          <p className='сlear'>
            <span></span>&nbsp;&nbsp;&nbsp;Результатов пока нет&nbsp;&nbsp;&nbsp;<span></span>
          </p>
        )}
      </div>
    </section>
  )
}

export { routeMain }
export default SearchShowNamePage
