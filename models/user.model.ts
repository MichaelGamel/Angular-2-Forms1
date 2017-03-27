export interface IUser {
    firstName: string,
    lastName: string,
    birthDate: string,
    email: string,
    username: string,
    password: string,
    gender: string,
    country: number,
    favorites: IFavorite[],
    notes: string,
    isActive: boolean,
}


export interface IFavorite {
    id: number
    name: string
}


export interface ICountry {
    id: number,
    name: string
}
