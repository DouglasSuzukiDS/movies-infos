import axios from "axios"

export const server = axios.create({
   baseURL: process.env.EXPO_PUBLIC_SERVER_URL || 'http://localhost:3001',
})