export class CreateCaseResult {
    caseId: number;
    namePatient: string;
    bornDate: string;
    isInsurance: boolean;
    isNewPatient: boolean;
    insuranceName: string;
    departament: string;
    municipality: string;
    urlRoom: string;
    lastControlId: number;
    phoneNumber: string;
    documentNumber: string;
    previousAttentions: PreviousAttention[] = [];
}

export class PreviousAttention {
    caseId: number;
    assignedDoctor: string;
    dateAttention: Date;
}
