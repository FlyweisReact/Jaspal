/** @format */

import axios from "axios";

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
  try{

  }catch{

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