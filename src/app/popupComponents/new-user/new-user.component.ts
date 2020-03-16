import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  public userForm: FormGroup;
  public rolesList: any[];
  constructor(
    public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private appService: AppService,
    private snackBar: MatSnackBar
  ) {
    this.getRoles();
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [null],
      empId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['Male'],
      role: [null, [Validators.required]],
      doj: [null, [Validators.required]],
      address: [null, [Validators.required]],
      city: [null, [Validators.required]],
      zip: [null, [Validators.required]],
    });
    if(this.data && this.data.id){
      this.userForm.patchValue(this.data)

    }
  }

  getRoles() {
    this.appService.getRole()
      .subscribe((res: any) => {
        this.rolesList = res;
      });
  }

  onSave() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      this.appService.createUpdateUser(this.userForm.value)
        .subscribe((res: any) => {
          this.snackBar.open(`User has been ${this.userForm.value.id ? 'updated' : 'created'}.`, 'Ok', {duration: 2000});
          this.dialogRef.close(true);
        });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
