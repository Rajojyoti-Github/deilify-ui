import { Injectable } from '@angular/core';
import { CommonApi } from './api/common.api';
import { ApiUrls } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commonApi: CommonApi) { }

  addUserDetails(formData: any) {
    return this.commonApi.putData(`${ApiUrls.register}/`, formData);
  }
}
