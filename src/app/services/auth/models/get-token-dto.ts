export class GetTokenDto {
    username: string;
    password: string;
    IpClient: string;
    grant_type: string;
    client_id: string;

    constructor() {
        this.username = '';
        this.password = '';
        this.IpClient = '';
        this.grant_type = 'password';
        this.client_id = 'f82e450ad49e4284a613ed9a4a5deb74';
    }
}