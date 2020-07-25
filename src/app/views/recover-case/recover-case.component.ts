import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyCasesResult } from 'app/services/my-cases/models/my-cases-result';
import { Globals } from '../../globals';
import { RecoverCaseService } from 'app/services/recover-case/recover-case.service';
import { GetDataDto } from 'app/services/recover-case/models/GetDataDto';
import { DialogRecoveryCaseComponent } from 'app/components/dialog-recovery-case/dialog-recovery-case.component';

@Component({
  selector: 'app-recover-case',
  templateUrl: './recover-case.component.html',
  styleUrls: ['./recover-case.component.css'],
  providers: [Globals, RecoverCaseService],
})
export class RecoverCaseComponent implements OnInit {

  currentDate = new Date();
  casesResult: MyCasesResult[] = [];

  message: string;
  showMessageError = false;
  isSuccess = false;
  isLoading = false;
  idControl;
  urlSala = "";
  nivelSelected = '0';

  constructor(
    public globals: Globals,
    private recoverCasesService: RecoverCaseService,
    public dialog: MatDialog
  ) {
    // console.log(globals.role)
  }

  ngOnInit(): void {
    this.handleGetCases(this.nivelSelected);
  }

  handleGetCases(nivel: string) {
    debugger;
    this.isLoading = true;
    let request = new GetDataDto();
    request.nivel = +nivel;
    this.recoverCasesService.getCasesForRecovers(request).subscribe(
      (resp: any) => {
        debugger;
        if (resp.body == null) {
          this.isSuccess = true;
          this.message = "No se encontró ningun resultado.";
        } else {
          this.isSuccess = false;
          this.casesResult = resp.body;
          this.showMessageError = this.casesResult.length > 0 ? false : true;
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  showDialog(item) {
    const dialogRef = this.dialog.open(DialogRecoveryCaseComponent, {
      width: "100%",
      height: "600px",
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.message = result;
      this.isSuccess = true;
      this.casesResult = [];
      this.handleGetCases(this.nivelSelected);
    });
  }
}
