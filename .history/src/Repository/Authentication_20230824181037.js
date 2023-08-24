/** @format */
import { Store } from "react-notifications-component";
import axios from "axios";
import { Login } from "../store/slices/authSlice";

const BaseUrl = "https://ecommerce-backend-ochre-phi.vercel.app";

export const userLogin = (payload, navigate ,loading) => {
  return async (dispatch) => {
    loading(true)
    try {
      const response = await axios.post(
        `${BaseUrl}/api/v1/vendor/login/withPassword`,
        payload
      );
      const token = response.data.data.accessToken;
      localStorage.setItem("Token", token);
      dispatch(Login());
      Store.addNotification({
        title: "Success !",
        message: "Welcome Back",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
      navigate("/homepage");
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "Invalid !",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
    }
  };
};

export const userRegistration = async(payload, navigate) => {
  try {
    const response = await axios.post(
      `${BaseUrl}/api/v1/vendor/registration`,
      payload
    );
    const msg = response.data.message;

    Store.addNotification({
      title: "Success !",
      message: msg,
      type: "info",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    navigate("/");
  } catch (e) {
    const msg = e.response.data.msg;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  }
};
