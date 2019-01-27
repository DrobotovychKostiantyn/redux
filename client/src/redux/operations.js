import axios from "axios";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
  refreshUserStart,
  refreshUserSuccess
} from "./actions";
import { getToken } from "./selectors";

axios.defaults.baseURL = "http://localhost:4040";

const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  axios
    .post("/auth/signup", credentials)
    .then(response => {
      setAuthHeader(response.data.user.token);

      dispatch(signUpSuccess(response.data));
    })
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());
  axios
    .post("/auth/signin", credentials)
    .then(response => {
      setAuthHeader(response.data.user.token);

      dispatch(signInSuccess(response.data));
    })
    .catch(error => dispatch(signInError(error)));
};

export const signOut = () => (dispatch, getState) => {
  // dispatch(signOutRequest());
  // axios.post("/auth/signout").then(() => dispatch(signOutSuccess()));

  dispatch(signOutRequest());

  axios
    .post("/auth/signout")
    .then(() => {
      clearAuthHeader();

      dispatch(signOutSuccess());
    })
    .catch(error => dispatch(signOutError(error)));
};

export const refreshCurrentUser = () => (dispatch, getState) => {
  dispatch(refreshUserStart());

  const token = getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  axios
    .get("/auth/current")
    .then(({ data }) => dispatch(refreshUserSuccess(data.user)));
  // catch что бы удалить токен в стореб если он не валидный clearAuthHeader();
};
