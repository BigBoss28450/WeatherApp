import { create } from "apisauce";
import constants from "../config/constants";

const apiBaseUrl = create({
  baseURL: constants.API_URL,
  headers: { appid: constants.API_KEY },
});

export default apiBaseUrl;
