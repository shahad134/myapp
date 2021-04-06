import { Component, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import{ HttpServiceService}  from '../../../services/http-service.service';
import { ModalController, NavController } from '@ionic/angular';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})

export class DonationPage implements OnInit {

  //donations_info: Donations_info ;
  donations_info: Donations_info = new Donations_info ;
  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private httpService :HttpServiceService,
    private modalController: ModalController,
    private navCtrl: NavController,

  ) { }

  
  ngOnInit() {
   
  }
  item_qty=[1];

// let f1:furniture={
// type:form.value.type,
// number:form.value.number
// }
  furniture(form: NgForm){
    
this.furniture_information.push(form.value.type)

  this.furniture_information.push(form.value.number)
  
    // })
   }
  clothes(form: NgForm){
    this.clothes_information.push(form.value.type)
   this.clothes_information.push(form.value.number)
   
  }  
  dishes(form: NgForm){
    this.dishes_information.push(form.value.type)
   this.dishes_information.push(form.value.number)
   
  }
 electrical_tools(form: NgForm){
  this.electrical_tools_information.push(form.value.type)
 this.electrical_tools_information.push(form.value.number)
 
}
baby_things(form: NgForm){

  this.baby_things_information.push(form.value.type)
 this.baby_things_information.push(form.value.number)
}
luxuries(form: NgForm){
  this.luxuries_information.push(form.value.type)
 this.luxuries_information.push(form.value.number)
}
accessories_and_mobiles(form: NgForm){
  this.accessories_and_mobiles_information.push(form.value.type)
 this.accessories_and_mobiles_information.push(form.value.number)
 
} 
medical_devices(form: NgForm){
  this.medical_devices_information.push(form.value.type)
 this.medical_devices_information.push(form.value.number)
}
miscellaneous(form: NgForm){
  this.miscellaneous_information.push(form.value.type)
 this.miscellaneous_information.push(form.value.number)
}
  add(){//add
    this.item_qty.push(2)
    console.log(this.furniture_information,this.clothes_information,this.dishes_information,this.baby_things_information,this.luxuries_information,this.accessories_and_mobiles_information,this.medical_devices_information,this.miscellaneous_information)
  }
  remove(){//add
    this.item_qty.pop();
    console.log(this.furniture_information,this.clothes_information,this.dishes_information,this.baby_things_information,this.luxuries_information,this.accessories_and_mobiles_information,this.medical_devices_information,this.miscellaneous_information)
  }
 //electrical_tools
  
  // add(){//add
  //   this.item_qty.push(2)
  //   console.log(this.furniture_information)
  // }
  // remove(){//add
  //   this.item_qty.pop();
  //   console.log(this.furniture_information)
  // }
  
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
 
  furniture_information=[]
  clothes_information=[]
  dishes_information=[]
  electrical_tools_information=[]
  baby_things_information=[] 
  luxuries_information=[]
  accessories_and_mobiles_information=[]
  medical_devices_information=[]
  miscellaneous_information=[]

  submit(){

    this.donations_info.furniture=this.furniture_information.toString().replace(/"/g,"");
    this.donations_info.clothes=this.clothes_information.toString() 
    this.donations_info.dishes=this.dishes_information.toString();
    this.donations_info.electrical_tools=this.electrical_tools_information.toString();
    this.donations_info.baby_things=this.baby_things_information.toString();
    this.donations_info.luxuries=this.luxuries_information.toString();
    this.donations_info.medical_devices=this.medical_devices_information.toString();
    this.donations_info.accessories_and_mobiles=this.accessories_and_mobiles_information.toString();
    this.donations_info.miscellaneous=this.miscellaneous_information.toString();
    //this.donations_info.birth_date=this.birth_date_information;

    let data = {
      donations_info:this.donations_info
    }
   
    //this.donations_info.furniture=this.home_furniture;

    console.log(this.donations_info)
    this.httpService.post( 'auth/donations', data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      
      
      },
      error => {
        console.log(error.error);
        
      },
      () => {
        this.modalController.dismiss();
        this.navCtrl.navigateForward('/info-connect');

      
      }
    )
  }
  // public home_furniture  = [
  //   { val: 'اسرة', isChecked: 0 },
  //   { val: 'كنب', isChecked: 0 }, 
  //   { val: 'مجلس', isChecked: 0 },
  //   { val: 'كرسي', isChecked: 0 },
    // { val: 'طاولة', isChecked: 0 },
    // { val: 'أبجورة', isChecked: 0 },
    // { val: 'ورد صناعي', isChecked: 0 },
    // { val: 'شماعة', isChecked: 0 },
    // { val: 'دواليب', isChecked: 0 }
  // ];
}
// interface furniture{
//   type:string,
//   number:number
// }
