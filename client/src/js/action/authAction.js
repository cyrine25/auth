import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_AUTH_USER,
  GET_AUTH_USER_FAIL,
  GET_AUTH_USER_SUCCESS,
  LOGOUT,
} from "../const/actionTypes";

import axios from "axios";

export const register = (formData) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const { data } = await axios.post("/api/auth/register", formData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    error.response.data.forEach((err) => alert(err.msg));
    dispatch({
      type: REGISTER_USER_FAIL,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const { data } = await axios.post("/api/auth/login", formData);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    error.response.data.forEach((err) => alert(err.msg));
    dispatch({
      type: LOGIN_USER_FAIL,
    });
  }
};

export const getAuthUser = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  dispatch({
    type: GET_AUTH_USER,
  });
  try {
    const { data } = await axios.get("/api/auth/theUser", config);
    dispatch({
      type: GET_AUTH_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_AUTH_USER_FAIL,
    });
  }
};

export const logout=()=>async dispatch=>{
  localStorage.removeItem('token')
  dispatch({
    type:LOGOUT
  })
}
