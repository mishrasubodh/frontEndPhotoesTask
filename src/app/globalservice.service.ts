import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  private dataSource = new BehaviorSubject('id');
  data = this.dataSource.asObservable();

  private dataforphoto = new BehaviorSubject('id');
 photodata = this.dataforphoto.asObservable();

  constructor() {
   }

  updatedDataSelection(data:any){
    this.dataSource.next(data);
    console.log('idon glowal',data);
}
updatedDataForphoto(photodata:any){ 
  this.dataforphoto.next(photodata);
  console.log(' photo id on glowal',photodata);
}

}