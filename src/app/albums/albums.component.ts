import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {GlobalserviceService} from '../globalservice.service'
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(
    public authservice : AuthService,
    public glservice:GlobalserviceService
  ) {

    this.glservice.data.subscribe((data)=>{
      console.log('dataon album ',data)
    })
    this.authservice.getalbums().subscribe((data)=>{

console.log('data on album through api',data)

    })
   }

  ngOnInit() {
  }
  
}
