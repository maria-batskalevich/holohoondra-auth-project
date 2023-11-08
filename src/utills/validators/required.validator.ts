enum RequiredError {
    REQUIRED = 'Required field!'
}

export const requiredValidator = (value: string): string | undefined => {
    if(!value) return RequiredError.REQUIRED
}