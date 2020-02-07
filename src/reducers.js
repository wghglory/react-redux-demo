export const initialState = [
  { id: 1, name: 'derek', email: 'derek@gmail.com' },
  { id: 2, name: 'iris', email: 'iris@gmail.com' },
  { id: 3, name: 'bob', email: 'bob@gmail.com' }
];

// export default function reducer(state = initialState, action) {
export default function reducer(state, action) {
  switch (action.type) {
    case 'FILL_USERS':
      return action.payload;
    case 'GET_USERS':
      return state;
    case 'ADD_USER':
      // const len = state.length;
      // const id = state[len - 1].id + 1; // last item id + 1 as new item id
      // return [...state, { id, ...action.payload }];

      return [...state, action.payload]; // real project
    case 'UPDATE_USER':
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        } else {
          return item;
        }
      });
    case 'DELETE_USER':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}
