import axios from "axios";
import API_URL_CONSTANTS from "../constants/apiEndpoints";
import Axiosinstance from "./../config";

const common = {
  userSignup: (data) => Axiosinstance.post(API_URL_CONSTANTS.LOGIN_API_URL, data),
  userAuth: (data) => Axiosinstance.post(API_URL_CONSTANTS.SIGN_IN_API_URL, data),
  UserotpValidation: (data) => Axiosinstance.post(API_URL_CONSTANTS.SIGN_OTP_API_URL, data),
  userFormCreate: (data) => Axiosinstance.post(API_URL_CONSTANTS.FORM_API_URL, data),
  formOtpRequest: (data) => Axiosinstance.post(API_URL_CONSTANTS.FORM_OTP_API_URL, data),
  formOtpValidation: (data) =>
    Axiosinstance.post(API_URL_CONSTANTS.FORM_OTP_VALIDATION_API_URL, data),
  getProductsList: () => axios.get(`${API_URL_CONSTANTS.GET_PRODUCTS_API_URL}`),
  getOrderList: (currenttab) =>
    axios.get(`${API_URL_CONSTANTS.GET_OREDER_REQUESTS_API_URL}/${currenttab}`),
  getProducts: () => axios.get(`${API_URL_CONSTANTS.GET_PRODUCTS_INFO}`),
};
export { common };
