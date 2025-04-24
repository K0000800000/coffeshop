import DOMPurify from 'dompurify';

/**
 * @param {string} input - The input string to sanitize.
 * @returns {string} - The sanitized string.
 */
export const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
};

/**
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
};

/**
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validatePhone = (phone) => {
    return phone.length >= 11 && phone.startsWith('+');
};

/**
 * @param {File} file - The file to validate.
 * @param {Array<string>} allowedExtensions - List of allowed file extensions.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validateFileExtension = (file, allowedExtensions) => {
    if (!file) return false;
    const fileExtension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
};