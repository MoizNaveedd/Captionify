import axios from "axios"
const baseURL="http://localhost:3000/generate-text"

export async function generateCaption(payload) {
    try {
      const result = await axios.post(baseURL, payload);
      console.log("success", result.data.generatedText);
      return result.data.generatedText;
    } catch (err) {
      console.error(err);
      return "Error"
      // You might want to handle the error or throw it here depending on your use case.
      throw err;
    }
  }
  
