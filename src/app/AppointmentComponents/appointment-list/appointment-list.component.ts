import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/Models/Appointment/Appointment.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(private router: Router,private repo: RepositoryService,private activeRoute: ActivatedRoute) { }

  public result : Appointment[];

  public num : number;

  ngOnInit(): void {
    this.consumeGetFromRepository();
  }
    
  goToForm(){
    this.router.navigate(['/appointment/form']);
  }

  details(){
    this.router.navigate(['/appointment/details']);
  }

/*
  public getAllAppointments = () => {
    let apiAddress: string = "api/Appointments";
    this.repo.getData(apiAddress)
    .subscribe(res => {
      if(res){this.hideloader;}
      this.result = res as Appointment[];
    })
  }
*/
  // Function is defined
  public hideloader() {
  
    // Setting display of spinner
    // element to none
    document.getElementById('loading')
        .style.display = 'none';
}

public consumeGetFromRepository() {
  let id: string = this.activeRoute.snapshot.params['id'];
  this.repo.getData(`api/Appointments/Doctor/${id}`)
    .subscribe(res => {
      if(res){this.hideloader;}
      this.result = res as Appointment[];
    })
}

}
