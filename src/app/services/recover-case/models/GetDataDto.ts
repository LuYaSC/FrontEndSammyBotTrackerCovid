export class GetDataDto {
  casoId: number;
  nivel: number;
  envioBrigada: boolean;
  finalizar: boolean;
  observaciones: string;
  direccionExplicita: string;
  recetaMedica: string;
  nombrePaciente: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
