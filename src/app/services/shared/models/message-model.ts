export class MessageModel {
    type: MessageType;
    isModalContainer: boolean;
    summary: string;
    detail: string;
    isVisible = false;
}

export enum MessageType {
    Success,
    Error,
    Info,
    Warning
}