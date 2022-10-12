export const LoginStart = (credentials) => ({
  type: 'LOGIN_START',
});

export const LogOut = () => ({
  type: 'LOG_OUT',
});

// export const LoginSuccess = (user) => ({
//   type: "LOGIN_SUCCESS",
//   payload: user,
// });

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});
