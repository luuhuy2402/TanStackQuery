import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'  //Để gửi lên cho server bt là ta mong muốn nhận và gửi dưới dạng jsonserver
      }
    })
  }
}

const http = new Http().instance

export default http
