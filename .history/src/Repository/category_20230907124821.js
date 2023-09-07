/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

const Baseurl = "https://ecommerce-backend-ochre-phi.vercel.app/";

export const getCategorybyGender = async (
  payload,
  setLoading,
  setResponse,
  idSelector
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/allCategory/${payload}`
    );
    setResponse(response.data.data);
    idSelector(response.data.data?.[0]?._id);
    setLoading(false);
  } catch (e) {
    console.log("Get Category by Gender", e);
    setLoading(false);
  }
};

export const getProductbyGender = async (
  setLoading,
  setResponse,
  limit,
  gender
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/Product/list?limit=${limit}&gender=${gender}`
    );
    setResponse(response.data.data.docs);
    setLoading(false);
  } catch (e) {
    console.log("Get Product by Gender", e);
    setLoading(false);
  }
};

export const getsubCategorybyGender = async (
  setLoading,
  setResponse,
  payload
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/allSubcategoryById/${payload}`
    );
    setResponse(response.data.data);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

export const indivisualProduct = async (
  setLoading,
  setResponse,
  payload,
  productImage,
  image
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/vendor/Product/view/${payload}`
    );
    setResponse(response.data.data);
    setResponse(response.data.data);
    productImage(response.data.data?.productImage);
    image(response.data.data?.productImage?.[0]);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

export const getProductbyCategory = async (
  setLoading,
  setResponse,
  payload,
  limit
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/Product/list?limit=${limit}&categoryId=${payload}`
    );
    setResponse(response.data.data.docs);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

export const getProductVarients = async (
  setResponse,
  payload,
  productImage,
  image,
  color,
  sizeArr,
  size
) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/listProductVarient?productId=${payload}`
    );
    setResponse(response.data.data);
    productImage(response.data.data?.[0]?.productImages);
    image(response.data.data?.[0]?.productImages?.[0]?.image);
    color(response.data.data?.[0]?.color?.color);
    sizeArr(response.data.data?.[0]?.colorsUnits);
    size(response.data.data?.[0]?.colorsUnits?.[0]?.unitInwords);
  } catch {}
};

export const addToCart = async (payload) => {
  try {
    const res = await axios.post(`${Baseurl}api/v1/cart/addtocart`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const msg = res.data.message;
    Store.addNotification({
      title: "Success !",
      message: msg,
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
  } catch (e) {
    console.log(e);
    const msg = e?.response?.data?.message;
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

export const getCart = async (loading, details) => {
  loading(true);
  try {
    const response = await axios.get(`${Baseurl}api/v1/cart/getCart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const data = response.data.data;
    details(data);
    loading(false);
  } catch {
    loading(false);
  }
};

export const deleteCartItem = async (id) => {
  try {
    const response = await axios.put(
      `${Baseurl}api/v1/cart/deletecartItem/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "Success !",
      message: msg,
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
  } catch (e) {
    const msg = e?.response?.data?.message;
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

export const getProductReview = async (payload, data, loading) => {
  loading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/product/getProductReviews/${payload}`
    );
    data(response.data.reviews?.reviews);
    loading(false);
  } catch {
    loading(false);
  }
};

export const createShippingAddress = async (payload, navigate) => {
  try {
    const response = await axios.put(
      `${Baseurl}api/v1/cart/addAdressToCart`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "Success !",
      message: msg,
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
    navigate("/place-order");
  } catch (e) {
    const msg = e?.response?.data?.message;
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

export const Checkout = async (navigate) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/cart/checkout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = res.data.message;
    const OrderId = res.data.data.orderId;
    localStorage.setItem("OrderId", OrderId);
    Store.addNotification({
      title: "Success !",
      message: msg,
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
    navigate("/thank-you");
  } catch (e) {
    const msg = e?.response?.data?.message;
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

export const PlaceOrder = async (navigate) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/cart/successOrder/${localStorage.getItem("OrderId")}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    navigate("/thank-you");
  } catch {}
};

export const myOrder = async (data, loading) => {
  loading(true);
  try {
    const response = await axios.get(`${Baseurl}api/v1/order/Orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const res = response.data.data;
    data(res);
    loading(false);
  } catch {
    loading(false);
  }
};

export const updateCartQuantity = async (payload) => {
  try {
    const response = await axios.put(
      `${Baseurl}api/v1/user/updateQuantity`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "Success !",
      message: msg,
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
  } catch (e) {
    const msg = e?.response?.data?.message;
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

export const subCategory_Product = async (
  subCategoryId,
  limit,
  setResponse,
  setLoading
) => {
  setLoading(true);
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/user/Product/list?subcategoryId=${subCategoryId}&page=1&limit=${limit}`
    );
    const data = res.data.data.docs;
    setResponse(data);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

export const get_Banner = async (loading, type, response) => {
  loading(true);
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/Banner/getBanner?type=${type}`
    );
    const data = res.data.data;
    response(data);
    loading(false);
  } catch {
    loading(false);
  }
};

export const filter_product = async (loading, query, response, limit) => {
  loading(true);
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/user/Product/list?limit=${limit}&search=${query}`
    );
    const data = res.data.data.docs;
    response(data);
    loading(false);
  } catch {
    loading(false);
  }
};

export const get_Notification = async (setLoading, setResponse) => {
  setLoading(true);
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/notification/allNotification`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const data = res.data.data;
    setResponse(data);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};


export const cancel_order = async () => {
  try{

  }catch (e) {
    const msg = e?.response?.data?.message;
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
}