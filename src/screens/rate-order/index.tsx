import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import './index.css';

import orderService from '../../services/order';
import { decodeToken } from '../../utils/token'

interface OrderDetails {
    orderId: string;
    date: string;
    items: Array<{
        id: string;
        name: string;
        quantity: number;
        price: number;
    }>;
    total: number;
}

function RateOrder() {
    useDocumentTitle(
        'Rate Order | locality.',
        'Rate your order and help us improve our services.'
    );

    const { token } = useParams();
    const [orderId, setOrderId] = useState<string | null>(null);
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
    const [rating, setRating] = useState<number>(5); // Default rating value
    const [review, setReview] = useState<string>('');

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        // Decode JWT token to get orderId
        try {
            if (!token) {
                throw new Error('Token not found');
            }

            const decodedToken = decodeToken(token);
            setOrderId(decodedToken.orderId);

            // Fetch order details from API
            fetchOrderDetails(decodedToken.orderId);
        } catch (error) {
            console.error('Invalid token:', error);
            setMessage('Invalid or expired link.');
        }
    }, [token]);

    const fetchOrderDetails = async (orderId: string) => {
        try {
            const response = await orderService.fetchOrder(orderId);
            if (!response.status) {
                throw new Error('Failed to fetch order details');
            }
            const data = await response.data;
            setOrderDetails(data);
        } catch (error) {
            console.error('Error fetching order details:', error);
            setMessage('Unable to load order details.');
        }
    };

    const handleRatingChange = (event: any) => {
        setRating(event.target.value);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            if (!orderId) {
                throw new Error('Order ID not found');
            }

            const response = await orderService.rateOrder(orderId, { rating, review });

            if (response.status) {
                setMessage('Thank you for rating your order! Closing window in 5 seconds');
                setTimeout(() => {
                    window.close();
                }, 5000);
            } else {
                throw new Error('Failed to submit rating');
            }
        } catch (error) {
            console.error('Error submitting rating:', error);
            setMessage('Unable to submit rating at this time.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="screen">
            <div className="container">
                <h2 className="header-text">Rate your order</h2>
                {message && <p className="message">{message}</p>}

                {orderDetails ? (
                    <div className="order-details">
                        <h2>Order #{orderDetails.orderId}</h2>
                        <p><strong>Date:</strong> {new Date(orderDetails.date).toLocaleDateString()}</p>
                        <p><strong>Items:</strong></p>
                        <ul>
                            {orderDetails.items.map((item) => (
                                <li key={item.id}>
                                    {item.name} - {item.quantity} x ₹{item.price}
                                </li>
                            ))}
                        </ul>
                        <p><strong>Total:</strong> ₹{orderDetails.total}</p>

                        <div className="rating-section">
                            <label htmlFor="rating">Rate Your Order:</label>
                            <input
                                type="range"
                                id="rating"
                                name="rating"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={handleRatingChange}
                            />
                            <span>{rating} / 5</span>
                        </div>

                        <button
                            className="rate-order"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Rating'}
                        </button>
                    </div>
                ) : (
                    !message && <p>Loading order details...</p>
                )}
            </div>
        </div>
    );
}

export default RateOrder;