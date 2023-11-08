import axios from "axios";
import {SignUpRequestDataType} from "../models/requests/auth.request";

const authConfig = {
    baseURL: 'http://185.250.46.14/api/',
    withCredentials: true,
}

const instance = axios.create(authConfig)

export const authAPI = {
    registration(data: SignUpRequestDataType) {
        return instance.post<SignUpRequestDataType, UserInfoResponse>('auth/registration', data)
            .then(res => res.data)
    }
}




export type UserInfoResponse = {
    message: string,
    data: fullUserType,
};

export type UserType = {
    id: number,
    username: string,
    isActivated: boolean,
    subscribersCount: number,
    gamesJuniorCount: number,
    gamesMiddleCount: number,
    gamesSeniorCount: number,
    gamesJuniorWinsCount: number,
    gamesMiddleWinsCount: number,
    gamesSeniorWinsCount: number,
    sparringCount: number,
    sparringWinsCount: number,
    rating: string,
}
export type TokensType = {
    accessToken: string,
    refreshToken: string,
}

export type fullUserType = {
    tokens: TokensType,
    user: UserType,
}