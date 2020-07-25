import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MyCasesService } from 'app/services/my-cases/my-cases.service';

@Component({
  selector: 'app-dialog-observations',
  templateUrl: './dialog-observations.component.html',
  styleUrls: ['./dialog-observations.component.css']
})
export class DialogObservationsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MyCasesService
  ) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
