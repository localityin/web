import jwt from "jsonwebtoken";
import config from "../config";

export const decodeToken = (token: string): any => {
	try {
		const secretKey = config.token.secretKey as string;
		const decodedToken = jwt.verify(token, secretKey);
		return decodedToken;
	} catch (error) {
		console.error("Invalid token:", error);
		throw new Error("Invalid or expired token.");
	}
};

export const getAuthToken = (): string | null => {
	return localStorage.getItem("authToken");
};

export const setAuthToken = (token: string): void => {
	localStorage.setItem("authToken", token);
	return;
};
