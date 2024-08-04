import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/lib/services/common.service';
import { UserService } from 'src/app/lib/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  form = {
    fullName: '',
    mobileNumber: '',
    email: ''
  };
  selectedPreferences: string[] = [];

  constructor(private router: Router, private commonService: CommonService, private userService: UserService) { }

  ngOnInit() {
  }

  addUserDetails() {
    Object.assign(this.form, { myPreference: this.selectedPreferences });
    this.commonService.presentLoading();
    this.userService.addUserDetails(this.form).subscribe({
        next: (res: any) => {
            this.commonService.dissmiss_loading();
            if (res.success) {
                this.commonService.success('Profile successfully updated');
                this.router.navigateByUrl('/home');
            } else if (res && res.error) {
                this.commonService.danger(res.error.message);
            }
        },
        error: (err: any) => {
            this.commonService.dissmiss_loading();
            this.commonService.danger('Something went wrong!!');
        },
        complete: () => {
            this.commonService.dissmiss_loading();
        }
    });
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

}
