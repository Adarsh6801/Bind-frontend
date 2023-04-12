import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { CourseService } from '../service/course.service';
import { response } from 'express';
import { LanguageService } from '../service/language.service';
import { ProgramService } from '../service/program.service';

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

  constructor(
    private fb: FormBuilder,
    private firestorage: AngularFireStorage,
    private courseService: CourseService,
    private langService: LanguageService,
    private progService: ProgramService
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
        console.log(response);
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
