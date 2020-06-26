import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Input = React.memo((props) => {
    const {
        defaultValue,
        errorMessage,
        isSubmitted,
        label,
        max,
        min,
        name,
        onChange,
        placeholder,
        required,
        successMessage,
        type
    } = props;

    const [isDirty, setIsDirty] = useState(false);
    const [value, setValue] = useState(defaultValue);
    const onInputChange = (e) => {
        let targetValue = e.target.value;

        // perform validations
        if (type === 'number') {
            targetValue = targetValue.replace(/\D/, '');
            if (isNaN(targetValue)) {
                return;
            }
        }

        if (max) {
            targetValue = targetValue.substr(0, max);
        }

        if (!isDirty) {
            setIsDirty(true);
        }

        // perform updations
        setValue(targetValue);
        onChange(name, targetValue);
    };

    const onPaste = (e) => {
        e.preventDefault();
        onInputChange({
            target: {
                value: e.clipboardData.getData('text')
            }
        });
    };

    return (
        <Form.Group>
            {label && (
                <Form.Label>{label}</Form.Label>
            )}
            <Form.Control
                isInvalid={(isSubmitted || isDirty) && (value.length < min)}
                isValid={value.length >= min}
                name={name}
                onChange={onInputChange}
                onPaste={onPaste}
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}
            />
            {isSubmitted && successMessage && (
                <Form.Control.Feedback>
                    {successMessage}
                </Form.Control.Feedback>
            )}
            {isSubmitted && errorMessage && (
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>
            )}
        </Form.Group>);
});

Input.defaultProps = {
    defaultValue: '',
    errorMessage: undefined,
    isSubmitted: false,
    label: undefined,
    max: undefined,
    min: 1,
    name: 'general-input',
    placeholder: '',
    required: false,
    successMessage: undefined,
    type: 'text'
};

Input.propTypes = {
    defaultValue: PropTypes.string,
    errorMessage: PropTypes.string,
    isSubmitted: PropTypes.bool,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    successMessage: PropTypes.string,
    type: PropTypes.oneOf(['email', 'number', 'password', 'text'])
};

export default Input;
