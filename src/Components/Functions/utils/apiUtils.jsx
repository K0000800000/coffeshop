export const submitForm = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return 'Submitted!';
        } else {
            console.error('Error response from API:', response.status);
            return 'Error occurred, try later.';
        }
    } catch (error) {
        console.error('Error during API call:', error);
        return 'Error occurred, try later.';
    }
};