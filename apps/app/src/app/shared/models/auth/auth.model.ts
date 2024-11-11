export class AuthViewModel {
    email: string;
    password: string;

    mapToRequest(): AuthRequestModel {
        return {
            email: this.email,
            password: this.password
        };
    }
}

export class AuthRequestModel {
    email: string;
    password: string;
}
