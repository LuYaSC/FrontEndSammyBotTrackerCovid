export class JwtResponse {
    dataUser: {
        id: number,
        name: string,
        email: string,
        accessToken: string,
        expiresIn: string
    }
}