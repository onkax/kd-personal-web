import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';

export interface DialogData {
    notes: string;
  }
  
  @Component({
    selector: 'notes-dialog',
    templateUrl: 'dialog.html',
  })
  export class DialogComponent implements OnInit {
    form: FormGroup;
    constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) {
  
        this.form = fb.group({
          notes: ['', Validators.required],
        });
  
      }
    ngOnInit(): void {
      
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }