import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { CourseService } from '../service/course.service';
import { Message } from 'primeng/api';
import { LanguageService } from '../service/language.service';
import { ProgramService } from '../service/program.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  [x: string]: any;
  courseForm!: FormGroup;
  imageFile!: File;
  videoFile!: File;
  programs!: any[];
  languages!: any[];
  messages!: Message[];
  buttonLoader:boolean=false;
  constructor(
    private fb: FormBuilder,
    private firestorage: AngularFireStorage,
    private courseService: CourseService,
    private langService: LanguageService,
    private progService: ProgramService,
    private router:Router
  ) {}

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
  }
  videoUpload(event: any) {
    this.videoFile = event.target.files[0];
  }
  async onSubmit() {
    // Handle form submission
    this.buttonLoader=true;
    const course_image_path = `courseImage/${this.imageFile.name}`;
    const course_video_path = `courseVideo/${this.videoFile.name}`;

    const imageUpload = await this.firestorage.upload(
      course_image_path,
      this.imageFile
    );
    const imageUrl = await imageUpload.ref.getDownloadURL();
    const videoUpload = await this.firestorage.upload(
      course_video_path,
      this.videoFile
    );
    const videoUrl = await videoUpload.ref.getDownloadURL();
    console.log(imageUrl);

    this.courseForm.patchValue({
      imageUrl: imageUrl,
      videoUrl: videoUrl,
    });
    this.courseService
      .addCourse(this.courseForm.value)
      .subscribe((response) => {
        console.log(response,'course response...');
        
        if(response.status){
          this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
          setTimeout(()=>{
            this.router.navigateByUrl('/admin/add-topics')
          },3000)
        }
        else{
          this.buttonLoader=false;
          this.messages = [{ severity: 'warn', summary: 'Warning', detail: response.msg }];
          setTimeout(()=>{
            this.messages=[]
          },3000)
        }
      });
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
}
