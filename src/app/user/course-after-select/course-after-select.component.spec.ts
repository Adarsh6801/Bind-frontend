import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAfterSelectComponent } from './course-after-select.component';

describe('CourseAfterSelectComponent', () => {
  let component: CourseAfterSelectComponent;
  let fixture: ComponentFixture<CourseAfterSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAfterSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAfterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
