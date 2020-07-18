export class TokenDecodeDto {
    nameid: string;
    unique_name: string;
    http: string;
    role: string;
    user_name: string;
    iss: string;
    aud: string;
    exp: number;
    nbf: number;
    roles: [];
}