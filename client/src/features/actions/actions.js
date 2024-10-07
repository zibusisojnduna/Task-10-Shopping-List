export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});

export const login = (username, password) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          dispatch(loginSuccess(user));
        } else {
          dispatch(loginFail());
        }
      });
  };
};

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const register = (username, password) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Registration failed');
      })
      .then((data) => {
        dispatch(registerSuccess(data));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};
