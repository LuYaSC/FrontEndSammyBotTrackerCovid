export class GetUserResult {
    id: number;
    userName: string;
    name: string;
    firstLastName: string;
    secondLastName: string;
    state: string;
    email: string;
    phoneNumber: string;
    availableDays: number;
    dateCreation: Date;
    totalItems: number;
    userRoles: UserRolesResult[] = [];
}

export class UserRolesResult {
    roleId: number;
}
