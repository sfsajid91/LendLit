/**
 * @description List of routes that are accessible only by non authenticated users
 * @type {string[]}
 * @example ['/login', '/registration', '/verify', '/forgot-password', '/reset-password']
 */
export const authRoute = [
    '/login',
    '/registration',
    '/verify',
    '/forgot-password',
    '/reset-password',
];

/**
 * @description List of routes that are accessible by all users
 * @type {string[]}
 * @example ['/about', '/']
 */
export const publicRoute = ['/about', '/', '/api/test'];

/**
 * @description List of routes that are accessible only by authenticated users
 * @type {string}
 * @example '/api/auth'
 */
export const authApiRoute = '/api/auth';
