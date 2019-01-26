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
  refreshUserStart,
  refreshUserSuccess
} from "./actions";
import * as selectors from "./selectors";

axios.defaults.baseURL = "http://localhost:4040";
