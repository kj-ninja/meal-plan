const translates = {
    'auth/wrong-password': 'Hasło jest nieprawidłowe lub użytkownik nie ma hasła',
    'EMAIL_EXISTS': 'Istnieje już konto o takim e-mailu',
    'auth/user-not-found': 'Nie ma użytkownika o takim e-mailu'
};

export const translate = code => translates[code];