import { Component, OnInit } from '@angular/core';
import { CapturedCaseService } from 'app/services/captured-case/captured-case.service';
import { GetDataDto } from 'app/services/captured-case/models/get-data-dto';

@Component({
  selector: 'app-form-create-case',
  templateUrl: './form-create-case.component.html',
  styleUrls: ['./form-create-case.component.css'],
  providers: [CapturedCaseService]
})
export class FormCreateCaseComponent implements OnInit {
  createCaseDto = new GetDataDto();
  constructor(private service: CapturedCaseService) { }
  isCreatedCase: boolean;
  message: string;

  ngOnInit(): void {
  }

  createCase() {
    this.service.capturedCase(this.createCaseDto).subscribe((resp: any) => {
      if (resp.isOk) {
        this.isCreatedCase = true;

      } else {
        this.message = resp.message;
      }

    });
  }

}
