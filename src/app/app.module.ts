import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProfilesService } from './profiles.service';

import { AppComponent } from './app.component';
import { NewProfileComponent } from './new-profile.component';
import { TableProfilesComponent } from './table-profiles.component';
import { CoutingSortPipe } from './couting-sort.pipe';
import { EditProfileComponent } from './edit-profile.component';
import { ButtonsGroupComponent } from './buttons-group.component';


@NgModule({
  declarations: [
    AppComponent,
    NewProfileComponent,
    TableProfilesComponent,
    CoutingSortPipe,
    EditProfileComponent,
    ButtonsGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
