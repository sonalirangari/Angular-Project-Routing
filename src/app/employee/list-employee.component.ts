import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  loginform:FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginform = new FormGroup({
      email: new FormControl(),
      pass: new FormControl()
  })

}
onSubmit(): void {
  console.log(this.loginform.touched)
  console.log(this.loginform.value)


  console.log(this.loginform.controls.email.touched);
    console.log(this.loginform.get('email').value);
    
  
  }

}
