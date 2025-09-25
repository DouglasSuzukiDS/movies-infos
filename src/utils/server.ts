import axios from "axios"

const baseURL = process.env.EXPO_PUBLIC_SERVER_URL

export const server = axios.create({
   baseURL,
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
   }
})