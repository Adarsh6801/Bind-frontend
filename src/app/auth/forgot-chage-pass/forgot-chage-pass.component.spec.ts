import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotChagePassComponent } from './forgot-chage-pass.component';

describe('ForgotChagePassComponent', () => {
  let component: ForgotChagePassComponent;
  let fixture: ComponentFixture<ForgotChagePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotChagePassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotChagePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
