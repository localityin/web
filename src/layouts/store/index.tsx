import { Outlet } from 'react-router-dom';

function StoreLayout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default StoreLayout;