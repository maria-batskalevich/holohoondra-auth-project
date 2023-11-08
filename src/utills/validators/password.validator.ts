
enum PasswordError {
    LENGTH = 'Password length should be more than 4'
}

export const passwordValidator = (password: string): string | undefined => {
    if (password.length < 4) return PasswordError.LENGTH
}
