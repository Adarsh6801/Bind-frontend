import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  visible!: boolean;
  cities!: any[];
  courses!:any[];
  formGroup!: FormGroup;
  messages!: Message[];
  
  constructor(private courseService: CourseService){}

  ngOnInit() {
    this.getAllCourse()
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
      this.formGroup = new FormGroup({
          value: new FormControl(1234),
          coursename: new FormControl()
      });
      
    }
    getAllCourse(){
      this.courseService.getAllCourse().subscribe((response)=>{
        console.log(response);
        this.courses=response.course;
        
      })
    }
    deleteCourse(id:string){
      console.log(id,'id id id ');
      
      this.courseService.deleteCourse(id).subscribe((response)=>{
        if(response.status){
          this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
            this.getAllCourse()
          setTimeout(()=>{
            this.messages=[]
          },3000)
        }
      })
    }

  showDialog() {
    this.visible = true;
}
}
