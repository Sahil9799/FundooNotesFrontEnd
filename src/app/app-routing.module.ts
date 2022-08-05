import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'forgot',component: ForgotComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[

    {path:'notes',component:GetallnotesComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent},
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
