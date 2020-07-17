const translates = {
    'auth/wrong-password': 'Hasło jest nieprawidłowe lub użytkownik nie ma hasła',
    'EMAIL_EXISTS': 'Konto z tym adresem e-mail już istnieje',
    'auth/user-not-found': 'Nie ma użytkownika z tym adresem e-mail',
    'INVALID_PASSWORD': 'Niepoprawne hasło',
    'EMAIL_NOT_FOUND': 'E-mail nie znaleziony'
};

export const translate = code => translates[code];