export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type CredentialsDTO = {
    username: string;
    password: string;
};
export type PayloadDto = {
    exp: number,
    user_name:string,
    authorities: RoleEnum[]
};

