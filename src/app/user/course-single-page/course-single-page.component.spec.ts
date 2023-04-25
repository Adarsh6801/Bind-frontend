import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSinglePageComponent } from './course-single-page.component';

describe('CourseSinglePageComponent', () => {
  let component: CourseSinglePageComponent;
  let fixture: ComponentFixture<CourseSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSinglePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
