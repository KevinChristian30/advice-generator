import axios from "axios";

class SlipService {
  static async getRandomSlip() {
    return await axios.get(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
  }
}

export default SlipService;