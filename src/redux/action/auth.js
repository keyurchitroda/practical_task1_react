import { LOGIN_SUCCESS } from "../type";
import axios from "axios";

export const Auth = (data, navigate) => async (dispatch) => {
  try {
    console.log("data", data);

    let res = await axios.post("http://localhost:3333/v1/api/user/login", data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    if (res.data.data.role == "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  } catch (err) {
    console.log("err-Login", err);
  }
};
