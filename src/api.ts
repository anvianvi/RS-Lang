import { Word } from './interfaces'

const base = 'https://rs-lang-team15.herokuapp.com/';

export const getWords = async (group: number, page: number): Promise<[Word]> => {
  return (await fetch(`${base}words?group=${group}&page=${page}`)).json();
};

export const getWord = async (id: number | undefined): Promise<Word> => (await fetch(`${base}words/${id}`)).json();