import {LOGIN} from '../../actions';

const initialState = {
  username: 'hruday@gmail.com',
  password: 'hruday123',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        ...action.payload.user,
      };
    }
    default:
      return state;
  }
};

export default user;
