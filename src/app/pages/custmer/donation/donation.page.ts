import { Component, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import{ HttpServiceService}  from '../../../services/http-service.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  donations_info: Donations_info = new Donations_info ;
  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private httpService :HttpServiceService
  ) { }
  amony="aminnnna";
  
  ngOnInit() {
   
  }
  // ionViewWillEnter() {
  //     this.httpService.makeGet('auth/receive_donation').subscribe(
  //       donations_info => {
  //         this.donations_info = donations_info
  //         if(!this.donations_info){
  //           this.donations_info = {
  //             furniture :'',
  //             clothes :''
  //           }
  //         }
  //       },
  //       error => {
  //         console.log(error);
  //       },
  //       () => {
          
  //       }
  //     );
  //   }
  
    
  submit(){
    let data = {
      donations_info: this.donations_info
    }
    console.log(this.donations_info)
    this.httpService.post( 'auth/donations', data).subscribe(
      data => {
      
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error.error);
        
      },
      () => {
        
      }
    )
  }
}
