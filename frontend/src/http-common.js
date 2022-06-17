import axios from "axios"; 

export default axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
      "Content-Type": "application/json"
  },
  validateStatus: (status) => {
  console.log(status)
    return true; 
  }
})
; 

