import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LanguageService } from '../service/language.service';
import { ProgramService } from '../service/program.service';
import { CourseService } from '../service/course.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{
  messages!: Message[];
  courseForm!: FormGroup;
  imageFile!: File;
  videoFile!: File;
  programs!: any[];
  languages!: any[];
  buttonLoader:boolean=false;
  course!:any;
  imagechange:boolean=false;
  videochange:boolean=false;
  constructor(
    private fb: FormBuilder,
    private langService: LanguageService,
    private progService: ProgramService,
    public activatedRoute:ActivatedRoute,
    private courseService: CourseService,
    private router : Router,
    private firestorage: AngularFireStorage,
  ) {
    activatedRoute.params.subscribe((params)=>{
      console.log(params['id'],'params....');
      this.courseService.getCourseById(params['id']).subscribe((response)=>{
        this.course=response.course;
        console.log(this.course,'respcourse onse...');
        this.courseForm.patchValue({
          title:this.course.courseName,
          description:this.course.discription,
          imageUrl:this.course.imageUrl,
          videoUrl:this.course.videoUrl,
          program:this.course.program,
          language:this.course.language
        })
      })
    })
  }
  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [null],
      videoUrl: [null],
      program: ['', Validators.required],
      language: ['', Validators.required],
    });
    this.getAllLanguage()
    this.getAllProgram()

  }

  imageUpload(event: any) {
    this.imageFile = event.target.files[0];
    this.imagechange=true;
  }
  videoUpload(event: any) {
    this.videoFile = event.target.files[0];
    this.videochange=true;
  }
  getAllProgram(){
    this.progService.getAllProgram().subscribe((response)=>{
      this.programs=response.lang
    })
  }
  getAllLanguage(){
    this.langService.getAllLanguage().subscribe((response)=>{
      this.languages=response.lang
    })
  }
 async onSubmit(){
  this.buttonLoader=true;
  if(this.imagechange){
    const course_image_path = `courseImage/${this.imageFile.name}`;
    const imageUpload = await this.firestorage.upload(
      course_image_path,
      this.imageFile
    );
     const imageUrl = await imageUpload.ref.getDownloadURL();
     this.courseForm.patchValue({
      imageUrl: imageUrl,
    });
  }
  if(this.videochange){
    const course_video_path = `courseVideo/${this.videoFile.name}`;
    const videoUpload = await this.firestorage.upload(
      course_video_path,
      this.videoFile
    );
    const videoUrl = await videoUpload.ref.getDownloadURL();
    this.courseForm.patchValue({
      videoUrl: videoUrl,
    });
  }
 console.log( this.courseForm.value,'course...');
    this.courseService.updatCourse(this.courseForm.value).subscribe((response)=>{
      if(response.status){
        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        setTimeout(()=>{  
          this.router.navigateByUrl('/admin/course')
        },3000)
      }
    })
    
  }

}
