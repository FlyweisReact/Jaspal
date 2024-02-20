/** @format */
import { Store } from "react-notifications-component";
import axios from "axios";
import { Login } from "../store/slices/authSlice";

const BaseUrl = "https://ecommerce-backend-ochre-phi.vercel.app";

export const userLogin = (payload, navigate, loading) => {
  return async (dispatch) => {
    loading(true);
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
        insert: "bottom",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
      navigate("/homepage");
      loading(false);
    } catch (e) {
      loading(false);
      const msg = e.response.data.message;
      Store.addNotification({
        title: "Invalid !",
        message: msg,
        type: "danger",
        insert: "bottom",
        container: "bottom-center",
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

export const userRegistration = async (payload, navigate, loading) => {
  loading(true);
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
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen: true,
      },
    });
    localStorage.setItem("Verify_id", response.data.data._id);
    loading(false);
    const otp = response.data.data.otp
    Store.addNotification({
      title: "Success !",
      message: otp,
      type: "info",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
    //
  } catch (e) {
    const msg = e.response.data.msg;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    loading(false);
  }
};

export const forget_Password = async (setLoading, payload, navigate) => {
  setLoading(true);
  try {
    const response = await axios.post(
      `${BaseUrl}/api/v1/user/forgetPassword`,
      payload
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "success",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    const otp = response.data.data.otp
    Store.addNotification({
      title: "Success !",
      message: otp,
      type: "info",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen: true,
      },
    });
    setLoading(false);
    navigate("/recover-password");
  } catch (e) {
    setLoading(false);
    const msg = e.response.data.msg;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  }
};

export const reset_password = async (setLoading, payload, navigate) => {
  setLoading(true);
  try {
    const response = await axios.post(
      `${BaseUrl}/api/v1/user/changePassword`,
      payload
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "success",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    setLoading(false);
    navigate("/");
  } catch (e) {
    setLoading(false);
    const msg = e.response.data.msg;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  }
};

export const verify_otp = async (id, payload, loading, navigate) => {
  loading(true);
  try {
    const response = await axios.post(
      `${BaseUrl}/api/v1/vendor/${id}`,
      payload
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "Success !",
      message: msg,
      type: "info",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    loading(false);
    navigate("/");
  } catch (e) {
    const msg = e.response.data.msg;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    loading(false);
  }
};
