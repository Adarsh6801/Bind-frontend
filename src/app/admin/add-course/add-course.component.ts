import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{
[x: string]: any;
  courseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      program: ['', Validators.required],
      language: ['', Validators.required],
      numberOfTopics: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
      video: ['']
    });
  }

  onSubmit() {
    if (this.courseForm.invalid) {
      return;
    }
    // Handle form submission
    console.log(this.courseForm.value);
  }
}
