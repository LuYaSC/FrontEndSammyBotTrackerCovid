// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  url: {
    auth: 'https://serviciosdev.medico.com.bo/JwtAuthenticationSB/oauth2',
    capturedCase: 'https://localhost:44363/api/CapturedCases/',
    dataSeet: 'https://serviciosdev.medico.com.bo/Patients/api/Patient/',
    evolutionForm: 'https://serviciosdev.medico.com.bo/EvolutionForm/api/EvolutionForm/',
    recoverCase: 'http://localhost:64104/api/CasesRecovery/',
    myCases: 'https://localhost:44376/api/Telemedicine/',
    tracking: 'xxxxxxxxxxxxxxxxxxxxxxx',
    maps: 'https://servicios.medico.com.bo/DoctorVirtual.Georreferenciacion.Api/api/Georreferenciacion/',
    administration: 'https://serviciosdev.medico.com.bo/Administration/api/Administration/'
  }
};
