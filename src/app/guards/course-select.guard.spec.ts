import { TestBed } from '@angular/core/testing';

import { CourseSelectGuard } from './course-select.guard';

describe('CourseSelectGuard', () => {
  let guard: CourseSelectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseSelectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
