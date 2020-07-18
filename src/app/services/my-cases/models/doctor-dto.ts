export class DoctorDto {
    doctorId:number;
    name: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
