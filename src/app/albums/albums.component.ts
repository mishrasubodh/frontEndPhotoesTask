import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { GlobalserviceService } from '../globalservice.service'
import {Router} from '@angular/router'
import {Location} from '@angular/common'
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumdata: any;
  apidata: any
  curentid: string;
  constructor(
    public authservice: AuthService,
    public glservice: GlobalserviceService,
    public routes:Router,
    public location:Location
  ) {

    this.glservice.data.subscribe((iddata) => {
      if (iddata !== null || undefined) {
        this.curentid = iddata
        console.log('dataon album ', iddata)
        this.authservice.getalbums().subscribe((data: any) => {
          this.apidata = data
          console.log('data on album through api', data)
          this.albumdata = data.filter(data =>  data.userId == this.curentid )
          console.log('data on service album', this.albumdata)
        })


      }
    })

  }

  showPhoto(id){
console.log("id on album after click on show photo",id)
this.glservice.updatedDataForphoto(id)
this.routes.navigate(['photos'])
  }

  backClicked(){
this.location.back()
  }
  ngOnInit() {
  }

}
