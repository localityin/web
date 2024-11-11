import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAuthToken, setAuthToken } from '../../utils/token';

import './index.css';

function Loading() {
    const navigate = useNavigate();
    const { token } = useParams();

    // get redirect path from params '?redirect=<route>'
    const searchParams = new URLSearchParams(window.location.search);
    const redirectPath = searchParams.get('redirect');

    useEffect(() => {
        // Check if token is already present in localStorage
        const authToken = getAuthToken();
        if (!authToken && token) {
            // Set token in localStorage
            setAuthToken(token);
        }

        navigate(redirectPath ? redirectPath : '/');
    }, [token, navigate, redirectPath]);

    return (
        <div className="screen">
            <div className="container">
                <div className="loading-spinner">Loading</div>
            </div>
        </div>
    );
}

export default Loading;