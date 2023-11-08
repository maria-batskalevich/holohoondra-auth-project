enum EmailError {
    INVALID = 'Invalid email address'
}

export const emailValidator = (email: string): string | undefined => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return EmailError.INVALID
}
