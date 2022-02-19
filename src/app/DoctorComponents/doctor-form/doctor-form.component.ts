import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorForCreateDto } from 'src/app/Models/Doctor/doctorforCreateDto.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.sass']
})
export class DoctorFormComponent implements OnInit {

  public DoctorForm: FormGroup; 

  constructor(private repo: RepositoryService) { }

  ngOnInit(): void { 
    this.DoctorForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    });
  }

  public createDoctor = (doctorFormValue) => {

      this.executeOwnerCreation(doctorFormValue);
    
  }
  private executeOwnerCreation = (doctorFormValue) => {
    const period: DoctorForCreateDto = {
      firstName: doctorFormValue.firstName,
      lastName: doctorFormValue.lastName
    }
    
    const apiUrl = 'api/Doctors';
    this.repo.create(apiUrl, period)
      .subscribe(res => {
        console.log(res);
      }
    )
  }

}
