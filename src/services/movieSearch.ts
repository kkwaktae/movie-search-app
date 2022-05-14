import { axios, AxiosError } from 'hooks/worker';
import { ISearchType, IAPIParams, ISearchResponse, SearchResponse } from 'types/movieSearch.d';

const SEARCH_MOVIE_URL = 'http://www.omdbapi.com';

export const getMovieAPI = async (params: IAPIParams): Promise<ISearchResponse> => {
  try {
    const { data } = await axios.get<ISearchType>(`${SEARCH_MOVIE_URL}`, {
      params,
    });
    return data.Search && data.Search.length > 0
      ? { data }
      : { data: { Search: [], TotalResults: 0, Response: SearchResponse.False } };
  } catch (e) {
    const { message } = e as AxiosError;
    return { Error: message };
  }
};
