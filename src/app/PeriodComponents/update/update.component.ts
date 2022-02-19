import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {

  public periodForm: FormGroup;
  public period: any;

  constructor(private repo: RepositoryService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.periodForm = new FormGroup({
      PeriodType: new FormControl('', [Validators.required]),
      RestTime: new FormControl('', [Validators.required]),
      StartTime: new FormControl('', [Validators.required]),
      EndTime: new FormControl('', [Validators.required])
    });

    this.getPeriodById();
  }

  private getPeriodById = () => {
    let Id: string = this.activeRoute.snapshot.params['id'];
      
    let periodByIdUrl: string = `api/periods/${Id}`;
    this.repo.getData(periodByIdUrl)
      .subscribe(res => {
        this.period = res as any;
        this.periodForm.patchValue(this.period);
      })
  }

  public updatePeriod = (periodFormValue) => {
    if (this.periodForm.valid) {
      this.executeOwnerUpdate(periodFormValue);
    }
  }
  private executeOwnerUpdate = (periodFormValue) => {
    //const date = new Date(ownerFormValue.dateOfBirth);
    this.period.periodType = periodFormValue.name;
    //this.owner.dateOfBirth = this.datePipe.transform(date, "yyyy-MM-dd");
    this.period.restTime = periodFormValue.RestTime;
    this.period.startTime = periodFormValue.StartTime;
    this.period.endTime = periodFormValue.EndTime;

    debugger
    let apiUrl = `api/periods/${this.period.id}`;
    this.repo.update(apiUrl, this.period)
      .subscribe(res => {
        console.log(res);
      })

  }

}
