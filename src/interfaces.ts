export interface Word {
  id:	string,
  group:	number,
  page:	number,
  word:	string,
  image:	string,
  audio:	string,
  audioMeaning:	string,
  audioExample:	string,
  textMeaning: string,
  textExample:	string,
  transcription:	string,
  wordTranslate:	string,
  textMeaningTranslate:	string,
  textExampleTranslate:	string
}

export interface UserWord {
  difficulty:	string,
  optional:	{}
}

export interface UserWordFull{
  id: string,
  difficulty:	string,
  optional:	{},
  wordId: string
}

export interface Statistic{
  learnedWords:	number,
  optional:	{}
}

export interface Setting {
  wordsPerDay:	number,
  optional:	{}
}

export interface User {
  name:	string,
  email:	string,
  password:	string
}

export interface Auth {
  message:	string,
  token:	string,
  refreshToken:	string,
  userId:	string,
  name:	string
  }

  export interface SignIn {
    email:	string,
    password:	string
  }

export function create(arg0: { email: string; password: string }) {
    throw new Error("Function not implemented.")
}
