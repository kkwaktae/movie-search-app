import { atom } from 'recoil';

import { ISearchState } from 'types/movieSearch';

export const searchState = atom<ISearchState>({
  key: 'searchState',
  default: {
    s: '',
    page: 1,
    dataList: [],
  },
});

export const componentState = atom<boolean>({
  key: 'componentState',
  default: true,
});

export const searchResult = atom<boolean>({
  key: 'searchResult',
  default: false,
});

export const displayModal = atom<boolean>({
  key: 'displayModal',
  default: false,
});

export const favoriteMovie = atom<object>({
  key: 'favoriteMovie',
  default: {},
});
