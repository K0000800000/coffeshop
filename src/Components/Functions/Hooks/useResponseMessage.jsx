import { useState } from 'react';

export const useResponseMessage = () => {
    const [responseMessage, setResponseMessage] = useState('');

    const handleResponseMessage = (isSuccess, successText = 'Submitted!', errorText = 'Error occurred, try later.') => {
        setResponseMessage(isSuccess ? successText : errorText);

        setTimeout(() => {
            setResponseMessage('');
        }, 7000);
    };

    return { responseMessage, handleResponseMessage };
};