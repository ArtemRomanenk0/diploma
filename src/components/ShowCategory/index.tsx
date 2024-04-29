import React from 'react'

import './styles.scss'

import { IShowDetail } from 'types/IShowDetail'

import { Dropdown } from 'react-bootstrap'
import CategoryItem from 'components/CategoryItem/Index'
import { useLocalStorage } from 'usehooks-ts'

interface IShowListParamsShow {
  list: IShowDetail[]
}

const ShowCategory: React.FC<IShowListParamsShow> = ({ list }) => {
  const [genres, setGenres] = useLocalStorage('genres', 'Anime')
  let emptyStringArray: string[] = []
  list
    .map((show: IShowDetail) => show.genres)
    .forEach((element) =>
      element?.forEach((genre) => {
        if (!emptyStringArray.includes(genre)) {
          emptyStringArray.push(genre)
        }
      })
    )

  const showFilter = list
    .filter(
      (show: IShowDetail) =>
        show.genres[0] === genres || show.genres[1] === genres || show.genres[2] === genres
    )
    .map((show: IShowDetail) => <CategoryItem key={show.id} item={show} />)

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='category-wrapp'>
            <div className='category-title'>Выбранная категория:&nbsp;&nbsp;</div>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-basic' className='btn-castom'>
                {genres}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {emptyStringArray.sort().map((item, idx) => (
                  <Dropdown.Item key={idx} onClick={() => setGenres(item)}>
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {showFilter}
        </div>
      </div>
    </section>
  )
}

export default ShowCategory
