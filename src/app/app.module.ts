import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MeterialModule} from './meterial/meterial.module'
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { RoutingModule} from './routing/routing.module';
import{AuthService} from './auth.service';
import{GlobalserviceService} from './globalservice.service'
import {HttpClient,HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    MeterialModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService,GlobalserviceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
