import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LQbannerComponent } from './lqbanner/lqbanner.component';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { FeedComponent } from './feed/feed.component';
import { RankfeedComponent } from './rankfeed/rankfeed.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { HomeComponent } from './home/home.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DataFormModule } from './data-form/data-form.module';




@NgModule({
  declarations: [
    AppComponent,
    LQbannerComponent,
    CardcomponentComponent,
    FeedComponent,
    RankfeedComponent,
    LoginComponent,
    MateriasComponent,
    PerfilComponent,
    RegistroComponent,
    FormtemplateComponent,
    HomeComponent,
    FormDebugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataFormModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    LQbannerComponent,
    CardcomponentComponent,
    FeedComponent,
    RankfeedComponent,
    LoginComponent,
    MateriasComponent,
    PerfilComponent,
    RegistroComponent,
    FormtemplateComponent,
    HomeComponent,
  ]
})
export class AppModule { }
