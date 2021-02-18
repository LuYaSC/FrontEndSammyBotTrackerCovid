import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CreateCaseResult, PreviousAttention } from 'app/services/captured-case/models/create-case-result';

@Component({
  selector: 'app-detail-captured-case',
  templateUrl: './detail-captured-case.component.html',
  styleUrls: ['./detail-captured-case.component.css']
})
export class DetailCapturedCaseComponent {

  listPreviousAttentions: PreviousAttention[] = [];
  previousCase: number;
  constructor(
    public dialogRef: MatDialogRef<DetailCapturedCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public item: CreateCaseResult) 
    { 
      debugger;
      dialogRef.disableClose = true;
      this.listPreviousAttentions = item.previousAttentions;
      this.previousCase = this.listPreviousAttentions[0].caseId;
    }

    onNoClick(): void {
      this.dialogRef.close("cancel");
    }
    onConfirmedClick(): void {
      this.dialogRef.close("accept");
    }

}
