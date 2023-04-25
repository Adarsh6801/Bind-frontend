import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { response } from 'express';
import { CourseService } from 'src/app/admin/service/course.service';
import { ProgramService } from 'src/app/admin/service/program.service';
import { LanguageService } from 'src/app/admin/service/language.service';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit{
  constructor(private courseServie : CourseService,
    private progService: ProgramService,
    private langService : LanguageService,
    private service : CategoryService,
    private router : Router
    ){
    }
  course!:any[]
  program!:any[];
  language!:any[];
  selectedProgram!:string;
  selectedLanguage!:string;
  filterdCourses!:any[]
  searchTerm!: string;
  ngOnInit(): void {
    
    this.getAllCourse()
    this.getAllLanguage()
    this.getAllProgram()
    

  }
getAllCourse(){
  return this.courseServie.getAllCourse().subscribe((response)=>{
  this.course=response.course
  this.filterdCourses=this.course
  })
}
getAllProgram(){
  this.progService.getAllProgram().subscribe((response)=>{
   this.program=response.lang
    this.program
   

  })
}
getAllLanguage(){
  this.langService.getAllLanguage().subscribe((response)=>{
   this.language=response.lang
   console.log(this.language,'language');

  })
}
onSelectProgram(event: any) {
  const selectedValue = event.target.value;
  console.log(selectedValue, 'first');

}
onSelectLanguage(event:any){
  const selectedValue = event.target.value;
  console.log(selectedValue,'second');
  this.selectedLanguage=selectedValue
}
filterCourses(){
  if (this.searchTerm) {
    this.filterdCourses = this.course.filter(course =>
      course.courseName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } else {
    // If the search term is empty, show all courses
    this.filterdCourses = this.course;
  }
}

}

