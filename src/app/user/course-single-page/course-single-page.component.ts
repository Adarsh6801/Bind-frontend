import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';
import { response } from 'express';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-single-page',
  templateUrl: './course-single-page.component.html',
  styleUrls: ['./course-single-page.component.css']
})
export class CourseSinglePageComponent {
  visible!: boolean;
  messages!: Message[];
 
  noCurrentCourse!:boolean;
  CurrentCourse:boolean=false;
  selectedTopic = null;
  topics!:any[]
  course!:any
  length:number=0;
  userAttemptingAnother:boolean=false;
  lotsOfTabs = new Array(this.length).fill(0).map((_, index) => `Tab ${index}`);
  constructor(public activatedRoute:ActivatedRoute,private courseService:CourseService, private router : Router){
    activatedRoute.params.subscribe((params)=>{
      console.log(params['id'],'params');
      this.courseService.getCourseById(params['id']).subscribe((response)=>{
        console.log(response,'responsses');
        if(!response.currentCourse){
          this.noCurrentCourse=true
          this.topics=response.course.topic.topics
          this.length=this.topics.length
          console.log(this.topics,'topic');
          this.course=response.course
        }
        else if(response.currentCourse){
          if(response.userAttemptingAnother){
            this.userAttemptingAnother=true;
          }
          this.CurrentCourse=true;
          this.topics=response.course.topic.topics
          this.length=this.topics.length
          this.course=response.course
        }
      })
    })
  }
  getRandomColorClass(): string {
    const colors = [
      'bg-red-100',
      'bg-blue-100',
      'bg-yellow-100',
      'bg-green-100',
      'bg-purple-100',
      'bg-pink-100',
      'bg-indigo-100',
      'bg-gray-100',
      'bg-teal-100',
      'bg-orange-100',
    ];
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  showDialog() {
    this.visible = true;
}
getCourseWithoutMentor(id:any){
  console.log(id,'id in component');
  
 this.courseService.getCourseWithoutMentor(id).subscribe((response)=>{
  console.log(response);
  if(response.status){
    this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
    setTimeout(()=>{
      this.router.navigateByUrl('/user/courses')
    },3000)
  }
 })
  
}
courseWithMentor(course:any){
  if(course){
    localStorage.setItem('course', JSON.stringify(this.course));
    this.router.navigateByUrl('/user/checkout-page')
  }else{
    return
  }
}
}
