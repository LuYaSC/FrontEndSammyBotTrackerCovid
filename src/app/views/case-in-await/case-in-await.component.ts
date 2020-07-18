import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";
import { MyCasesService } from "../../services/my-cases/my-cases.service";
import { MyCasesResult } from "../../services/my-cases/models/my-cases-result";
import { DataSeetService } from "../../services/data-seet/data-seet.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogTestComponent } from "app/components/dialog-test/dialog-test.component";
import { TechnicalSheetDto } from "app/services/data-seet/models/technical-sheet-dto";
import { TechnicalSheetResult } from "app/services/data-seet/models/technical-sheet-result";
import { MyCasesDto } from "app/services/my-cases/models/my-cases-dto";

@Component({
  selector: "app-case-in-await",
  templateUrl: "./case-in-await.component.html",
  styleUrls: ["./case-in-await.component.css"],
  providers: [Globals, MyCasesService],
})
export class CaseInAwaitComponent implements OnInit {
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
    private myCasesService: MyCasesService,
    private dataSeetService: DataSeetService,
    public dialog: MatDialog
  ) {
    // console.log(globals.role)
  }

  ngOnInit(): void {
    this.handleGetCases(this.nivelSelected);
  }

  handleGetCases(nivel: string) {
    this.isLoading = true;
    let request = new MyCasesDto();
    request.nivel = +nivel;
    this.myCasesService.getListCasesInAwait(request).subscribe(
      (resp: any) => {
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
    const dialogRef = this.dialog.open(DialogTestComponent, {
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
