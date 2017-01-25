import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
// import {ProductListComponent} from "./product-list/product-list.component";
// import {ProductHighlightsComponent} from "./product-highlights/product-highlights.component";
// import {ProductSpecComponent} from "./product-detail/product-spec.component";
// import {ProductEstimatesComponent} from "./product-estimates/product-estimates.component";
// import {EstimateFormComponent} from "./estimate-form/estimate-form.component";
// import {ThanksComponent} from "./thanks/thanks.component";
// import {ProductMediaComponent} from "./product-detail/product-media.component";
//
import {RegisterComponent} from "./register/register.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignOutComponent} from "./sign-out/sign-out.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ListingComponent} from "./listing/listing.component";
import {ChangeUserInfoComponent} from "./change-user-info/change-user-info.component";

export const routing: ModuleWithProviders = RouterModule.forRoot([
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'change_user_info', component: ChangeUserInfoComponent},
  {path: 'reset_password', component: ResetPasswordComponent},
  {path: 'sign_in', component: SignInComponent},
  {path: 'sign_out', component: SignOutComponent},
  {path: 'change_password', component: ChangePasswordComponent},
  {path: 'listings', component: ListingComponent}

  // {path: 'products/estimates', component: ProductEstimatesComponent},
  // {path: 'products/estimates/form', component: EstimateFormComponent},
  // {path: 'products/estimates/form/thanks', component: ThanksComponent},
  // {path: 'products/:id/spec', component: ProductSpecComponent},
  // {path: 'products/:id/media', component: ProductMediaComponent},
  // {path: 'products/:filter/:id', component: ProductListComponent},
  // {path: '**', redirectTo: '/products/highlights'}
]);


