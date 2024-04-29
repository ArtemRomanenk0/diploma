import axios, { AxiosResponse } from 'axios'

const getShow = (value: string | undefined): Promise<AxiosResponse> => {
  return axios.get('https://api.tvmaze.com/search/shows?q=' + value)
}

export default getShow
