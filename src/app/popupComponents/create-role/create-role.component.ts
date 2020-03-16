import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  public roleForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private appService: AppService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      id: [null],
      role: [null, [Validators.required]],
      description: [null]
    });
    if (this.data && this.data.id) {
      this.roleForm.patchValue(this.data);
    }
  }

  onSave() {
    this.roleForm.markAllAsTouched();
    if (this.roleForm.valid) {
      this.appService.createUpdateRole(this.roleForm.value)
        .subscribe((res: any) => {
          this.snackBar.open(`Role has been ${this.roleForm.value.id ? 'updated' : 'created'}.`, 'Ok', {duration: 2000});
          this.dialogRef.close(true);
        });
    }
  }

  closePopup(): void {
    this.dialogRef.close();
  }
}
