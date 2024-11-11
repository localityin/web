import { instance } from "../base";

const orderService = {
	fetchOrder: async (orderId: string) => {
		return instance.get(`/order/${orderId}`);
	},
	rateOrder: async (
		orderId: string,
		body: { rating: number; review: string }
	) => {
		return instance.post(`/order/${orderId}/rate`, JSON.stringify(body));
	},
};

export default orderService;
