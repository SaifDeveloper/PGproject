import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";

import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _validateService : ValidateService,private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  name: string;
  phone: number;
  comment: string;

  title: string = 'My first AGM project';
  lat: number = 13.042257;
  lng: number = 77.613552;
  pglat: number = 13.0402054;
  pglng: number = 77.6215341;
  zoom: number = 14;

  onContactSubmit(){
    /*console.log(this.name);
    console.log(this.phone);
    console.log(this.comment);*/

    const user = {
      name: this.name,
      phone: this.phone,
      comment: this.comment
    };

    //Required fields
    if(!this._validateService.validateUser(user)){
      this.flashMessage.show('Please fill in all fields',
        {
          classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
          timeout: 3000, // Default is 3000
        }
      );
      return false;
    }

    //Validate emails
    if(!this._validateService.validatePhone(user.phone)){
      this.flashMessage.show('Please provide a valid phone number',
        {
          classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
          timeout: 3000, // Default is 3000
        }
      );
      return false;
    }
  }




}
