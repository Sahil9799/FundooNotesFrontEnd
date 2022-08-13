import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { CreateNoteComponent } from './Components/createnote/createnote.component';
import { IconComponent } from './Components/icon/icon.component';
import { DisplayComponent } from './Components/display/display.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { UpdateComponent } from 'src/app/Components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from 'src/app/Services/shared/auth.service';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './pipe/filter.pipe';
import { DemoComponent } from './components/demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ResetpasswordComponent,
    DashboardComponent,
    GetallnotesComponent,
    ArchiveComponent,
    TrashComponent,
    CreateNoteComponent,
    IconComponent,
    DisplayComponent,
    UpdateComponent,
    FilterPipe,
    DemoComponent
   
    
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSidenavModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
