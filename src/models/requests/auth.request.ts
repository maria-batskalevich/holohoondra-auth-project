export type SignUpRequestDataType = {
    username: string,
    password: string,
    email: string
}

export type SignInRequestDataType = Omit<SignUpRequestDataType, 'email'>