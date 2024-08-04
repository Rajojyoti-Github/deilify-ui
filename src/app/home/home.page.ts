import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  topRateItems = [
    { image: 'assets/images/wash.png', title: 'Dry Cleaning', price: '₹500/-' },
    { image: 'assets/images/ironing.png', title: 'Express Wash', price: '₹700/-' },
    { image: 'assets/images/starching.png', title: 'Starching', price: '₹700/-' },
    { image: 'assets/images/wash.png', title: 'Express Wash', price: '₹700/-' },
    { image: 'assets/images/ironing.png', title: 'Starching', price: '₹700/-' },
    { image: 'assets/images/starching.png', title: 'Express Wash', price: '₹700/-' },
    { image: 'assets/images/wash.png', title: 'Starching', price: '₹700/-' },
  ];

  mindItems = [
    { image: 'assets/images/wash.png', title: 'Dry Cleaning' },
    { image: 'assets/images/ironing.png', title: 'Washing' },
    { image: 'assets/images/starching.png', title: 'Dying' },
    { image: 'assets/images/wash.png', title: 'Express Wash' },
    { image: 'assets/images/ironing.png', title: 'Ironing' },
    { image: 'assets/images/starching.png', title: 'Mending' },
    { image: 'assets/images/wash.png', title: 'Ornamental' },
    { image: 'assets/images/ironing.png', title: 'Starching' },
  ];

  constructor(private router: Router) {}

  editProfile() {
    this.router.navigate(['edit-profile']);
  }

}
