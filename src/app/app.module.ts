import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FeCommonModule } from './common/common.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'app/common/components/smart/login/login.component';
import { TripPlannerComponent } from 'app/passengers/components/smart/trip-planner/trip-planner.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

const routes:Routes = [ 
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: TripPlannerComponent}
]

@NgModule({
  declarations: [
    AppComponent, TripPlannerComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeCommonModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPs_IyBxZNsYKEh8JplMe8a91URajuqic',
      libraries: ['places']
    })
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
