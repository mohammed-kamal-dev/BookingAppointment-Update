import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/Doctor/doctor.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.sass']
})
export class DoctorListComponent implements OnInit {

  public result : Doctor[];

  constructor(private router: Router,private repo: RepositoryService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  goToForm(){
    this.router.navigate(['/doctor/form']);
  }

  getDoctorAppointments(id){

  }

  details(id){
    this.router.navigate([`/appointment/${id}`]);
  }

  public getAllDoctors = () => {
    let apiAddress: string = "api/Doctors";
    this.repo.getData(apiAddress)
    .subscribe(res => {
      this.result = res as Doctor[];
    })
  }

}
