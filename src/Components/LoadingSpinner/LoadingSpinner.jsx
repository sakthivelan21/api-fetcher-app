import React from "react";
import './LoadingSpinner.css';

function LoadingSpinner() {
    return (
        <>
        <div className="spinner-container">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        </>
    )
}

export default React.memo(LoadingSpinner);