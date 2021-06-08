import { Component, OnInit } from '@angular/core';
import {Connect_info} from 'src/app/models/connectinfo';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import{ HttpServiceService}  from '../../../services/http-service.service';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

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
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  
  submit(){
    this.info_connect.birth_date = moment(this.info_connect.birth_date).format("YYYY-MM-DD");
    let data = {
      info_connect:this.info_connect
    }
    let data1 = {
      time:this.info_connect.time
    }
    console.log(this.info_connect.time);
    this.httpService.post('auth/time_info',data1).subscribe(
      data => {
        console.log('اقققققققققققققققققققققققققققققققققققققققققققق');
      },
    )
    this.httpService.post('auth/infoconnects',data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error);
      },
      
      () => {
        this.modalController.dismiss();
        this.navCtrl.navigateForward('/home');
      }
      )
      console.log('outsidepost');
      console.log(data1);
      

      }  

}
