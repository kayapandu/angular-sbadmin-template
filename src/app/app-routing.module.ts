import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }	from './home/home.component';
import { AboutComponent }	from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';  

const routes: Routes = [
<<<<<<< HEAD
	{path: '', redirectTo : '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent },
	{path: 'about', component: AboutComponent},
	{path: 'registration', component: RegistrationComponent}
=======
	{path: 'home', component: HomeComponent },
	{path: 'about', component: AboutComponent},
	{path: '**', redirectTo : '/home', pathMatch: 'full'},
>>>>>>> 94bae3dca0d1715327f47423204c13c7aecef8c5
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
