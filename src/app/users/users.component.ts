import { Component, OnInit } from '@angular/core';
import {AuthService} from  '../auth.service';
import {GlobalserviceService} from '../globalservice.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdata: Object;

  constructor(
    public authservice:AuthService,
   public glservice: GlobalserviceService,
   private router: Router

  ) {
this.authservice.getusers().subscribe((data) =>{
console.log('data',data)
 this .userdata= data;
 console.log("userdata",this.userdata);
})

   }
   showalbum(id){
     console.log('id',id)
     this.glservice.updatedDataSelection(id)
     this.router.navigate(['albums']); 
   }


  ngOnInit() {
  }

}
