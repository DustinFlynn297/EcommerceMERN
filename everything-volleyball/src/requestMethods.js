import axios from 'axios'

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTlmOTAwYjE5YTQ0Nzc3NGJmOGU3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODU2MzY4OSwiZXhwIjoxNjM5MTY4NDg5fQ.raoOB6GtWgpUkaP_iYWBay4DKTqvnhG78mHNpSJB-BA"

export const publicRequest = axios.create({
    baseURL : BASE_URL
});
export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});