import { Word, User, SignIn, Auth, UserWord, UserWordFull, Setting, Statistic } from './interfaces'

const base = 'https://rs-lang-team15.herokuapp.com';


// Words
export const getWords = async (group: number, page: number): Promise<Word[]> => {
  return (await fetch(`${base}/words?group=${group}&page=${page}`)).json();
};

export const getWord = async (id: string | undefined): Promise<Word> => (await fetch(`${base}/words/${id}`)).json();

// Users and Sign In
export const createUser = async (body: User): Promise<User> => 
(
  await fetch(`${base}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const getUser = async (id: string | undefined, token: string): Promise<User> => 
(
  await fetch(`${base}/users/${id}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }}).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const updateUser = async (id: string, body: User, token: string ): Promise<User> => 
(
  await fetch(`${base}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const deleteUser = async (id: string, token: string ): Promise<User> =>
  (await fetch(`${base}/users/${id}`, { 
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }}).then(data => {
    if (data.status !== 204) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const loginUser = async (body: SignIn): Promise<Auth> => 
(
  await fetch(`${base}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const getNewToken = async (id: string, refreshToken: string): Promise<Auth> => (
  await fetch(`${base}/users/${id}/tokens`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${refreshToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
)

// Users/Words
export const createUserWord = async (id: string, wordId: string, word: UserWord, token: string): Promise<UserWordFull> => 
(
  await fetch(`${base}/users/${id}/words/${wordId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const getUserWord = async( id: string, wordId: string, token: string): Promise<UserWordFull> => 
(
  await fetch(`${base}/users/${id}/words/${wordId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const getUserWords = async(id: string, token: string): Promise<UserWordFull[]> => (
  await fetch(`${base}/users/${id}/words`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const updateUserWord = async (id: string, wordId: string, word: UserWord, token: string): Promise<UserWordFull> => 
(
  await fetch(`${base}/users/${id}/words/${wordId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);

export const deleteUserWord = async (id: string, wordId: string, word: UserWord, token: string): Promise<UserWordFull> => 
(
  await fetch(`${base}/users/${id}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }}).then(data => {
    if (data.status !== 204) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  }) 
);

// Users/AggregatedWords

export const getAggregatedWords = async (id: string, group: number, page: number, token: string) => 
(
  await fetch(`${base}/users/${id}/aggregatedWords?group=${group}&page=${page}&wordsPerPage=20`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
)

// Users/Statistic

export const getUserStatistics = async (id: string, token: string): Promise<Statistic> => 
(
  await fetch(`${base}/users/${id}/statistics`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
)

export const setUserStatistics = async (id: string, token: string, body: any): Promise<Statistic> => {
  const mapBody = JSON.stringify({
    optional:
      Object.entries(body).reduce((acc:any, [key, value]) => {
        acc[key] = Array.isArray(value) ? JSON.stringify(value).replace(/"/g, '\"') : value;
        return acc
      }, {})
  })
  const res = await fetch(`${base}/users/${id}/statistics`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: mapBody,
  });
  if (res.status !== 200) {
    throw new Error(`${res.status}`);
  }
  return await res.json();
}
// Users/Setting

export const getUserSettings = async (id: string, token: string): Promise<Setting> => 
(
  await fetch(`${base}/users/${id}/settings`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
)

export const updateUserSettings = async (id: string, optional: Object, token: string): Promise<Setting> => 
(
  await fetch(`${base}/users/${id}/settings`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(optional)
  }).then(data => {
    if (data.status !== 200) {
      throw new Error(`${data.status}`);
    }
    return data.json();
  })
);