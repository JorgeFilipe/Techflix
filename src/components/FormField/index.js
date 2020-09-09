import React from "react";
import PropTypes from "prop-types";

function FormField({ label,
    type,
    name,
    value,
    onChange }) {
    const fieldId = `id_${name}`;
    console.log(type);
    return (
        <div>
            <label
                htmlFor={fieldId}
            >
               {label}: 
                <input
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

FormField.defaulProps = {
    type: 'text',
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    //name: PropTypes.string.isRequired,
    //value: PropTypes.string.isRequired,
    //onChange: PropTypes.string.isRequired
}

export default FormField;