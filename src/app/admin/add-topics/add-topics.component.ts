import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css']
})
export class AddTopicsComponent {
  items: any[] = [{ topic: '', importance: '' }];

  onFormSubmit() {
    // Handle form submission logic here
    console.log(this.items);
  }

  addForm() {
    // Add a new form item to the items array
    this.items.push({ topic: '', importance: '' });
  }

  removeForm() {
    // Remove the last form item from the items array
    this.items.pop();
  }

  removeTopic(index: number) {
    // Remove the form item at the given index from the items array
    this.items.splice(index, 1);
  }
}
