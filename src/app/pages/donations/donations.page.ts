import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from './../../services/env.service';
import{ HttpServiceService}  from './../../services/http-service.service';
import {Donations_info} from 'src/app/models/donations';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.page.html',
  styleUrls: ['./donations.page.scss'],
})
export class DonationsPage implements OnInit {

  donations_info: Donations_info;
    constructor(
    private alertService: AlertService,
    private env: EnvService,
    private httpService :HttpServiceService, ){ }
  
    ngOnInit() 
    {
    }

    donationModal(form: NgForm) {
      
      // console.log(form.value.clothes)
      this.httpService.makePost( 'auth/donations', form.value.clothes, form.value.furniture).subscribe(
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
    // ionViewWillEnter() {
    //   this.httpService.makeGet('auth/receive_donation').subscribe(
    //     donations_info => {
    //       this.donations_info = donations_info
    //       if(!this.donations_info){
    //         this.donations_info = {
    //           furniture :'',
    //           clothes :''
    //         }
    //       }
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
          
    //     }
    //   );
    // }
  
    
  
    // ngOnInit() {
    // }
    // ionViewWillEnter() {
    //   this.httpService.makeGet('auth/receive_donation').subscribe(
    //     Donations_info => {
    //       this. Donations_info = Donations_info
    //       if(!this.Donations_info){
    //         this.Donations_info= {
    //         furniture :'',
    //    clothe :''
    //         }
    //       }
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
          
    //     }
    //   );
     
  

     
  }