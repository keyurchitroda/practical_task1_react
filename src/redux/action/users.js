import { SHOW_ALL_USER_SUCCESS } from "../type";
import axios from "axios";

export const AllUser = () => async (dispatch) => {
  try {
    console.log("data");
    let headers = {
      x_auth_token: localStorage.getItem("token"),
    };

    let res = await axios.get("http://localhost:3333/v1/api/user/show", {
      headers: headers,
    });
    dispatch({
      type: SHOW_ALL_USER_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("err-All User", err);
  }
};
