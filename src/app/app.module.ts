import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { ApiComponent } from './api/api.component';
import { MonkeysComponent } from './monkeys/monkeys.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainPageComponent,
    AddItemComponent,
    SettingsComponent,
    ApiComponent,
    MonkeysComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'main', component: MainPageComponent },
      { path: 'additem', component: AddItemComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'monkeys', component: MonkeysComponent }
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
