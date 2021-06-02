import { Component, ElementRef, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import{ HttpServiceService}  from '../../../services/http-service.service';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormArray,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})

export class DonationPage implements OnInit {
  donations_info: Donations_info = new Donations_info ;
  constructor(
    private alertService: AlertService,
    private httpService :HttpServiceService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) { }
  
  public addmore: FormGroup;
  public counter : number = 0;
  inboundClick = true;

  public errorMessages = {
    type: [
      { type: 'required', message: 'النوع مطلوب' }
    ],
    number: [
      { type: 'required', message: 'العدد مطلوب' }
    ],
  }

  furniture_information=[]
  clothes_information=[]
  dishes_information=[]
  electrical_tools_information=[]
  baby_things_information=[] 
  luxuries_information=[]
  accessories_and_mobiles_information=[]
  medical_devices_information=[]
  miscellaneous_information=[]

  ngOnInit() {
  	this.addmore = this.fb.group({
      lessons: this.fb.array([])
    });
    let el: HTMLElement = document.getElementById("addButton") as HTMLElement;
    el.click();
  }
  get lessons() {
    return this.addmore.controls["lessons"] as FormArray;
  }

  add(){
    const lessonForm = this.fb.group({
      kind: ['', Validators.required],
      type: ['', Validators.required],
      number: ['', Validators.required]
    });
    this.lessons.push(lessonForm);
    console.log("add")
  }
  addOrder(lessonIndex: number) {
    this.add()
    this.counter += 1;
    this.save(lessonIndex)
  }
  save(i: number){
    // this.clothes_information.push(this.lessons.value[i].number, this.lessons.value[i].type);
    let furniture = "furniture", 
    clothes = "clothes",
    dishes="dishes",
    electrical="electrical_tools",
    baby="baby_things",
    luxuries="luxuries",
    accessories="accessories_and_mobiles",
    medical="medical_devices",
    miscellaneous="miscellaneous";

    if (this.lessons.value[i].kind == furniture){
      this.furniture_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    } 
    else if (this.lessons.value[i].kind == clothes){
      this.clothes_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    } 
    else if (this.lessons.value[i].kind == dishes){
      this.dishes_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == electrical){
      this.electrical_tools_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == baby){
      this.baby_things_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == luxuries){
      this.luxuries_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == accessories){
      this.accessories_and_mobiles_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == medical){
      this.medical_devices_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == miscellaneous){
      this.miscellaneous_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
  }
  deleteOrder(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  submit(){
    console.log(this.clothes_information)
    this.save(this.counter)

    this.donations_info.furniture=this.furniture_information.toString().replace(/"/g,"");
    this.donations_info.clothes=this.clothes_information.toString();
    this.donations_info.dishes=this.dishes_information.toString();
    this.donations_info.electrical_tools=this.electrical_tools_information.toString();
    this.donations_info.baby_things=this.baby_things_information.toString();
    this.donations_info.luxuries=this.luxuries_information.toString();
    this.donations_info.medical_devices=this.medical_devices_information.toString();
    this.donations_info.accessories_and_mobiles=this.accessories_and_mobiles_information.toString();
    this.donations_info.miscellaneous=this.miscellaneous_information.toString();

    // this.donations_info.baby_things=this.formArr.toString();
    // this.donations_info.baby_things=JSON.stringify(this.formArr);

    let data = {
      donations_info:this.donations_info
    }

    // console.log(this.furniture_information)
    // console.log(this.addmore.value);
    console.log(this.donations_info)
    this.httpService.post('auth/donations', data).subscribe(
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
}

  // item_qty=[1];

  // public addmore: FormGroup;

  // furniture_information=[]
  // clothes_information=[]
  // dishes_information=[]
  // electrical_tools_information=[]
  // baby_things_information=[] 
  // luxuries_information=[]
  // accessories_and_mobiles_information=[]
  // medical_devices_information=[]
  // miscellaneous_information=[]

  // type = new FormControl('', [Validators.required]);
  // number = new FormControl('', [Validators.required]);
  // donationList = new FormControl('', [Validators.required]);

  // registrationForm: FormGroup = this.builder.group({
  //   type: this.type,
  //   number: this.number,
  //   donationList: this.donationList
  // });

  // public errorMessages = {
  //   type: [
  //     { type: 'required', message: 'النوع مطلوب' }
  //   ],
  //   number: [
  //     { type: 'required', message: 'العدد مطلوب' }
  //   ],
  // }


  // ngOnInit() {
  // 	this.addmore = this.builder.group({
  //     itemRows: this.builder.array([this.initItemRows()])
  //   });
  // }
  // get formArr() {
  //   return this.addmore.get('itemRows') as FormArray;
  // }

  // initItemRows() {
  //   return this.builder.group({
  //   timeRange:[''],
  //   learn:[''],
  //   });
  // }

  // addNewRow() {
  //   this.formArr.push(this.initItemRows());
  // }

  // deleteRow(index: number) {
  //   this.formArr.removeAt(index);
  // }


  // enable(){
  //   (document.getElementById("send") as HTMLButtonElement) .disabled = false;
  // }

  // addToArray(){
  //   let furniture = "furniture", 
  //   clothes = "clothes",
  //   dishes="dishes",
  //   electrical="electrical_tools",
  //   baby="baby_things",
  //   luxuries="luxuries",
  //   accessories="accessories_and_mobiles",
  //   medical="medical_devices",
  //   miscellaneous="miscellaneous";

  //   if (this.registrationForm.controls['donationList'].value == furniture){
  //     this.furniture_information.push(this.registrationForm.controls['type'].value, this.registrationForm.controls['number'].value)
  //   } 
  //   else if (this.registrationForm.controls['donationList'].value == clothes){
  //     this.clothes_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   }
  //   else if (this.registrationForm.controls['donationList'].value == dishes){
  //     this.dishes_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   }
  //   else if (this.registrationForm.controls['donationList'].value == electrical){
  //     this.electrical_tools_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   }
  //   else if (this.registrationForm.controls['donationList'].value == baby){
  //     this.baby_things_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   }
  //   else if (this.registrationForm.controls['donationList'].value == luxuries){
  //     this.luxuries_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   }
  //   else if (this.registrationForm.controls['donationList'].value == accessories){
  //     this.accessories_and_mobiles_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   }
  //   else if (this.registrationForm.controls['donationList'].value == medical){
  //     this.medical_devices_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   }
  //   // else if (this.registrationForm.controls['donationList'].value == miscellaneous){
  //   //   this.miscellaneous_information.push(this.registrationForm.get('type').value, this.registrationForm.get('number').value)
  //   // }
  //   else if (this.registrationForm.controls['donationList'].value == miscellaneous){
  //     this.miscellaneous_information.push(this.formArr.get('timeRange').value, this.registrationForm.get('learn').value)
  //   }
  // }

  // add(){
  //   this.item_qty.push(2)
  //   // this.registrationForm.reset(this.registrationForm.value)
  //   // this.registrationForm.controls['type'].reset()
  // }

  // remove(){
  //   this.item_qty.pop();
  // }

  // submit(){
  //   this.donations_info.furniture=this.furniture_information.toString().replace(/"/g,"");
  //   this.donations_info.clothes=this.clothes_information.toString();
  //   this.donations_info.dishes=this.dishes_information.toString();
  //   this.donations_info.electrical_tools=this.electrical_tools_information.toString();
  //   this.donations_info.baby_things=this.baby_things_information.toString();
  //   this.donations_info.luxuries=this.luxuries_information.toString();
  //   this.donations_info.medical_devices=this.medical_devices_information.toString();
  //   this.donations_info.accessories_and_mobiles=this.accessories_and_mobiles_information.toString();
  //   this.donations_info.miscellaneous=this.miscellaneous_information.toString();

  //   let data = {
  //     donations_info:this.donations_info
  //   }

  //   console.log(this.donations_info)
  //   this.httpService.post('auth/donations', data).subscribe(
  //     data => {
  //       this.alertService.presentToast("تم حفظ البيانات بنجاح");
  //     },
  //     error => {
  //       console.log(error.error);
  //     },
  //     () => {
  //       this.modalController.dismiss();
  //       this.navCtrl.navigateForward('/info-connect');
  //     }
  //   )
  // }
// }