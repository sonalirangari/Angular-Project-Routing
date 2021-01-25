import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  previewphoto = false;
employeeform:FormGroup;
  skills: any;
  constructor() { }

  ngOnInit() {
   this.employeeform = new FormGroup({
      name: new FormControl(),
      mobileno: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
      pass: new FormControl(),
    })
      // create skills form Group 
      this.skills= new FormGroup({
        skillName: new FormControl(),
        exprianceInYear: new FormControl(),
        proficiency: new FormControl()

      })

    
  }

  togglephotopreview(){
    this.previewphoto = !this.previewphoto;
  }






  onSubmit(): void {
    console.log(this.employeeform.touched);
    console.log(this.employeeform.value);

    console.log(this.skills.touched);
    console.log(this.skills.value);


    console.log(this.employeeform.controls.name.touched);
    console.log(this.employeeform.get('name').value);

    console.log(this.skills.controls.skillName.touched);
    console.log(this.skills.get('name').value);

    
    
    }

}
