import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneCheck } from 'src/app/config/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  phoneNumber: any;
  invalidPhone: boolean = true;
  fullName: any;
  email: any;
  selectedPreferences: string[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getOtp() {
    this.router.navigate(['otp']);
  }

  validatePhone(e: any) {
    this.invalidPhone = !PhoneCheck(this.phoneNumber);
  }

  toggleSelection(preference: string) {
    const index = this.selectedPreferences.indexOf(preference);
    if (index > -1) {
      this.selectedPreferences.splice(index, 1);
    } else {
      this.selectedPreferences.push(preference);
    }
  }

  isSelected(preference: string): boolean {
    return this.selectedPreferences.includes(preference);
  }

  Login() {
    this.router.navigate(['login']);
  }

  registration() {
    console.log('Registration');
  }

}
