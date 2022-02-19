import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Theme/navbar/navbar.component';
import { FooterComponent } from './Theme/footer/footer.component';
import { SidebarComponent } from './Theme/sidebar/sidebar.component';
import { ConentHeaderComponent } from './Theme/conent-header/conent-header.component';
import { HomeComponent } from './home/home.component';

import { AppointmentListComponent } from './AppointmentComponents/appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './AppointmentComponents/appointment-details/appointment-details.component';
import { AppointmentFormComponent } from './AppointmentComponents/appointment-form/appointment-form.component';

import { DoctorListComponent } from './DoctorComponents/doctor-list/doctor-list.component';
import { DoctorFormComponent } from './DoctorComponents/doctor-form/doctor-form.component';
import { DoctorDetailsComponent } from './DoctorComponents/doctor-details/doctor-details.component';


import { NotFoundComponent } from './Theme/error-pages/not-found/not-found.component';
import { PeriodListComponent } from './PeriodComponents/period-list/period-list.component';
import { PeriodFormComponent } from './PeriodComponents/period-form/period-form.component';
import { PeriodDetailsComponent } from './PeriodComponents/period-details/period-details.component';
import { UpdateComponent } from './PeriodComponents/update/update.component';
import { ScheduleListComponent } from './ScheduleComponents/schedule-list/schedule-list.component';
import { ScheduleFormComponent } from './ScheduleComponents/schedule-form/schedule-form.component';
import { ScheduleDetailsComponent } from './ScheduleComponents/schedule-details/schedule-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ConentHeaderComponent,
    HomeComponent,

    AppointmentListComponent,
    AppointmentDetailsComponent,
    AppointmentFormComponent,

    DoctorListComponent,
    DoctorFormComponent,
    DoctorDetailsComponent,
    
    PeriodDetailsComponent,
    NotFoundComponent,
    PeriodListComponent,
    PeriodFormComponent,
    UpdateComponent,
    ScheduleListComponent,
    ScheduleFormComponent,
    ScheduleDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
