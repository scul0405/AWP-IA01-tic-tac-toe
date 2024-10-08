import React from 'react'

const ToggleSwitch = ({ label, isMoveDescending, setIsMoveDescending }) => {
    return (
        <div className="container">
            {label}{" "}
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    defaultValue={true}
                    name={label}
                    id={label}
                    onClick={() => {
                        setIsMoveDescending(!isMoveDescending)
                    }}
                />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch