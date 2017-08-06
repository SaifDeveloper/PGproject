import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateUser(user){
    if(user.name == undefined || user.phone == undefined ||user.comment == undefined){
      return false;
    }else {
      return true;
    }
  }

  validatePhone(phone){
    const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ ;
    return re.test(phone);
  }
}
