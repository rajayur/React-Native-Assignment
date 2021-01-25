export const LOGIN = 'LOGIN';

export const loginDetail = (content) => ({
  type: LOGIN,
  payload: {
    user: content
  }
});
