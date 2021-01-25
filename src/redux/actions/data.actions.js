export const ADD_DATA = 'ADD_DATA';

export const addData = (content) => ({
  type: ADD_DATA,
  payload: {
    data: content
  }
});
