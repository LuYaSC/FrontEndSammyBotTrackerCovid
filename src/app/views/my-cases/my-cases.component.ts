import { Component, OnInit } from '@angular/core';
import { MyCasesService } from 'app/services/my-cases/my-cases.service';
import { MyCasesDto } from 'app/services/my-cases/models/my-cases-dto';
import { MyCasesResult } from 'app/services/my-cases/models/my-cases-result';
import { MatDialog } from '@angular/material/dialog';
import { DialogObservationsComponent } from 'app/components/dialog-observations/dialog-observations.component';

@Component({
  selector: 'app-my-cases',
  templateUrl: './my-cases.component.html',
  styleUrls: ['./my-cases.component.css'],
  providers: [MyCasesService]
})
export class MyCasesComponent implements OnInit {
  nombreMedico = localStorage.getItem('USER_NAME');
  // items = [{}];
  nivelSelected = '0';
  nivelDto: MyCasesDto = new MyCasesDto();
  casesResult: MyCasesResult [] = [];
  message: string;
  showMessageError = false;
  isSuccess = false;
  isLoading = false;

  constructor(private myCasesService: MyCasesService, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    // this.handleGetCases();
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterContentInit() {
    this.handleGetCases();
  }

  handleGetCases() {
    this.nivelDto.nivel = Number(this.nivelSelected);
    this.isLoading = true;
    this.myCasesService.getListCases(this.nivelDto).subscribe((resp: any) => {
      if (resp.body == null) {
        this.isSuccess = true;
        this.message = 'No se encontró ningun resultado.';
      } else {
        this.casesResult = resp.body;
        this.showMessageError = this.casesResult.length > 0 ? false : true;
      }
      this.isLoading = false;
    }, error => {
      //console.log('no existen registros');
      this.isLoading = false;
    });
  }

  showDialog(item) {
    const dialogRef = this.dialog.open(DialogObservationsComponent, {
      width: "100%",
      height: "600px",
      data: item,
    });

    /*dialogRef.afterClosed().subscribe((result) => {
      this.message = result;
      this.isSuccess = true;
      this.casesResult = [];
      //this.handleGetCases(this.nivelSelected);
    });*/
  }

}
