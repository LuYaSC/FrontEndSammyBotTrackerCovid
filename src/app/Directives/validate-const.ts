export const ValidateConst: IValidate[] = [
  {
    type: 'integer',
    message: 'El campo debe ser un número valido',
    regex: /^[0-9]*$/
  },
  {
    type: 'decimal',
    message: 'El campo debe ser una cantidad valida',
    regex: /^[0-9]+(\.\d{0,2})?$/
  },
  {
    type: 'accountNumber',
    message: 'La cuenta debe tener el siguiente formato (XXX-XXXXXXX-X-XX, donde X es un número)',
    regex: /^\d{3,3}-\d{7,7}-\d{1,1}-\d{2,2}$/
  },
  {
    type: 'date',
    message: 'El campo debe ser una fecha valida',
    regex: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
  },
  {
    type: 'password',
    message: 'El password debe tener letras mayúsculas(2), minúsculas y números(2)',
    regex: /^(?=(?:.*[A-Z]){2,})(?=(?:.*[a-z]){1,})(?=(?:.*\d){2,})(?=(?:.*[!@#$%\/()=?\[\]¿}+\-:;,.-_*°¬^~]){0,})([A-Za-z0-9!@#$%\/()=?\[\]¿}+\-:;,.-_*°¬^~]{7,20})$/
  },
  {
    type: 'email',
    message: 'El campo debe ser un email válido',
    regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  {
    type: 'emailOptional',
    message: 'El campo debe ser un email válido',
    regex: /^((([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))?$/
  },
  {
    type: 'manyEmails',
    message: 'El campo debe contener emails válidos',
    regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+([;](([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+)*$/
  },
  {
    type: 'alphanumeric',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]*$/
  },
  {
    type: 'alphanumericAddress',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9./ ]*$/
  },
  {
    type: 'alphanumericBasicSymbols',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-Z0-9-,. ]*$/
  },
  {
    type: 'majorZero',
    message: 'El monto debe ser mayor a 0.',
    regex: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/
  },
  {
    type: 'alphanumericNotSymbols',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-Z0-9 ]*$/
  },
  {
    type: 'numberList',
    message: 'El formato de ingreso no es el correcto',
    regex: /^[0-9,]*$/
  },
  {
    type: 'alphanumericNotSpace',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-Z0-9]*$/
  },
  {
    type: 'otherAlphanumeric',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-Z0-9./\- ]*$/
  },
  {
    type: 'pta-ruat',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-Z0-9.\- ]*$/
  },
  {
    type: 'otherAccountNumber',
    message: 'El campo no debe contener caracteres especiales',
    regex: /^[a-zA-Z0-9\-]*$/
  },
  {
    type: 'OnlyLetters',
    message: 'El campo solo debe contener letras',
    regex: /^[a-zA-Z \-]*$/
  },
  {
    type: 'majorZeroTasa',
    message: 'El campo debe ser mayor a 0.',
    regex: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/
  },
];

interface IValidate {
  type: string;
  message: string;
  regex: any;
}
