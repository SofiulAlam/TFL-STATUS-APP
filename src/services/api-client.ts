import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.tfl.gov.uk/Line/Mode/Tube",
  headers: {
    "api-key": "6f5694416d919c6bf68102b61d63e8ef",
  },
});

export { CanceledError };
