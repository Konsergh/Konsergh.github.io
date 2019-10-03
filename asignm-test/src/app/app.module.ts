import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavService } from './shared/nav.service';
import { UserService } from './shared/users.service';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { AboutComponent } from './about/about.component';
import { RequairComponent } from './requair/requair.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { QuantedComponent } from './quanted/quanted.component';
import { TooglemenuComponent } from './tooglemenu/tooglemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    AboutComponent,
    RequairComponent,
    UsersComponent,
    RegistrationComponent,
    FooterComponent,
    SignupComponent,
    QuantedComponent,
    TooglemenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NavService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
