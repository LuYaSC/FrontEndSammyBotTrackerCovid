import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-errors',
  templateUrl: './dialog-errors.component.html',
  styleUrls: ['./dialog-errors.component.css']
})
export class DialogErrorsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogErrorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
