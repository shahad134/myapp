import { Component, OnInit } from '@angular/core';
import {Connect_info} from 'src/app/models/connectinfo';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import{ HttpServiceService}  from '../../../services/http-service.service';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-connect',
  templateUrl: './info-connect.page.html',
  styleUrls: ['./info-connect.page.scss'],
})
export class InfoConnectPage implements OnInit {

  info_connect: Connect_info = new Connect_info ;
  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private httpService :HttpServiceService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  submit(){
    let data = {
      info_connect:this.info_connect
    }
    console.log(this.info_connect);
    this.httpService.post('auth/infoconnect',data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error.error);
        
      },
      () => {
        this.modalController.dismiss();
        
      
      }
 
 
      )
    
  }

}
