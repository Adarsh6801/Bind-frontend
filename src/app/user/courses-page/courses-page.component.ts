import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { CourseService } from 'src/app/admin/service/course.service';
import { ProgramService } from 'src/app/admin/service/program.service';
import { LanguageService } from 'src/app/admin/service/language.service';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit{
  constructor(private courseServie : CourseService,
    private progService: ProgramService,
    private langService : LanguageService
    
    ){}
  course!:any[]
  program!:any[];
  language!:any[];
  ngOnInit(): void {
    this.getAllCourse()
    this.getAllLanguage()
    this.getAllProgram()

  }
getAllCourse(){
  return this.courseServie.getAllCourse().subscribe((response)=>{
  this.course=response.course
  console.log(this.course,'course...');
  })
}
getAllProgram(){
  this.progService.getAllProgram().subscribe((response)=>{
   this.program=response.lang
   console.log(this.program,'program');
   

  })
}
getAllLanguage(){
  this.langService.getAllLanguage().subscribe((response)=>{
   this.language=response.lang
   console.log(this.language,'language');

  })
}

}
