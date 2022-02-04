
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export function fetchReviews() {
    return axios.get(`${API_URL}/`)
}

export function fetchReview(rid) {
    return axios.get(`${API_URL}/review/${rid}`)
}

export function postReview(review, jwt) {
    return axios.post(`${API_URL}/add/`, review, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function updateReview(review, jwt) {
    return axios.put(`${API_URL}/update/${review.rid}/`,review, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function deleteReview(rid, jwt) {
    return axios.delete(`${API_URL}/delete/${rid}/`, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function seeDashboard(jwt) {
    return axios.get(`${API_URL}/dashboard/`, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function register(userData) {
    return axios.post(`${API_URL}/sign-up/`, userData)
}

export function authenticate(userData) {
    return axios.post(`${API_URL}/login/`, userData)
}