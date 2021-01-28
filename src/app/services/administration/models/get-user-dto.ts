import { IPagination } from "app/services/models/ipagination";

export class GetUserDto implements IPagination{
    userId: number;
    state: string;
    accessNumber: string;
    email: string;
    phoneNumber: string;
    name: string;
    firstLastName: string;
    secondLastName: string = '';
    newPassword: string;
    roles: UserRoleDto[] = [];
    notifyUser: boolean;
    pageSize: number = 10;
    curPage: number = 1;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class UserRoleDto {
    userId: number;
    roleId: number;
    isDeleted: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
