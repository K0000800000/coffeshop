import DOMPurify from 'dompurify';

export const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
};

export const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
};

export const validatePhone = (phone) => {
    return phone.length >= 11 && phone.startsWith('+');
};

export const validateFileExtension = (file, allowedExtensions) => {
    if (!file) return false;
    const fileExtension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
};

export const validateName = (value) => {
    return /^[a-zA-Z]{2,32}$/.test(value);
};

export const sanitizePhone = (value) => {
    value = value.replace(/[^+\d]/g, '');
    if (value[0] !== '+') {
        value = '+' + value.replace(/\+/g, '');
    }
    return value.slice(0, 13);
};