import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage} from "@angular/fire/compat/storage"

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{
[x: string]: any;
  courseForm!: FormGroup;
  imageFile!:File;
  videoFile!:File;

  constructor(private fb: FormBuilder,  private firestorage:AngularFireStorage) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [null],
      videoUrl: [null],
      program: ['', Validators.required],
      language: ['', Validators.required],
    });
    
  }
  imageUpload(event:any)
  {    
    this.imageFile = event.target.files[0];
  }
  videoUpload(event:any)
  {
    this.videoFile = event.target.files[0];
  }
 async onSubmit() {

    // Handle form submission
    const course_image_path=`courseImage/${this.imageFile.name}`
    const course_video_path=`courseVideo/${this.videoFile.name}`

    const imageUpload=await this.firestorage.upload(course_image_path,this.imageFile)
    const imageurl= await imageUpload.ref.getDownloadURL()
    const videoUpload=await this.firestorage.upload(course_video_path,this.videoFile)
    const videoUrl= await videoUpload.ref.getDownloadURL()
    this.courseForm.patchValue({
      imageurl:imageurl,
      videoUrl:videoUrl
    })
    console.log(this.courseForm.value);
  }
}
