import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from  '@angular/router';
import { UsersComponent } from '../users/users.component';
import { AlbumsComponent } from '../albums/albums.component';
import { PhotosComponent } from '../photos/photos.component';
 
 const routes: Routes = [
  {path: '', component: UsersComponent },
   {path: 'albums', component: AlbumsComponent },
   { path: 'photos', component: PhotosComponent }
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
    
  
  declarations: []
})
export class RoutingModule { }
