import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "36f12fda91d54d8dadf509f8971363c9",
  },
});
