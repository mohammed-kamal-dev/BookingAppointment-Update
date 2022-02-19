import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/Models/Doctor/doctor.model';
import { ScheduleForCreateDto } from 'src/app/Models/Schedule/ScheduleForCreateDto.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.sass']
})
export class ScheduleFormComponent implements OnInit {

  public scheduleForm: FormGroup;

  public docotors : Doctor[];

  constructor(private repo: RepositoryService) { }

  ngOnInit(): void {
    this.getAllDoctors();

    this.scheduleForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endtDate: new FormControl('', [Validators.required]),
      StartTime: new FormControl('', [Validators.required]),
      sessionTime: new FormControl('', [Validators.required]),
      restTimeBetweenSession: new FormControl('', [Validators.required]),
      restTimeBetweenPeriod: new FormControl('', [Validators.required]),
      morningPeriodStartTime: new FormControl('', [Validators.required]),
      morningPeriodEndTime: new FormControl('', [Validators.required]),
      nightPeriodStartTime: new FormControl('', [Validators.required]),
      nightPeriodEndTime: new FormControl('', [Validators.required]),
      doctor: new FormControl('', [Validators.required]),
    });
  }

  public createschedule = (scheduleFormValue) => {

      this.executescheduleCreation(scheduleFormValue);

  }

  private executescheduleCreation = (scheduleFormValue) => {
    const schedule: ScheduleForCreateDto = {

    startDate: scheduleFormValue.startDate,
    endtDate: scheduleFormValue.endtDate,
    sessionTime: scheduleFormValue.sessionTime,
    restTimeBetweenSession: scheduleFormValue.restTimeBetweenSession,
    restTimeBetweenPeriod: scheduleFormValue.restTimeBetweenPeriod,
    morningPeriodStartTime: scheduleFormValue.morningPeriodStartTime,
    morningPeriodEndTime: scheduleFormValue.morningPeriodEndTime,
    nightPeriodStartTime: scheduleFormValue.nightPeriodStartTime,
    nightPeriodEndTime: scheduleFormValue.nightPeriodEndTime,
    doctorId: scheduleFormValue.doctor
    }

    const apiUrl = 'api/Schedules';
    this.repo.create(apiUrl, schedule)
      .subscribe(res => {
        console.log(res);
      }
    )
  }

  public getAllDoctors = () => {
    let apiAddress: string = "api/Doctors";
    this.repo.getData(apiAddress)
    .subscribe(res => {
      this.docotors = res as Doctor[];
    })
  }

}
