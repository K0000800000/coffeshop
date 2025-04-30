import { useState } from 'react';

export const useMessageHandler = (timeout = 7000) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const setSuccess = (message) => {
        setSuccessMessage(message);
        setErrorMessage('');
        clearMessagesAfterTimeout();
    };

    const setError = (message) => {
        setErrorMessage(message);
        setSuccessMessage('');
        clearMessagesAfterTimeout();
    };

    const clearMessagesAfterTimeout = () => {
        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, timeout);
    };

    return { successMessage, errorMessage, setSuccess, setError };
};