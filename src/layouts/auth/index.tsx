import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <div>
            {/* Store-specific header, sidebar, or other components */}
            <h1>Auth Header</h1>
            <Outlet /> {/* Renders child routes */}
        </div>
    );
}

export default AuthLayout;