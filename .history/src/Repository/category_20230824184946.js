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
  image, 
  ImageArr
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/vendor/Product/view/${payload}`
    );
    setResponse(response.data.data);
    image(response.data.data?.productImage?.[0]);
    ImageArr.push(response.data.data?.productImage);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

export const getProductbyCategory = async (
  setLoading,
  setResponse,
  payload
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/Product/list?limit=4&categoryId=${payload}`
    );
    setResponse(response.data.data.docs);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

export const getProductVarients = async (setResponse, payload) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/listProductVarient?productId=${payload}`
    );
    setResponse(response.data.data);
  } catch {}
};
