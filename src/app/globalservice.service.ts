import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  private dataSource = new BehaviorSubject('id');
  data = this.dataSource.asObservable();
  constructor() {
    console.log('idon glowal',this.data);
   }

  updatedDataSelection(data:any){
    this.dataSource.next(data);
    console.log('idon glowal',data);
}
}