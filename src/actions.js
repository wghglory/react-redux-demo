import axios from 'axios';

export const getUsers = () => {
  return { type: 'GET_USERS' };
};

export const getUsersAsync = () => dispatch =>
  axios(`https://jsonplaceholder.typicode.com/users`).then(
    res => dispatch(fillUsers(res.data)),
    err => dispatch(fillUsersFailed(err))
  );

export const fillUsers = payload => {
  return { type: 'FILL_USERS', payload };
  // [{ name: 'aa', email: 'ww@gmail.com' }, { name:'bb', email: 'sfdaf' }]
};

export const fillUsersFailed = error => {
  return { type: 'FILL_USERS_FAILED', error };
};

export const addUser = payload => {
  return { type: 'ADD_USER', payload }; // { name: 'ha', age: 50 }
};

export function updateUser(payload) {
  return { type: 'UPDATE_USER', payload }; // { id, 1, name: 'ha', age: 50 }
}

export function deleteUser(payload) {
  return { type: 'DELETE_USER', payload }; // { id: 1 }
}
