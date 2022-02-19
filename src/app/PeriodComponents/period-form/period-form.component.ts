import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-period-form',
  templateUrl: './period-form.component.html',
  styleUrls: ['./period-form.component.sass']
})
export class PeriodFormComponent implements OnInit {

  public periodForm: FormGroup; 
 
  constructor(private repo: RepositoryService) { }

  ngOnInit(): void {
    this.periodForm = new FormGroup({
      PeriodType: new FormControl('', [Validators.required]),
      RestTime: new FormControl('', [Validators.required]),
      StartTime: new FormControl('', [Validators.required]),
      EndTime: new FormControl('', [Validators.required])
    });
  }

  public createPeriod = (periodFormValue) => {
    if (this.periodForm.valid) {
      this.executeOwnerCreation(periodFormValue);
    }
  }
  private executeOwnerCreation = (periodFormValue) => {
    const period: any = {
      periodType: periodFormValue.PeriodType,
      restTime: periodFormValue.RestTime,
      startTime: periodFormValue.StartTime,
      endTime: periodFormValue.EndTime
    }
    debugger
    const apiUrl = 'api/periods';
    this.repo.create(apiUrl, period)
      .subscribe(res => {
        console.log(res);
      }
    )
  }

}
