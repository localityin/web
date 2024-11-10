import axios from "axios";
import config from "../config";
import { getAuthToken } from "../utils/token";

export const instance = axios.create({
	baseURL: config.api.baseUrl as string,
	headers: {
		"Content-Type": "application/json",
	},
});

instance.interceptors.request.use(
	(config) => {
		const token = getAuthToken();
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
