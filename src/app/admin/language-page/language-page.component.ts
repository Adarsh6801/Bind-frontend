import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireStorage} from "@angular/fire/compat/storage"
import { LanguageService } from '../service/language.service';
import { Message } from 'primeng/api';
import { response } from 'express';

@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.css']
})
export class LanguagePageComponent {
  imageFile!: File; // Image file selected by user
  text!: string; // Text input from user
  visible!:boolean;
  messages!: Message[];
  messages1!: Message[];
  language!:any[];

  constructor(private formBuilder: FormBuilder, private firestorage:AngularFireStorage, private langService: LanguageService) { }

  ngOnInit() {
    this.getAllLanguage()
  }

getAllLanguage(){
  this.langService.getAllLanguage().subscribe((response)=>{
    
    this.language=response.lang
    console.log(this.language);
  })
}

  onImageFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }
  
 async upload(text:string) {
    const path=`languageImage/${this.imageFile.name}`
    const upload=await this.firestorage.upload(path,this.imageFile)
    const url= await upload.ref.getDownloadURL()    
    const data={
      language:text,
      imageUrl:url
    }
    console.log(data,'dataaa');
    
    this.langService.addLanguage(data).subscribe((response)=>{
      if(response.status){
        console.log("hiii");
        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        this.getAllLanguage()
        setTimeout(()=>{
          this.messages=[]
        },3000)
      }else{
        this.messages=[{ severity: 'warn', summary: 'Waning', detail: response.msg }];
        this.getAllLanguage()
        setTimeout(()=>{
          this.messages=[]
        },3000)
        
      }
    })
  }
  deleteLanguage(id:string){
    this.langService.deleteLanguage(id).subscribe((response)=>{
      console.log(response);
      this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
      this.getAllLanguage()
      setTimeout(()=>{
        this.messages=[]
      },3000)
    })
    
  }
    showDialog() {
        this.visible = true;
    }
}
