import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-after-select',
  templateUrl: './course-after-select.component.html',
  styleUrls: ['./course-after-select.component.css'],
})
export class CourseAfterSelectComponent implements OnInit {
  course!: any;
  activeCourses!: any;
  topic!: any[];
  length!: number;
  completedTopics!: any[];
  progressTable!: any[];
  messages!: Message[];
  ngOnInit(): void {
    this.getCurrentCourse();
  }
  constructor(private courseService: CourseService, private router: Router) {}

  getCurrentCourse() {
    this.courseService.getCurrentCourse().subscribe((response) => {
      console.log(response, 'responsee');
      this.activeCourses = response.activeCourses[0];
      this.course = response.course;
      console.log(this.activeCourses, 'currentCourse');
      console.log(this.course, 'course');
      this.topic = response.course.topic.topics;
      console.log(this.topic, 'topics tipics');
      this.length = this.topic.length;
      this.completedTopics = response.completedTopics;
      this.progressTable = response.progress;
      console.log(this.progressTable, 'akdfkajdf');
    });
  }
  exitCourse() {
    this.courseService.exitCourse().subscribe((response) => {
      if (response.status) {
        this.messages = [
          { severity: 'success', summary: 'Success', detail: response.msg },
        ];
      }
      setTimeout(() => {
        this.router.navigateByUrl('/user/courses');
      }, 3000);
    });
  }
}
