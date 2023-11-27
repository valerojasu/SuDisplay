import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorComponent } from './author/author.component';
import { PortadaComponent } from './portada/portada.component';
import { QuienComponent } from './quien/quien.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ContacComponent } from './contac/contac.component';
import { IndicadComponent } from './indicad/indicad.component';
import { FraseComponent } from './frase/frase.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FormsComponent } from './forms/forms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    AuthorComponent,
    PortadaComponent,
    QuienComponent,
    ContacComponent,
    MarcasComponent,
    IndicadComponent,
    FraseComponent,
    FormsComponent,
    NavbarComponent,
    DisplayComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
