import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./mytodoTypes";
import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  //returns a function non-pure
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        //   console.log('>>>>>>>>>>>',JSON.stringify(users,null,2))
        dispatch(fetchUsersSuccess(users));
        console.log("2Done FETCH_USERS_FAILURE");
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log("what went wrong FETCH_USERS_FAILURE",errorMsg);
      
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
