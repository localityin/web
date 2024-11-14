import './index.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function UpdateInventory() {
    useDocumentTitle(
        'Inventory | locality.',
        'Update your store inventory and manage your products.'
    );

    return (
        <div className="screen">
            <div className="container">
                <span className="header-text">Update Inventory</span>
                <span className="header-body"></span>
            </div>
        </div>
    );
}

export default UpdateInventory;



