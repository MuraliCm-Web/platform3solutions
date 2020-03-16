import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-role-change',
  templateUrl: './role-change.component.html',
  styleUrls: ['./role-change.component.scss']
})
export class RoleChangeComponent implements OnInit {
  public userForm: FormGroup;
  public rolesList=[];

  constructor(
    public dialogRef: MatDialogRef<RoleChangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private appService: AppService,
    private snackBar: MatSnackBar) {}

    ngOnInit(): void {
      this.getRoles();
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
          this.snackBar.open(`Rols has been changed.`, 'Ok', {duration: 2000});
          this.dialogRef.close(true);
        });
    }
  }
  closePopup(): void {
    this.dialogRef.close();
  }
}
