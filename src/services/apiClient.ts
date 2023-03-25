import axios from "axios"

const apiClient = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "2c10ceb6a3e5460e99d66087dfb30843",
	},
})

export default apiClient
