import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResponseSaveDto } from '../../services/traking-form/models/response-save-dto';




@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {


  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseSaveDto) {
      dialogRef.disableClose = true;
    }

  onNoClick(): void {
    this.dialogRef.close();
    
  }

}
