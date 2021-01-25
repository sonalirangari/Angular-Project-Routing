import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cdk-employee',
  templateUrl: './cdk-employee.component.html',
  styleUrls: ['./cdk-employee.component.scss']
})
export class CdkEmployeeComponent implements OnInit {
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }

  products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];

onDrop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.products, event.previousIndex, event.currentIndex);
}
}


