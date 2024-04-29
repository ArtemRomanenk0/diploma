import axios, { AxiosResponse } from 'axios'

const getSearch = (value: string | undefined): Promise<AxiosResponse> => {
  return axios.get('https://api.tvmaze.com/shows' + value)
}

export default getSearch
