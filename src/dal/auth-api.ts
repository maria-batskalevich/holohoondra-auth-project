import axios, {AxiosResponse} from "axios";

const authConfig = {
    baseURL: 'http://185.250.46.14/api/',
    withCredentials: true,
}

const instance = axios.create(authConfig)

export const authAPI = {
    registration(data: RegistrationsData){
        return instance.post<RegistrationsData, AxiosResponse>('auth/registration', data)
            // .then(res => res.data)
    }
}


export type RegistrationsData = {
    username: string,
    password: string,
    email: string
}

export type UsersInfoResponse = {
    message: string,
    data: {
        tokens: {
            accessToken: string,
            refreshToken: string,
        },
        user: {
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
    }
};

