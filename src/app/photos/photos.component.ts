import { Component, OnInit } from '@angular/core';
import  {GlobalserviceService} from '../globalservice.service'
import {AuthService} from '../auth.service'
import {Location} from '@angular/common';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoid: string;
  photodata: any;

  constructor(
public authservice:AuthService,
public glservice:GlobalserviceService,
private _location: Location

  ) { 
   
this.glservice.photodata.subscribe((data)=>{
  if(data!==null || undefined){
console.log("data on photo from gl " ,data)
this.photoid =data


this.authservice.getalphotos().subscribe((data:any)=>{
  console.log("dataon photoes from phtoapi",data)
 this.photodata= data.filter(data => data.albumId == this.photoid);
console.log('album data',this.photodata);
    })
   }
 })


  }
  backClicked() { debugger
    this._location.back();
  }

  ngOnInit() {
  }

}
