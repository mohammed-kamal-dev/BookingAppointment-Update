import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentDetailsComponent } from './AppointmentComponents/appointment-details/appointment-details.component';
import { AppointmentFormComponent } from './AppointmentComponents/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './AppointmentComponents/appointment-list/appointment-list.component';
import { DoctorDetailsComponent } from './DoctorComponents/doctor-details/doctor-details.component';
import { DoctorFormComponent } from './DoctorComponents/doctor-form/doctor-form.component';
import { DoctorListComponent } from './DoctorComponents/doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { PeriodDetailsComponent } from './PeriodComponents/period-details/period-details.component';
import { PeriodFormComponent } from './PeriodComponents/period-form/period-form.component';
import { PeriodListComponent } from './PeriodComponents/period-list/period-list.component';
import { UpdateComponent } from './PeriodComponents/update/update.component';
import { ScheduleFormComponent } from './ScheduleComponents/schedule-form/schedule-form.component';
import { ScheduleListComponent } from './ScheduleComponents/schedule-list/schedule-list.component';
import { NotFoundComponent } from './Theme/error-pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '404', component : NotFoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   
  //Appointment Routes
  { path: 'appointment/:id', component: AppointmentListComponent },
  { path: 'appointment/form', component: AppointmentFormComponent },
  { path: 'appointment/details', component: AppointmentDetailsComponent },

  //Doctor Routes
  { path: 'doctor', component: DoctorListComponent },
  { path: 'doctor/form', component: DoctorFormComponent },
  { path: 'doctor/details', component: DoctorDetailsComponent },

  //Schedules
  { path: 'schedule', component: ScheduleListComponent },
  { path: 'schedule/form', component: ScheduleFormComponent },
  { path: 'schedule/details/:id', component: ScheduleFormComponent },

  { path: 'period', component: PeriodListComponent },
  { path: 'period/form', component: PeriodFormComponent },
  { path: 'period/update/:id', component: UpdateComponent },
  { path: 'period/details/:id', component: PeriodDetailsComponent },

  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
