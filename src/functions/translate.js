const translates = {
    'auth/wrong-password': 'The password is incorrect or the user does not have a password',
    'EMAIL_EXISTS': 'An account with this e-mail already exists',
    'auth/user-not-found': 'There is no user with this e-mail',
    'INVALID_PASSWORD': 'Invalid password',
    'EMAIL_NOT_FOUND': 'E-mail not found'
};

export const translate = code => translates[code];