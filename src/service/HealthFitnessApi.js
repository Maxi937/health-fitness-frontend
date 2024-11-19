import axios from "axios";
import { registerAxiosResponseHandler } from "../utils/service-utils.js";
import { registerTokenInterceptor } from "@/utils/service-utils.js";

registerAxiosResponseHandler(axios)
registerTokenInterceptor(axios)

export const fitnessService = {
  async authenticate(email, password) {
    return await axios.post(
      `/api/authenticate`,
      { email: email, password: password },
    );
  },

  async signup(name, email, password) {
    return await axios.post(
      `/api/signup`,
      { name: name, email: email, password: password },
    );
  },

  async addWeight(weight) {
    return await axios.post(
      `/api/weight`,
      { weight: weight }
    );
  },

  async getWeights() {
    return await axios.get(
      `/api/weight`,
    );
  },

  async getCardio() {
    return await axios.get(
      `/api/cardio`,
    );
  },

  async addCardio(distance, time) {
    return await axios.post(
      `/api/cardio`,
      { distance: distance, time: time }
    );
  },
}
