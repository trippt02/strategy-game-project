import React from 'react';

class UI extends React.Component {
    render() {
        return (
            <div className="ui-container">
                <div className="inventory">
                    <h2>Inventory</h2>
                    {/* Inventory items will be displayed here */}
                </div>
                <div className="resource-display">
                    <h2>Resources</h2>
                    {/* Resource counts will be displayed here */}
                </div>
                <div className="building-selection">
                    <h2>Buildings</h2>
                    {/* Building selection options will be displayed here */}
                </div>
            </div>
        );
    }
}

export default UI;