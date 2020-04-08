import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { AuthComponent } from './auth/auth.component';
=======
import { ForumComponent } from './forum/forum.component';
>>>>>>> 814e8f15fc7cf687f6fb1298a401b1e12b416c8f

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
<<<<<<< HEAD
    LoginComponent,
    AuthComponent
=======
    ForumComponent,
    MainComponent,
    LoginComponent
>>>>>>> 814e8f15fc7cf687f6fb1298a401b1e12b416c8f
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
