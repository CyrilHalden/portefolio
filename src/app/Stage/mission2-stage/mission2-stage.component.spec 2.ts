import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission2StageComponent } from './mission2-stage.component';

describe('Mission2StageComponent', () => {
  let component: Mission2StageComponent;
  let fixture: ComponentFixture<Mission2StageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mission2StageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mission2StageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
