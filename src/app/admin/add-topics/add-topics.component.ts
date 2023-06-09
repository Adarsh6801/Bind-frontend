import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css'],
})
export class AddTopicsComponent {
  messages!: Message[];

  topics: any[] = [
    { topic: '', discription: '', subtopics: [{ subtopic: '' }] },
  ];
  constructor(private topicService: CourseService,private router : Router) {}

  onFormSubmit() {
    const topics={
      topics:this.topics
    }
    console.log(topics,'topic');
    
    this.topicService.addTopics(topics).subscribe((response) => {
      console.log(response, 'response');
      if(response.status){
        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        setTimeout(()=>{
          this.router.navigateByUrl('/admin/course')
        },3000)
        
      }
    });
    console.log(this.topics,"topics");
    
    
    
  }

  addForm() {
    // Add a new topic form item to the topics array
    this.topics.push({
      topic: '',
      discription: '',
      subtopics: [ {subtopic: '' }],
    });
  }

  removeForm(index: number) {
    // Remove the topic form item at the given index from the topics array
    this.topics.splice(index, 1);
  }

  addSubtopic(topicIndex: number) {
    // Add a new subtopic form item to the subtopics array of the given topic
    this.topics[topicIndex].subtopics.push({ subtopic: '' });
  }

  removeSubtopic(topicIndex: number, subtopicIndex: number) {
    // Remove the subtopic form item at the given subtopicIndex from the subtopics array of the given topic
    this.topics[topicIndex].subtopics.splice(subtopicIndex, 1);
  }
}
