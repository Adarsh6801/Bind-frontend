import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireStorage} from "@angular/fire/compat/storage"
import { Message } from 'primeng/api';
import { ProgramService } from '../service/program.service';

@Component({
  selector: 'app-program-page',
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.css']
})
export class ProgramPageComponent implements OnInit{
  programForm!: FormGroup ;
  visible!: boolean;
  text!: string;
  imageFile!: File; 
  messages!: Message[];
  messages1!: Message[];
  program!:any[];
  constructor(private programService : ProgramService,  private firestorage:AngularFireStorage) { }

  ngOnInit() {
    this.getAllProgram()
  }

  getAllProgram(){
    this.programService.getAllProgram().subscribe((response)=>{
      
      this.program=response.lang
      console.log(this.program,'program...');
    })
  }
  
  onImageFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }
  
  async upload(text:string) {
    const path=`programImage/${this.imageFile.name}`
    const upload=await this.firestorage.upload(path,this.imageFile)
    const url= await upload.ref.getDownloadURL()    
    const data={
      program:text,
      imageUrl:url
    }
    console.log(data,'dataaa');
    
    this.programService.addProgram(data).subscribe((response)=>{
      if(response.status){
        console.log("hiii");
        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        this.getAllProgram()
        setTimeout(()=>{
          this.messages=[]
        },3000)
      }else{
        this.messages=[{ severity: 'warn', summary: 'Waning', detail: response.msg }];
        this.getAllProgram()
        setTimeout(()=>{
          this.messages=[]
        },3000)
        
      }
    })
  }
  deleteProgram(id:string){
    this.programService.deleteProgram(id).subscribe((response)=>{
      console.log(response);
      this.getAllProgram()
      this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
      setTimeout(()=>{
        this.messages=[]
      },3000)
    })
    
  }

    showDialog() {
        this.visible = true;
    }
}
