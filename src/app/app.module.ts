import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AuthService} from "./shared/auth.service";
import {RegisterComponent} from './register/register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ListingComponent} from './listing/listing.component';
import {ListingService} from "./shared/listing.service";
import {SignOutComponent} from './sign-out/sign-out.component';
import {CoreModule} from "./core/core.module";
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {routing} from "./app.routing";
import { ChangeUserInfoComponent } from './change-user-info/change-user-info.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    routing
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent,
    ListingComponent,
    SignOutComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ChangeUserInfoComponent
  ],

  providers: [
    AuthService,
    ListingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
