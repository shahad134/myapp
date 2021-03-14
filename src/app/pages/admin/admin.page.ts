import { Component, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from './../../services/env.service';
import { CommonModule } from '@angular/common';
import{ HttpServiceService} from './../../services/http-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  imports: [CommonModule]


  donations_info: Donations_info = new Donations_info ;
  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private httpService :HttpServiceService
  ) { }

  ngOnInit() {
  }
  donation=[]
  ionViewWillEnter() {
    
      this.httpService.makeGet('auth/receive_donation').subscribe(
        donations_info => {
          // this.donations_info = donations_info
          for(let i =0; i <= donations_info.length; i++){
            if(donations_info[i]){
              this.donation.push(donations_info[i])
              // this.clothes.push(donations_info[i].clothes)

            }
          }

 
          // console.log(this.furniture);
          // console.log(this.clothes);
          
        //if
          // if(!this.donations_info){
          //   this.donations_info = {
          //     furniture :'',
          //     clothes :''
        //     }
        //   }
          
        // },
        // console.log(donations_info);
        
        // error => {
        //   console.log(error);
        // },
        () => {
          
        }
           });
    }}
