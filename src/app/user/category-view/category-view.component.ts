import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { response } from 'express';
import { Message } from 'primeng/api';
import { CourseService } from '../service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit{
  messages!: Message[];
  notFound:boolean=false;
  courses!:any[];
constructor(public activatedRoute:ActivatedRoute, private catService:CategoryService, private courseService : CourseService, private router: Router){
  activatedRoute.params.subscribe((params)=>{
    console.log(params['id'],'params');
    this.catService.getProgramById(params['id']).subscribe((response)=>{
      console.log(response);
      if(response.status){
        this.notFound=false;
        this.courses=response.data;
      }else{
        this.notFound=true;
        this.messages = [
          { severity: 'info', summary: 'Info', detail: response.msg },
      ];
      setTimeout(()=>{
        this.messages=[]
      },3000)
      }
    })
  })
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 

}
